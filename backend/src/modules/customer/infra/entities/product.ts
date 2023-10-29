


export type Product = {
  productId: string;
  price: number;
  quantity: number;
  recurrence: 'day' | 'month' | 'week' | 'year';
  name: string;
  description: string;
}