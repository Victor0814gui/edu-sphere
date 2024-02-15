import { create } from "zustand";

type Product = {
  id: string;
  amount: number;
  name: string;
  description: string;
  type: string;
};

type State = {
  products: Product[];
  total: number;
  discount: number;
};

type Action = {
  addProduct: (state: Product) => void;
  removeProduct: (id: string, amount: number) => void;
};

export const useShop = create<State & Action>((set) => ({
  products: [],
  total: 0,
  discount: 0,
  addProduct: (newState) =>
    set((oldState) => ({
      total: oldState.total + newState.amount,
      products: [...oldState.products, newState],
    })),
  removeProduct: (productId, amount) =>
    set((oldState) => ({
      total: oldState.total - amount,
      products: oldState.products.filter((product) => product.id !== productId),
    })),
}));
