import { ReactNode } from "react";
import { createContext } from "vm";
import { CartContextProvider } from "./cart";
import { AuthContextProvider } from "./auth";




export const Contexts = (props: {
  children: ReactNode,
}) => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        {props.children}
      </CartContextProvider>
    </AuthContextProvider>
  );
}