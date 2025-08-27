//lib\utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const round2 = (num: number) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

export const convertDocToObj = (doc: any) => {
  if (doc.id) {
    doc._id = doc.id;
  }
  return doc;
};

export const formatNumber = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatId = (x: string | undefined) => {
  if (!x) return 'N/A'; // 或者返回其他適當的默認值
  return x.length > 4 ? `..${x.slice(-4)}` : x;
};

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
