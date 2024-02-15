"use client";
import { create } from "zustand";

type Toast = {
  id: string;
  amount: number;
  name: string;
  description: string;
  type: string;
};

type State = {
  toast: Toast | null;
};

type Action = {
  addToast: (state: Toast) => void;
  removeToast: () => void;
};

export const useToast = create<State & Action>((set) => ({
  toast: null,
  addToast: (newState) =>
    set((oldState) => ({
      toast: newState,
    })),
  removeToast: () =>
    set(() => ({
      toast: null,
    })),
}));
