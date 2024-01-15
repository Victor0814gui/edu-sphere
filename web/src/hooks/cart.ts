import { CartContext, CartContextProvider } from "@src/contexts/cart"
import { useContext } from "react"

export function useCartContextProvider() {
  const verifyContextAlreadyExists = useContext(CartContext)
  if (!verifyContextAlreadyExists) {
    throw new Error("contexts does not exits");
  }
  return verifyContextAlreadyExists;
}