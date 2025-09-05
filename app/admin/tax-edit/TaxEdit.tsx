'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

type TaxFormData = {
  Country: string;
  TextNum: number;
};

const TaxEdit = () => {
  const { data: taxes, error: fetchError, mutate } = useSWR('/api/tax'); // 獲取所有稅率
  const { trigger: addTax } = useSWRMutation(
    '/api/tax',
    async (url, { arg }: { arg: TaxFormData }) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (res.ok) {
        toast.success('新增成功');
        mutate();
      } else {
        const errorData = await res.json();
        toast.error(`新增失敗: ${errorData.message}`);
      }
    },
  );

  const { trigger: updateTax } = useSWRMutation(
    '/api/tax',
    async (
      url,
      { arg }: { arg: { id: string; Country: string; TextNum: number } },
    ) => {
      const res = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (res.ok) {
        toast.success('更新成功');
        mutate();
      } else {
        const errorData = await res.json();
        toast.error(`更新失敗: ${errorData.message}`);
      }
    },
  );

  const { trigger: deleteTax } = useSWRMutation(
    '/api/tax',
    async (url, { arg }: { arg: { id: string } }) => {
      const res = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (res.ok) {
        toast.success('刪除成功');
        mutate();
      } else {
        const errorData = await res.json();
        toast.error(`刪除失敗: ${errorData.message}`);
      }
    },
  );

  const [editingId, setEditingId] = useState<string | null>(null);

  const { register, handleSubmit, reset, setValue } = useForm<TaxFormData>();

  const onAddSubmit: SubmitHandler<TaxFormData> = async (data) => {
    await addTax(data);
    reset();
  };

  const onEditSubmit: SubmitHandler<TaxFormData> = async (data) => {
    if (editingId) {
      await updateTax({ id: editingId, ...data });
      setEditingId(null);
    }
  };

  const startEdit = (id: string, Country: string, TextNum: number) => {
    setEditingId(id);
    setValue('Country', Country);
    setValue('TextNum', TextNum);
  };

  if (fetchError) return <div>載入資料失敗: {fetchError.message}</div>;
  if (!taxes) return <div>載入中...</div>;

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-2xl'>編輯稅率</h1>

      {/* 新增表單 */}
      <form onSubmit={handleSubmit(onAddSubmit)} className='mb-8'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <input
            type='text'
            placeholder='國家'
            {...register('Country', { required: true })}
            className='input input-bordered'
          />
          <input
            type='number'
            step='0.01'
            placeholder='稅率 (例如 0.15)'
            {...register('TextNum', { required: true, valueAsNumber: true })}
            className='input input-bordered'
          />
          <button type='submit' className='btn btn-primary'>
            新增
          </button>
        </div>
      </form>

      {/* 稅率列表 */}
      <table className='table w-full'>
        <thead>
          <tr>
            <th>國家</th>
            <th>稅率</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {taxes.map(
            (tax: { id: string; Country: string; TextNum: number }) => (
              <tr key={tax.id}>
                {editingId === tax.id ? (
                  <>
                    <td>
                      <input
                        type='text'
                        defaultValue={tax.Country}
                        {...register('Country', { required: true })}
                        className='input input-bordered w-full'
                      />
                    </td>
                    <td>
                      <input
                        type='number'
                        step='0.01'
                        defaultValue={tax.TextNum}
                        {...register('TextNum', {
                          required: true,
                          valueAsNumber: true,
                        })}
                        className='input input-bordered w-full'
                      />
                    </td>
                    <td>
                      <button
                        onClick={handleSubmit(onEditSubmit)}
                        className='btn btn-success btn-sm mr-2'
                      >
                        保存
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className='btn btn-ghost btn-sm'
                      >
                        取消
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{tax.Country}</td>
                    <td>{tax.TextNum}</td>
                    <td>
                      <button
                        onClick={() =>
                          startEdit(tax.id, tax.Country, tax.TextNum)
                        }
                        className='btn btn-primary btn-sm mr-2'
                      >
                        編輯
                      </button>
                      <button
                        onClick={() => deleteTax({ id: tax.id })}
                        className='btn btn-error btn-sm'
                      >
                        刪除
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaxEdit;
