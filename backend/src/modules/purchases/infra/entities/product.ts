


export type Product = {
  id: string;
  name: string;
  type: string;
  status: string;
  startDate?: Date | null;
  endDate?: Date | null;
  paymentMethod: string;
  price: number;
  billingCycle: string;
  nextBilling: Date;
  autoRenew: boolean;
  paymentDetails: string;
  createdAt: Date;
  updatedAt?: Date | null;
}