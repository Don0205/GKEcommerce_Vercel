// app/admin/payment-methods/page.tsx
'use client';
import toast from 'react-hot-toast';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';


const PaymentMethods = () => {
  const { data: paymentMethods, error } = useSWR('/api/admin/payment-methods');

  const { trigger: updateMethod, isMutating } = useSWRMutation(
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

  if (error) return 'Error loading payment methods';
  if (!paymentMethods) return 'Loading...';

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
                  disabled={isMutating}
                  onClick={() => updateMethod({ id: method.id, enabled: !method.enabled })}
                >
                  Toggle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default PaymentMethods;