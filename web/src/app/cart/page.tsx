"use client"

import { Header } from "@src/components/header";
import styles from "./styles.module.css"
import { Footer } from "@src/components/footer";
import { useCartContextProvider } from "@src/hooks/cart";

export default function Cart() {
  const { products } = useCartContextProvider();
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>Cart</h1>
        <ul>
          {products.map(product => (
            <li>{product.name}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}