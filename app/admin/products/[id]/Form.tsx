// app\admin\products\[id]\Form.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ValidationRule, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { Product } from '@/lib/models/ProductModel';
import { formatId } from '@/lib/utils';

export default function ProductEditForm({ productId }: { productId: string }) {
  const { data: product, error } = useSWR(`/api/admin/products/${productId}`);
  const router = useRouter();
  const { trigger: updateProduct, isMutating: isUpdating } = useSWRMutation(
    `/api/admin/products/${productId}`,
    async (url, { arg }) => {
      const res = await fetch(`${url}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(arg),
      });
      const data = await res.json();
      if (!res.ok) return toast.error(data.message);

      toast.success('Product updated successfully');
      router.push('/admin/products');
    },
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Product>();

  const [images, setImages] = useState<string[]>([]); // 用於管理圖片陣列

  useEffect(() => {
    if (!product) return;
    setValue('name', product.name);
    setValue('slug', product.slug);
    setValue('price', product.price);
    setValue('category', product.category);
    setValue('brand', product.brand);
    setValue('countInStock', product.countInStock);
    setValue('description', product.description);
    setImages(product.images || []); // 載入現有圖片陣列
  }, [product, setValue]);

  const formSubmit = async (formData: any) => {
    await updateProduct({ ...formData, images }); // 將 images 陣列傳入
  };

  const FormInput = ({
    id,
    name,
    required,
    pattern,
  }: {
    id: keyof Product;
    name: string;
    required?: boolean;
    pattern?: ValidationRule<RegExp>;
  }) => (
    <div className='mb-6 md:flex'>
      <label className='label md:w-1/5' htmlFor={id}>
        {name}
      </label>
      <div className='md:w-4/5'>
        <input
          type='text'
          id={id}
          {...register(id, {
            required: required && `${name} is required`,
            pattern,
          })}
          className='input input-bordered w-full max-w-md'
        />
        {errors[id]?.message && (
          <div className='text-error'>{errors[id]?.message}</div>
        )}
      </div>
    </div>
  );

  // 新增 FormNumberInput 元件（專門處理 number）
  const FormNumberInput = ({
    id,
    name,
    required,
  }: {
    id: keyof Product;
    name: string;
    required?: boolean;
  }) => (
    <div className='mb-6 md:flex'>
      <label className='label md:w-1/5' htmlFor={id}>
        {name}
      </label>
      <div className='md:w-4/5'>
        <input
          type='number'
          id={id}
          {...register(id, {
            required: required && `${name} is required`,
            valueAsNumber: true, // 固定啟用，將輸入轉為數字
          })}
          className='input input-bordered w-full max-w-md'
        />
        {errors[id]?.message && (
          <div className='text-error'>{errors[id]?.message}</div>
        )}
      </div>
    </div>
  );

  const uploadHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return; // Handle null case, e.g., no files selected
    const files: File[] = Array.from(fileList);
    const toastId = toast.loading('Uploading images...');
    try {
      const resSign = await fetch('/api/cloudinary-sign', {
        method: 'POST',
      });
      const { signature, timestamp } = await resSign.json();

      const uploadPromises = files.map(async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('signature', signature);
        formData.append('timestamp', timestamp);
        formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!);
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
          {
            method: 'POST',
            body: formData,
          },
        );
        const data = await res.json();
        return data.secure_url;
      });

      const newUrls = await Promise.all(uploadPromises);
      setImages((prevImages) => [...prevImages, ...newUrls]);
      toast.success('Files uploaded successfully', { id: toastId });
    } catch (err: any) {
      toast.error(err.message, { id: toastId });
    }
  };

  // 移除圖片函數
  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className='py-4 text-2xl'>Edit Product {formatId(productId)}</h1>
      <div>
        <form onSubmit={handleSubmit(formSubmit)}>
          <FormInput name='Name' id='name' required />
          <FormInput name='Slug' id='slug' required />
          <FormNumberInput name='Price' id='price' required />
          <FormInput name='Category' id='category' required />
          <FormInput name='Brand' id='brand' required />
          <FormInput name='Description' id='description' required />
          <FormNumberInput name='Count In Stock' id='countInStock' required />

          <div className='mb-6 md:flex'>
            <label className='label md:w-1/5'>Images</label>
            <div className='md:w-4/5'>
              <input
                type='file'
                className='file-input w-full max-w-md'
                multiple // 允許多檔上傳
                onChange={uploadHandler}
              />
              <div className='mt-4'>
                {images.map((img, index) => (
                  <div key={index} className='mb-2 flex items-center'>
                    <img
                      src={img}
                      alt={`Image ${index + 1}`}
                      className='mr-2 h-20 w-20 object-cover'
                    />
                    <button
                      type='button'
                      onClick={() => removeImage(index)}
                      className='btn btn-error btn-xs'
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type='submit'
            disabled={isUpdating}
            className='btn btn-primary'
          >
            {isUpdating && <span className='loading loading-spinner'></span>}
            Update
          </button>
          <Link className='btn ml-4 ' href='/admin/products'>
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}
