// lib\services\productService.ts
import { Prisma } from '@prisma/client';
import { cache } from 'react';

import { Product } from '@/lib/models/ProductModel';

export const revalidate = 3600;

const API_BASE_URL = '';  // 改为空字符串，使用相对路径
const isServer = typeof window === 'undefined';

const fetchFromApi = cache(async (endpoint: string, params?: any) => {
  let url = `${API_BASE_URL}${endpoint}`;
  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        searchParams.append(key, String(value));
      }
    });
    url += `?${searchParams.toString()}`;
  }
  const res = await fetch(url, { credentials: 'include' });  // 添加 credentials 以携带 Cookie（如果需要 auth）

  if (!res.ok) {
    throw new Error(`API request failed: ${res.statusText}`);
  }
  return res.json();
});

const getLatest = cache(async (): Promise<Product[]> => {
  if (isServer) {
    const prisma = (await import('@/lib/dbConnect')).default;
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
      take: 8,
    });
    return products as Product[];
  } else {
    return fetchFromApi('/api/products/latest');
  }
});

const getTopRated = cache(async (): Promise<Product[]> => {
  if (isServer) {
    const prisma = (await import('@/lib/dbConnect')).default;
    const products = await prisma.product.findMany({
      orderBy: { rating: 'desc' },
      take: 8,
    });
    return products as Product[];
  } else {
    return fetchFromApi('/api/products/top-rated');
  }
});

const getFeatured = async (): Promise<Product[]> => {
  if (isServer) {
    const prisma = (await import('@/lib/dbConnect')).default;
    const products = await prisma.product.findMany({
      where: { isFeatured: true },
      take: 3,
    });
    return products as Product[];
  } else {
    return fetchFromApi('/api/products/featured');
  }
};

const getBySlug = cache(async (slug: string): Promise<Product | null> => {
  if (isServer) {
    const prisma = (await import('@/lib/dbConnect')).default;
    const product = await prisma.product.findUnique({
      where: { slug },
    });
    return product as Product | null;
  } else {
    return fetchFromApi(`/api/products/${slug}`);
  }
});

const PAGE_SIZE = 3;

const getByQuery = cache(
  async ({
    q,
    category,
    sort,
    price,
    rating,
    page = '1',
  }: {
    q: string;
    category: string;
    price: string;
    rating: string;
    sort: string;
    page: string;
  }) => {
    if (isServer) {
      const prisma = (await import('@/lib/dbConnect')).default;
      const pageNumber = parseInt(page, 10);
      const skip = PAGE_SIZE * (pageNumber - 1);

      let whereClause: Prisma.ProductWhereInput = {};
      if (q && q !== 'all') {
        whereClause.name = { contains: q, mode: 'insensitive' };
      }
      if (category && category !== 'all') {
        whereClause.category = category;
      }
      if (rating && rating !== 'all') {
        whereClause.rating = { gte: parseInt(rating, 10) };
      }
      if (price && price !== 'all') {
        const [min, max] = price.split('-').map(Number);
        whereClause.price = {
          gte: min,
          lte: max,
        };
      }

      let orderBy: Prisma.ProductOrderByWithRelationInput = {};
      if (sort === 'Lowest Price') orderBy.price = 'asc';
      else if (sort === 'Highest Price') orderBy.price = 'desc';
      else if (sort === 'Rating') orderBy.rating = 'desc';
      else orderBy.createdAt = 'desc';

      const products = await prisma.product.findMany({
        where: whereClause,
        orderBy,
        skip,
        take: PAGE_SIZE,
      });

      const countProducts = await prisma.product.count({
        where: whereClause,
      });

      const categories = await prisma.product.findMany({
        select: { category: true },
        distinct: ['category'],
      });

      return {
        products: products as Product[],
        countProducts,
        page: pageNumber,
        pages: Math.ceil(countProducts / PAGE_SIZE),
        categories: categories.map((c) => c.category),
      };
    } else {
      return fetchFromApi('/api/products/search', {
        q,
        category,
        sort,
        price,
        rating,
        page,
      });
    }
  }
);

const getCategories = cache(async (): Promise<string[]> => {
  if (isServer) {
    const prisma = (await import('@/lib/dbConnect')).default;
    const categories = await prisma.product.findMany({
      select: { category: true },
      distinct: ['category'],
    });
    return categories.map((c) => c.category);
  } else {
    return fetchFromApi('/api/products/categories');
  }
});

const getRecommended = cache(async (category: string, currentProductId: string): Promise<Product[]> => {
  if (isServer) {
    const prisma = (await import('@/lib/dbConnect')).default;
    const products = await prisma.product.findMany({
      where: {
        category: category,
        id: { not: currentProductId },
      },
      take: 4,
    });
    return products as Product[];
  } else {
    return fetchFromApi('/api/products/recommended', { category, currentProductId });
  }
});

const productService = {
  getLatest,
  getFeatured,
  getBySlug,
  getByQuery,
  getCategories,
  getTopRated,
  getRecommended,
};

export default productService;