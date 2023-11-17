
enum ProductType {
  subscription = "subscription",
  product = "product",
  upgrade = "upgrade",
}


type Product = {
  id: string;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date | null;
  description: string | null;
  type: ProductType.product | ProductType.subscription | ProductType.upgrade | string;
  status: string;
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