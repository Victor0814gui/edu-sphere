import { ProductStatus } from "./enums/i-product-status";
import { ProductType } from "./enums/i-product-type";


type Product = {
  id: string;
  name: string;
  price: number;
  createdAt: Date;
  thumbnailUrl: string | null;
  updatedAt: Date | null;
  description: string | null;
  type: ProductType;
  status: ProductStatus;
  startDate?: Date | null;
  endDate?: Date | null;
  paymentMethod?: string | null;
  billingCycle?: string | null;
  nextBilling?: Date | null;
  autoRenew?: boolean | null;
  paymentDetails?: string | null;
}

export {
  ProductType,
  Product
}