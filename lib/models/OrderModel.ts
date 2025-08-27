// lib/models/OrderModel.ts

export type Order = {
  id: string;
  userId: string;
  user?: { name: string };
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  paymentResult?: PaymentResult;
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
  image: string;
  price: number;
  slug: string;
};

export type ShippingAddress = {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

export type PaymentResult = {
  id: string;
  status: string;
  email_address: string;
};

export const calcOrderTotal = (items: OrderItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.qty, 0);
};
