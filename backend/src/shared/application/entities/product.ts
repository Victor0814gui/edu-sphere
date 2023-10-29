





export interface Product {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date | null;
  type: string;
  status: string;
  startDate: Date;
  endDate: Date;
  paymentMethod: string;
  price: number;
  billingCycle: string;
  nextBilling: Date;
  autoRenew: boolean;
  // permissions: string[];
  paymentDetails: string;
}