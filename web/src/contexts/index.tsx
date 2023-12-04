import { ReactNode } from "react";
import { createContext } from "vm";
import { CartContextProvider } from "./cart";




export const Contexts = (props: {
  children: ReactNode,
}) => {
  return (
    <CartContextProvider>
      {props.children}
    </CartContextProvider>
  );
}