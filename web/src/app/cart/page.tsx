"use client";

import { Header } from "@src/components/header";
import styles from "./styles.module.css";
import { Footer } from "@src/components/footer";
import { useCartContextProvider } from "@src/hooks/cart";
import { network } from "@src/services/network";
import { useRouter } from "next/navigation";

type PurchaseResponseProps = {
  data: {
    paymentIntent: string;
  };
};

export default function Cart() {
  const { products } = useCartContextProvider();
  const router = useRouter();

  const handlerPurchaseProduct = async () => {
    const purchaseResponse = (await network.post(
      "/purchases/subscription/buy"
    )) as PurchaseResponseProps;
    const transactionId = purchaseResponse.data.paymentIntent;
    router.push(`/checkout-page/${transactionId}`);
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>Cart</h1>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
