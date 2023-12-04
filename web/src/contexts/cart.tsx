"use client"
import { ReactNode, createContext, useState } from "react"

type Product = {
  id: string;
  name: string;
  description: string;
  amount: string;
}

type CartContextType = {
  products: Product[];
  addProduct: (params: Product) => void;
  removeProduct: (params: Product) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType)

const CartContextProvider = (props: {
  children: ReactNode,
}) => {

  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (props: Product) => {
    setProducts([...products, props])
  }

  const removeProduct = (props: Product) => {
    const productsFiltered = products.filter((product) => product.id !== props.id);
    setProducts(productsFiltered);
  }


  return (
    <CartContext.Provider value={{
      products,
      addProduct,
      removeProduct,
    }}>
      {props.children}
    </CartContext.Provider>
  )
}

export {
  CartContext,
  CartContextProvider,
}
