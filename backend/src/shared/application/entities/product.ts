import { ProductStatus } from "./enums/i-product-status";
import { ProductType } from "./enums/i-product-type";


type Product = {
  id: string;
  name: string;
  amount: number;
  priceId: string;
  productId: string;
  createdAt: Date;
  thumbnailUrl?: string | null;
  updatedAt?: Date | null;
  description?: string | null;
  type: ProductType;
  status: ProductStatus;
}

export {
  ProductType,
  Product
}