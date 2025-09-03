// app\(front)\shipping\Form.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, ValidationRule, useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';

import CheckoutSteps from '@/components/checkout/CheckoutSteps';
import useCartService from '@/lib/hooks/useCartStore';
import { ShippingAddress } from '@/lib/models/OrderModel';

const Form = () => {
  const router = useRouter();
  const { saveShippingAddress, shippingAddress } = useCartService();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ShippingAddress>({
    defaultValues: {
      name: '',
      country: '',
      address: '',
      email: '',
      phone: '',
    },
  });

  useEffect(() => {
    setValue('name', shippingAddress.name);
    setValue('country', shippingAddress.country);
    setValue('address', shippingAddress.address);
    setValue('email', shippingAddress.email);
    setValue('phone', shippingAddress.phone);
  }, [setValue, shippingAddress]);

  const formSubmit: SubmitHandler<ShippingAddress> = async (form) => {
    saveShippingAddress(form);
    router.push('/payment');
  };

  const FormInput = ({
    id,
    name,
    required,
    pattern,
    type = 'text',
  }: {
    id: keyof ShippingAddress;
    name: string;
    required?: boolean;
    pattern?: ValidationRule<RegExp>;
    type?: string;
  }) => (
    <div className='mb-2'>
      <label className='label' htmlFor={id}>
        {name}
      </label>
      <input
        type={type}
        id={id}
        {...register(id, {
          required: required && `請輸入${name}`,
          pattern,
        })}
        className='input input-bordered w-full max-w-sm'
      />
      {errors[id]?.message && (
        <div className='text-error'>{errors[id]?.message}</div>
      )}
    </div>
  );

  return (
    <div>
      <CheckoutSteps current={1} />
      <div className='card mx-auto my-4 max-w-sm bg-base-300'>
        <div className='card-body'>
          <h1 className='card-title'>填寫訂單資訊</h1>
          <form onSubmit={handleSubmit(formSubmit)}>
            <FormInput name='姓名' id='name' required />
            <FormInput name='國家' id='country' required />
            <FormInput name='地址' id='address' required />
            <FormInput 
              name='電子郵件' 
              id='email' 
              required 
              type='email' 
              pattern={{
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '無效的電子郵件格式',
              }}
            />
            <div className='mb-2'>
              <label className='label'>手機號碼 (請包括國際區號，例如 +886 912345678)</label>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: '請輸入手機號碼',
                  pattern: {
                    value: /^\+[1-9]{1}[0-9]{1,14}$/,
                    message: '請輸入有效的國際手機號碼 (例如 +886 912345678)',
                  },
                }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    defaultCountry="TW"
                    international
                    countryCallingCodeEditable={false}
                    placeholder="輸入手機號碼"
                    className=''
                  />
                )}
              />
              {errors.phone?.message && (
                <div className='text-error'>{errors.phone?.message}</div>
              )}
            </div>
            <div className='my-2'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='btn btn-primary w-full'
              >
                {isSubmitting && <span className='loading loading-spinner' />}
                下一步
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;