//app\(front)\shipping\Form.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useTranslation } from '@/lib/useTranslation';

import CheckoutSteps from '@/components/checkout/CheckoutSteps';
import useCartService from '@/lib/hooks/useCartStore';
import { ShippingAddress } from '@/lib/models/OrderModel';

const Form = () => {
  const { t } = useTranslation();
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

  const countries = [
    '台灣', '中國', '日本', '韓國', '美國', '加拿大', '英國', '法國', '德國', '義大利'
    // 可以繼續添加更多國家
  ];

  return (
    <div>
      <CheckoutSteps current={1} />
      <div className='card mx-auto my-4 max-w-sm bg-base-300'>
        <div className='card-body'>
          <h1 className='card-title'>{t('fillOrderInfo')}</h1>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className='mb-2'>
              <label className='label' htmlFor='name'>
                {t('name')}
              </label>
              <input
                type='text'
                id='name'
                {...register('name', {
                  required: t('pleaseEnterName'),
                })}
                className='input input-bordered w-full max-w-sm'
              />
              {errors.name?.message && (
                <div className='text-error'>{errors.name.message}</div>
              )}
            </div>

            <div className='mb-2'>
              <label className='label' htmlFor='country'>
                {t('country')}
              </label>
              <Controller
                name="country"
                control={control}
                rules={{ required: t('pleaseSelectCountry') }}
                render={({ field }) => (
                  <select
                    {...field}
                    id='country'
                    className='select select-bordered w-full max-w-sm'
                  >
                    <option value=''>{t('selectCountry')}</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.country?.message && (
                <div className='text-error'>{errors.country.message}</div>
              )}
            </div>

            <div className='mb-2'>
              <label className='label' htmlFor='address'>
                {t('address')}
              </label>
              <input
                type='text'
                id='address'
                {...register('address', {
                  required: t('pleaseEnterAddress'),
                })}
                className='input input-bordered w-full max-w-sm'
              />
              {errors.address?.message && (
                <div className='text-error'>{errors.address.message}</div>
              )}
            </div>

            <div className='mb-2'>
              <label className='label' htmlFor='email'>
                {t('email')}
              </label>
              <input
                type='email'
                id='email'
                {...register('email', {
                  required: t('pleaseEnterEmail'),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t('invalidEmailFormat'),
                  },
                })}
                className='input input-bordered w-full max-w-sm'
              />
              {errors.email?.message && (
                <div className='text-error'>{errors.email.message}</div>
              )}
            </div>

            <div className='mb-2'>
              <label className='label'>{t('phoneNumber')} {t('phoneNumberHint')}</label>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: t('pleaseEnterPhoneNumber'),
                  pattern: {
                    value: /^\+[1-9]{1}[0-9]{1,14}$/,
                    message: t('invalidPhoneNumber'),
                  },
                }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    defaultCountry="TW"
                    international
                    countryCallingCodeEditable={false}
                    placeholder={t('enterPhoneNumber')}
                    className='input input-bordered w-full max-w-sm'
                  />
                )}
              />
              {errors.phone?.message && (
                <div className='text-error'>{errors.phone.message}</div>
              )}
            </div>

            <div className='my-2'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='btn btn-primary w-full'
              >
                {isSubmitting && <span className='loading loading-spinner'></span>}
                {t('next')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;