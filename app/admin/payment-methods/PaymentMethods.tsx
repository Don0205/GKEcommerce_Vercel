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
        throw new Error('Failed to update');
      }
      toast.success('Updated successfully');
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
        throw new Error('Failed to update bank card');
      }
      toast.success('Bank card updated successfully');
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

  if (methodsError || bankError) return 'Error loading data';
  if (!paymentMethods || !bankData) return 'Loading...';

  return (
    <div>
      <h1 className='text-2xl my-4'>Payment Methods</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Enabled</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paymentMethods.map((method: { id: string; name: string; enabled: boolean }) => (
            <tr key={method.id}>
              <td>{method.name}</td>
              <td>{method.enabled ? 'Yes' : 'No'}</td>
              <td>
                <button
                  className='btn btn-sm btn-primary'
                  disabled={isUpdatingMethod}
                  onClick={() => updateMethod({ id: method.id, enabled: !method.enabled })}
                >
                  Toggle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='card mt-8 bg-base-300'>
        <div className='card-body'>
          <h2 className='card-title'>Bank Card Number</h2>
          <input
            type='text'
            value={cardNum}
            onChange={(e) => setCardNum(e.target.value)}
            className='input input-bordered w-full max-w-xs'
            placeholder='Enter card number'
          />
          <button
            className='btn btn-primary mt-4'
            disabled={isUpdatingBank}
            onClick={handleUpdateBank}
          >
            Update Card Number
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default PaymentMethods;