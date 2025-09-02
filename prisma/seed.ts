//prisma\seed.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // 清空數據庫
  console.log('Cleaning database...')
  await prisma.orderItem.deleteMany({})
  await prisma.order.deleteMany({})
  await prisma.product.deleteMany({})
  await prisma.user.deleteMany({})
  console.log('Database cleaned')

  // Create users
  console.log('Creating users...')
  const adminPassword = await bcrypt.hash('admin123', 5)
  const userPassword = await bcrypt.hash('123456', 5)

  const admin = await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@example.com',
      password: adminPassword,
      isAdmin: true,
    },
  })

  const user = await prisma.user.create({
    data: {
      name: 'User',
      email: 'user@example.com',
      password: userPassword,
    },
  })

  // Create products
  console.log('Creating products...')
  const products = [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner/banner1.webp',
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      price: 80,
      brand: 'Adidas',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner/banner2.webp',
    },
    {
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/images/Shirts.webp',
      price: 90,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Golf Pants',
      slug: 'golf-pants',
      category: 'Pants',
      image: '/images/pants1.jpg',
      price: 90,
      brand: 'Oliver',
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: 'Smart looking pants',
    },
    {
      name: 'Fit Pants',
      slug: 'fit-pants',
      category: 'Pants',
      image: '/images/Pants.webp',
      price: 95,
      brand: 'Zara',
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      name: 'Classic Handbag',
      slug: 'classic-handbag',
      category: 'Handbags',
      image: '/images/Handbags.webp',
      price: 75,
      brand: 'Casely',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A classic handbag',
    },
  ]

  const createdProducts = await prisma.product.createMany({
    data: products,
  })

  // Create some orders
  console.log('Creating orders...')
  // const order1 = await prisma.order.create({
  //   data: {
  //     userId: user.id,
  //     items: {
  //       create: [
  //         {
  //           name: 'Free Shirt',
  //           qty: 1,
  //           image: '/images/shirt1.jpg',
  //           price: 70,
  //           productId: (await prisma.product.findUnique({ where: { slug: 'free-shirt' } }))!.id,
  //         },
  //         {
  //           name: 'Fit Shirt',
  //           qty: 2,
  //           image: '/images/shirt2.jpg',
  //           price: 80,
  //           productId: (await prisma.product.findUnique({ where: { slug: 'fit-shirt' } }))!.id,
  //         },
  //       ],
  //     },
  //     shippingAddress: {
  //       fullName: 'John Doe',
  //       address: '123 Main St',
  //       city: 'New York',
  //       postalCode: '10001',
  //       country: 'USA',
  //     },
  //     paymentMethod: 'PayPal',
  //     itemsPrice: 230,
  //     shippingPrice: 15,
  //     taxPrice: 35,
  //     totalPrice: 280,
  //     isPaid: true,
  //     paidAt: new Date(),
  //     isDelivered: false,
  //   },
  // })

  console.log({ admin, user, createdProducts })
  console.log('Seeding completed')
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })