"use client";

import { Header } from "@src/components/header";
import styles from "./styles.module.css";
import { Footer } from "@src/components/footer";
import { network } from "@src/services/network";
import { useRouter } from "next/navigation";
import { useShop } from "@src/store/shop";
import { Ticket } from "@src/components/ticket";
import { Suspense } from "react";
import { convertUnitAmountForReal } from "@src/utils/convert-unit-amount-for-real";
import { AnimatePresence } from "framer-motion";
import { Button } from "@src/components/button";

type PurchaseResponseProps = {
  data: {
    clientSecret: string;
    id: string;
    amount: number;
  };
};

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default function Cart() {
  const productsInfo = useShop((state) => state);
  const router = useRouter();

  const handlerPurchaseProduct = async () => {
    const purchaseResponse = (await network.post("/purchases/payment-intent", {
      amount: productsInfo.total,
    })) as PurchaseResponseProps;

    const transactionId = purchaseResponse.data.clientSecret;
    console.log(transactionId);
    router.push(`/checkout-page/${transactionId}`);
  };

  const totalConvertedValue = convertUnitAmountForReal(productsInfo.total);

  return (
    <>
      <div className={styles.container}>
        <Header />
        <h1>Cart</h1>
        <div className={styles.content}>
          <div className={styles.products}>
            <ul className={styles.productsList}>
              <Suspense fallback={<Loading />}>
                <AnimatePresence>
                  {productsInfo.products.map((product, index) => (
                    <Ticket
                      type={product.type}
                      key={index}
                      id={product.id}
                      amount={product.amount}
                      name={product.name}
                      description={product.description}
                    />
                  ))}
                </AnimatePresence>
              </Suspense>
            </ul>
          </div>
          <div className={styles.totalAmount}>
            <h1>Total:</h1>
            <h2>{totalConvertedValue}</h2>
            <Button onClick={handlerPurchaseProduct}>Comprar</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
