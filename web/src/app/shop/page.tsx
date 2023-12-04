'use client'

import { Header } from "@src/components/header";
import styles from "./styles.module.css";
import { GearSix, MagnifyingGlass, ShoppingCartSimple } from "@phosphor-icons/react"
import { Footer } from "@src/components/footer";
import { Product } from "@src/components/product";
import { TitleSection } from "@src/components/title-section";
import { useEffect, useState } from "react";
import { network } from "@src/services/network";


type Product = {
  id: string;
  name: string;
  amount: number;
  priceId: string;
  productId: string;
  createdAt: Date;
  thumbnailUrl?: string;
  updatedAt?: Date;
  description: string;
  type: "products" | "subscription";
  status: "private" | "public";
}


export default function Shop() {
  const [products, setProducts] = useState<Product[]>([])
  const [subscriptions, setSubscriptions] = useState<Product[]>([])

  useEffect(() => {
    const fetchSubscriptions = async () => {
      const productsResponse = await network.get("/purchases/products/list");
      const subscriptionsResponse = await network.get("/purchases/subscriptions/list");
      setSubscriptions(subscriptionsResponse.data);
      setProducts(productsResponse.data);
    }

    fetchSubscriptions();
  }, [])


  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.content}>
        <TitleSection title="UPGRADES" />
        <div className={styles.listSubscriptions}>
          {subscriptions.map((subscription, index) => (
            <Product
              key={index}
              amount={subscription.amount}
              name={subscription.name}
              description={subscription.description}
            />
          ))}
        </div>
        <TitleSection title="PRODUTOS" />
        <div className={styles.listSubscriptions}>
          {products.map((product, index) => (
            <Product
              key={index}
              amount={product.amount}
              name={product.name}
              description={product.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
