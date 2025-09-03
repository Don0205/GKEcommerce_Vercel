// components/products/ProductImages.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageWithBase64 {
  url: string;
  base64: string;
}

const ProductImages = ({ images }: { images: ImageWithBase64[] }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <div className='relative aspect-square'>
        <Image
          src={images[selectedImage].url}
          alt={`Product image ${selectedImage + 1}`}
          placeholder={images[selectedImage].base64 ? 'blur' : 'empty'}
          blurDataURL={images[selectedImage].base64}
          width={640}
          height={640}
          sizes='100vw'
          className='h-full w-full object-contain'
        />
      </div>
      <div className='mt-4 flex gap-2 overflow-x-auto'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer border-2 ${
              index === selectedImage ? 'border-primary' : 'border-transparent'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className='h-20 w-20 object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;