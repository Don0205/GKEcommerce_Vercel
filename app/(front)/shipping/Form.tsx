'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, ValidationRule, useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

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

  const countries = [
    '阿富汗', '阿爾巴尼亞', '阿爾及利亞', '安道爾', '安哥拉', '安提瓜和巴布達', '阿根廷', '亞美尼亞', '澳大利亞', '奧地利',
    '阿塞拜疆', '巴哈馬', '巴林', '孟加拉國', '巴巴多斯', '白俄羅斯', '比利時', '伯利茲', '貝寧', '不丹',
    '玻利維亞', '波斯尼亞和黑塞哥維那', '博茨瓦納', '巴西', '文萊', '保加利亞', '布基納法索', '布隆迪', '柬埔寨', '喀麥隆',
    '加拿大', '佛得角', '中非共和國', '乍得', '智利', '中國', '哥倫比亞', '科摩羅', '剛果', '剛果民主共和國',
    '哥斯達黎加', '科特迪瓦', '克羅地亞', '古巴', '塞浦路斯', '捷克共和國', '丹麥', '吉布提', '多米尼克', '多明尼加共和國',
    '厄瓜多爾', '埃及', '薩爾瓦多', '赤道幾內亞', '厄立特里亞', '愛沙尼亞', '埃塞俄比亞', '斐濟', '芬蘭', '法國',
    '加蓬', '岡比亞', '格魯吉亞', '德國', '加納', '希臘', '格林納達', '危地馬拉', '幾內亞', '幾內亞比紹',
    '圭亞那', '海地', '洪都拉斯', '香港', '匈牙利', '冰島', '印度', '印度尼西亞', '伊朗', '伊拉克', '愛爾蘭',
    '以色列', '意大利', '牙買加', '日本', '約旦', '哈薩克斯坦', '肯尼亞', '基里巴斯', '科威特', '吉爾吉斯斯坦',
    '老撾', '拉脫維亞', '黎巴嫩', '萊索托', '利比里亞', '利比亞', '列支敦士登', '立陶宛', '盧森堡', '馬達加斯加',
    '馬拉維', '馬來西亞', '馬爾代夫', '馬里', '馬耳他', '馬紹爾群島', '毛里塔尼亞', '毛里求斯', '墨西哥', '密克羅尼西亞',
    '摩爾多瓦', '摩納哥', '蒙古', '黑山', '摩洛哥', '莫桑比克', '緬甸', '納米比亞', '瑙魯', '尼泊爾',
    '荷蘭', '新西蘭', '尼加拉瓜', '尼日爾', '尼日利亞', '朝鮮', '北馬其頓', '挪威', '阿曼', '巴基斯坦',
    '帕勞', '巴勒斯坦', '巴拿馬', '巴布亞新幾內亞', '巴拉圭', '秘魯', '菲律賓', '波蘭', '葡萄牙', '卡塔爾',
    '羅馬尼亞', '俄羅斯', '盧旺達', '聖基茨和尼維斯', '聖盧西亞', '聖文森特和格林納丁斯', '薩摩亞', '聖馬力諾', '聖多美和普林西比', '沙特阿拉伯',
    '塞內加爾', '塞爾維亞', '塞舌爾', '塞拉利昂', '新加坡', '斯洛伐克', '斯洛文尼亞', '所羅門群島', '索馬里', '南非',
    '韓國', '南蘇丹', '西班牙', '斯里蘭卡', '蘇丹', '蘇里南', '瑞典', '瑞士', '敘利亞', '台灣',
    '塔吉克斯坦', '坦桑尼亞', '泰國', '東帝汶', '多哥', '湯加', '特立尼達和多巴哥', '突尼斯', '土耳其', '土庫曼斯坦',
    '圖瓦盧', '烏干達', '烏克蘭', '阿拉伯聯合酋長國', '英國', '美國', '烏拉圭', '烏茲別克斯坦', '瓦努阿圖', '梵蒂岡城',
    '委內瑞拉', '越南', '也門', '贊比亞', '津巴布韋'
  ];

  return (
    <div>
      <CheckoutSteps current={1} />
      <div className='card mx-auto my-4 max-w-sm bg-base-300'>
        <div className='card-body'>
          <h1 className='card-title'>填寫訂單資訊</h1>
          <form onSubmit={handleSubmit(formSubmit)}>
            <FormInput name='姓名' id='name' required />
            <div className='mb-2'>
              <label className='label' htmlFor='country'>
                國家
              </label>
              <Controller
                name="country"
                control={control}
                rules={{ required: '請選擇國家' }}
                render={({ field }) => (
                  <select
                    {...field}
                    id='country'
                    className='select select-bordered w-full max-w-sm'
                  >
                    <option value=''>選擇國家</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.country?.message && (
                <div className='text-error'>{errors.country?.message}</div>
              )}
            </div>
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
              <div className="flex items-center">
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
                      className='input input-bordered w-full max-w-sm'
                    />
                  )}
                />
              </div>
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