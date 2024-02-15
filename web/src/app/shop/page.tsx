"use client";

import { Header } from "@src/components/header";
import styles from "./styles.module.css";
import { Footer } from "@src/components/footer";
import { Product } from "@src/components/product";
import { TitleSection } from "@src/components/title-section";
import { useEffect, useState } from "react";
import { network } from "@src/services/network";
import { useRouter } from "next/navigation";

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
};

type PurchaseResponseProps = {
  data: {
    paymentIntent: string;
  };
};

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [subscriptions, setSubscriptions] = useState<Product[]>([]);

  const router = useRouter();

  const handlerPurchaseProduct = async () => {
    const purchaseResponse = (await network.post(
      "/purchases/subscription/buy",
      {
        customerId: "string",
        priceId: "string",
      }
    )) as PurchaseResponseProps;
    const transactionId = purchaseResponse.data.paymentIntent;
    if (!!transactionId) {
      router.push(`/checkout-page/${transactionId}`);
    }
  };

  useEffect(() => {
    const fetchSubscriptions = async () => {
      const productsResponse = await network.get("/purchases/products/list");
      const subscriptionsResponse = await network.get(
        "/purchases/subscriptions/list"
      );
      setSubscriptions(subscriptionsResponse.data);
      console.log(productsResponse.data);
      setProducts(productsResponse.data);
    };

    fetchSubscriptions();
  }, []);

  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.content}>
        <TitleSection title="UPGRADES" />
        <div className={styles.listSubscriptions}>
          {subscriptions.map((subscription, index) => (
            <Product
              id={subscription.id}
              type="subscription"
              key={index}
              amount={subscription.amount}
              name={subscription.name}
              description={subscription.description}
              buttonLabel="Comprar"
              onClick={handlerPurchaseProduct}
            />
          ))}
        </div>
        <TitleSection title="PRODUTOS" />
        <div className={styles.listSubscriptions}>
          {products.map((product, index) => (
            <Product
              type="product"
              id={product.id}
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
  );
}
