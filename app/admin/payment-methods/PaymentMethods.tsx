// app/admin/payment-methods/page.tsx
'use client';
import React from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

const PaymentMethods = () => {
  const { data: paymentMethods, error: methodsError } = useSWR('/api/admin/payment-methods');
  const { data: bankData, error: bankError } = useSWR('/api/bank');

  const { trigger: updateMethod, isMutating: isUpdatingMethod } = useSWRMutation(
    '/api/admin/payment-methods',
    async (url, { arg }: { arg: { id: string; enabled: boolean } }) => {
      const res = await fetch(`${url}?id=${arg.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled: arg.enabled }),
      });
      if (!res.ok) {
        throw new Error('更新失敗');
      }
      toast.success('更新成功');
      return res.json();
    }
  );

  const { trigger: updateBank, isMutating: isUpdatingBank } = useSWRMutation(
    '/api/bank',
    async (url, { arg }: { arg: { cardNum: string } }) => {
      const res = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardNum: arg.cardNum }),
      });
      if (!res.ok) {
        throw new Error('更新銀行卡失敗');
      }
      toast.success('銀行卡更新成功');
      return res.json();
    }
  );

  const [cardNum, setCardNum] = React.useState(bankData?.cardNum || '');

  React.useEffect(() => {
    if (bankData) {
      setCardNum(bankData.cardNum || '');
    }
  }, [bankData]);

  const handleUpdateBank = () => {
    updateBank({ cardNum });
  };

  if (methodsError || bankError) return '載入數據時出錯';
  if (!paymentMethods || !bankData) return '載入中...';

  return (
    <div>
      <h1 className='text-2xl my-4'>付款方式</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>名稱</th>
            <th>啟用狀態</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {paymentMethods.map((method: { id: string; name: string; enabled: boolean }) => (
            <tr key={method.id}>
              <td>{method.name}</td>
              <td>{method.enabled ? '是' : '否'}</td>
              <td>
                <button
                  className='btn btn-sm btn-primary'
                  disabled={isUpdatingMethod}
                  onClick={() => updateMethod({ id: method.id, enabled: !method.enabled })}
                >
                  切換
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='card mt-8 bg-base-300'>
        <div className='card-body'>
          <h2 className='card-title'>銀行卡號</h2>
          <input
            type='text'
            value={cardNum}
            onChange={(e) => setCardNum(e.target.value)}
            className='input input-bordered w-full max-w-xs'
            placeholder='輸入卡號'
          />
          <button
            className='btn btn-primary mt-4'
            disabled={isUpdatingBank}
            onClick={handleUpdateBank}
          >
            更新卡號
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;