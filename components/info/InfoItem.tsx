// components/info/InfoItem.tsx
import Image from 'next/image';
import Link from 'next/link';

const InfoItem = ({ info }: { info: { slug: string; src: string } }) => {
  return (
    <div className="card bg-base-300">
      <Link href={info.src} target="_blank" rel="noopener noreferrer">
        <figure className="relative w-full h-auto cursor-pointer">
          <Image
            src={info.src}
            alt={`注意事項 ${info.slug}`}
            width={500}
            height={300}
            layout="responsive"
            className="rounded-t-xl"
          />
        </figure>
      </Link>
    </div>
  );
};

export default InfoItem;