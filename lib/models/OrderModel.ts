// lib/models/OrderModel.ts

export type Order = {
  id: string;
  userId: string;
  user?: { name: string };
  items: OrderItem[];
  name: string;
  country: string;
  address: string;
  email: string;
  phone: string;
  paymentMethod: string;
  paymentResultId?: string;
  paymentResultStatus?: string;
  paymentResultEmailAddress?: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  paidAt?: Date;
  deliveredAt?: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type OrderItem = {
  id: string;
  orderId: string;
  productId: string;
  name: string;
  qty: number;
  images: string[];
  price: number;
  slug: string;
};
export type OrderHistoryItem = {
  id: string;
  orderId: string;
  productId: string;
  name: string;
  qty: number;
  image: string;
  price: number;
  slug: string;
};

export type ShippingAddress = {
  name: string;
  country: string;
  address: string;
  email: string;
  phone: string;
};

export const calcOrderTotal = (items: OrderItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.qty, 0);
};