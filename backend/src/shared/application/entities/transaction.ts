import { TransactionStatus } from "./enums/i-transaction-status";



export type Transaction = {
  id: string;
  userId: string;
  paymentIntent?: string | null
  subscriptionId?: string | null
  amount: number;
  currency: string
  status: TransactionStatus;
  createdAt: Date;
}