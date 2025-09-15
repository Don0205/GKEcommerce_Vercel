// lib\models\ProductModel.ts
import mongoose from 'mongoose';

export type Product = {
  id: string;
  name: string;
  slug: string;
  images: string[];  // 改為圖片陣列
  banner?: string;
  price: number;
  brand: string;
  description: string;
  category: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  colors?: [];
  sizes?: [];
  formet?: string;
};

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    images: { type: [String], default: [] },  // 改為圖片陣列
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    banner: { type: String, default: null },
  },
  {
    timestamps: true,
  },
);

const ProductModel =
  mongoose.models.Product || mongoose.model('Product', productSchema);

export default ProductModel;