// app\(front)\shipping\Form.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, ValidationRule, useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input'; // 導入庫

import CheckoutSteps from '@/components/checkout/CheckoutSteps';
import useCartService from '@/lib/hooks/useCartStore';
import { ShippingAddress } from '@/lib/models/OrderModel';

// 如果需要自訂樣式，請在全局導入 'react-phone-number-input/style.css'

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
          required: required && `${name} is required`,
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
            <FormInput name='名字' id='name' required />
            <FormInput name='國家' id='country' required />
            <FormInput name='地址' id='address' required />
            <FormInput 
              name='郵箱' 
              id='email' 
              required 
              type='email' 
              pattern={{
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '無效的郵箱格式',
              }}
            />
            <div className='mb-2'>
              <label className='label'>手機 (請包括全球國家代碼，例如 +86 1234567890)</label>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: '手機 is required',
                  pattern: {
                    value: /^\+[1-9]{1}[0-9]{1,14}$/,
                    message: '請輸入有效的國際手機號碼 (例如 +86 1234567890)',
                  },
                }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    defaultCountry="CN" // 預設中國
                    international
                    countryCallingCodeEditable={false} // 禁止編輯代碼
                    placeholder="輸入手機號碼"
                    className='' // 應用您的樣式
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