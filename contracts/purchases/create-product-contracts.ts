



export type ICreateProductContracts = {
  userId: string;
  permissions: string[];
  name: string;
  type: string;
  status: string;
  startDate: Date;
  endDate: Date;
  paymentMethod: string;
  price: number;
  billingCycle: string;
  nextBilling: Date;
  autoRenew: boolean;
  paymentDetails: string;
}