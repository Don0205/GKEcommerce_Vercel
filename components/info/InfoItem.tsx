// components/info/InfoItem.tsx
import Image from 'next/image';
import Link from 'next/link';

const InfoItem = ({ info }: { info: { slug: string; src: string } }) => {
  return (
    <div className="card bg-base-300">
      <Link href={info.src} target="_blank" rel="noopener noreferrer">
        <figure className="relative aspect-square cursor-pointer">
          <Image
            src={info.src}
            alt={`注意事項 ${info.slug}`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </figure>
      </Link>
      <div className="card-body p-4">
        <h3 className="card-title text-lg">注意事項 {info.slug}</h3>
        <p className="text-sm">請仔細閱讀此項重要信息。</p>
      </div>
    </div>
  );
};

export default InfoItem;