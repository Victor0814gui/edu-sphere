import { ReactNode } from "react";
import { createContext } from "vm";
import { CartContextProvider } from "./cart";
import { AuthContextProvider } from "./auth";
import { ToastContextProvider } from "./toast";

export const Contexts = (props: { children: ReactNode }) => {
  return (
    <ToastContextProvider>
      <AuthContextProvider>
        <CartContextProvider>{props.children}</CartContextProvider>
      </AuthContextProvider>
    </ToastContextProvider>
  );
};
