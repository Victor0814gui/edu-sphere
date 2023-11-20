


export type Transaction = {
  id: string;
  userId: string;
  paymentIntent?: string | null
  subscriptionId?: string | null
  amount: number;
  currency: string
  status: string;
  createdAt: Date;
}