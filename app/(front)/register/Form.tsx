// app/(front)/register/Form.tsx
'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from '@/lib/useTranslation';

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Form = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();

  const params = useSearchParams();
  const router = useRouter();
  let callbackUrl = params.get('callbackUrl') || '/';

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl);
    }
  }, [callbackUrl, params, router, session]);

  const formSubmit: SubmitHandler<Inputs> = async (form) => {
    const { name, email, password } = form;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        return router.push(
          `/signin?callbackUrl=${callbackUrl}&success=${encodeURIComponent(t('accountCreatedSuccess'))}`,
        );
      } else {
        const data = await res.json();
        throw new Error(data.message);
      }
    } catch (err: any) {
      const error =
        err.message && err.message.indexOf('E11000') === 0
          ? t('emailAlreadyInUse')
          : err.message;
      toast.error(error || t('error'));
    }
  };

  return (
    <div className='card mx-auto my-4 max-w-sm bg-base-300'>
      <div className='card-body'>
        <h1 className='card-title'>{t('register')}</h1>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className='my-2'>
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
          <div className='my-2'>
            <label className='label' htmlFor='email'>
              {t('email')}
            </label>
            <input
              type='text'
              id='email'
              {...register('email', {
                required: t('pleaseEnterEmail'),
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: t('invalidEmailFormat'),
                },
              })}
              className='input input-bordered w-full max-w-sm'
            />
            {errors.email?.message && (
              <div className='text-error'> {errors.email.message}</div>
            )}
          </div>
          <div className='my-2'>
            <label className='label' htmlFor='password'>
              {t('password')}
            </label>
            <input
              type='password'
              id='password'
              {...register('password', {
                required: t('pleaseEnterPassword'),
              })}
              className='input input-bordered w-full max-w-sm'
            />
            {errors.password?.message && (
              <div className='text-error'>{errors.password.message}</div>
            )}
          </div>
          <div className='my-2'>
            <label className='label' htmlFor='confirmPassword'>
              {t('confirmPassword')}
            </label>
            <input
              type='password'
              id='confirmPassword'
              {...register('confirmPassword', {
                required: t('pleaseConfirmPassword'),
                validate: (value) => {
                  const { password } = getValues();
                  return password === value || t('passwordsDoNotMatch');
                },
              })}
              className='input input-bordered w-full max-w-sm'
            />
            {errors.confirmPassword?.message && (
              <div className='text-error'>{errors.confirmPassword.message}</div>
            )}
          </div>
          <div className='my-2'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='btn btn-primary w-full'
            >
              {isSubmitting && (
                <span className='loading loading-spinner'></span>
              )}
              {t('register')}
            </button>
          </div>
        </form>

        <div className='divider'> </div>
        <div>
          {t('alreadyHaveAccount')}{' '}
          <Link className='link' href={`/signin?callbackUrl=${callbackUrl}`}>
            {t('login')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;