import { create } from "zustand";

type State = {
  isConnected: boolean;
};

type Action = {
  connect: () => void;
  disconnect: () => void;
};

export const useSocket = create<State & Action>((set) => ({
  isConnected: false,
  connect: () =>
    set((oldState) => ({
      isConnected: true,
    })),
  disconnect: () =>
    set((oldState) => ({
      isConnected: false,
    })),
}));
