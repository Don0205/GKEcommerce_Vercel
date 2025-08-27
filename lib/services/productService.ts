import { Prisma } from '@prisma/client';
import { cache } from 'react';

import prisma from '@/lib/dbConnect';
import { Product } from '@/lib/models/ProductModel';

export const revalidate = 3600;

const getLatest = cache(async () => {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
    take: 8,
  });
  return products as Product[];
});

const getTopRated = cache(async () => {
  const products = await prisma.product.findMany({
    orderBy: { rating: 'desc' },
    take: 8,
  });
  return products as Product[];
});

const getFeatured = async () => {
  const products = await prisma.product.findMany({
    where: { isFeatured: true },
    take: 3,
  });
  return products as Product[];
};

const getBySlug = cache(async (slug: string) => {
  const product = await prisma.product.findUnique({
    where: { slug },
  });
  return product as Product | null;
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
    if (sort === 'lowest') orderBy.price = 'asc';
    else if (sort === 'highest') orderBy.price = 'desc';
    else if (sort === 'toprated') orderBy.rating = 'desc';
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
  }
);

const getCategories = cache(async () => {
  const categories = await prisma.product.findMany({
    select: { category: true },
    distinct: ['category'],
  });
  return categories.map((c) => c.category);
});

const productService = {
  getLatest,
  getFeatured,
  getBySlug,
  getByQuery,
  getCategories,
  getTopRated,
};

export default productService;