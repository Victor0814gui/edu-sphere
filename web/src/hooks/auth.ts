import { AuthContext } from "@src/contexts/auth";
import { CartContext } from "@src/contexts/cart"
import { useContext } from "react"




export function useAuthContextProvider() {
  const context = useContext(AuthContext);
  return context
}