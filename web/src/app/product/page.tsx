"use client";

import { Header } from "@src/components/header";
import styles from "./styles.module.css";
import Image from "next/image";
import { Button } from "@src/components/button";
import { Badge } from "@src/components/badge";
import { Separator } from "@src/components/separator";
import { Footer } from "@src/components/footer";
import { TitleSection } from "@src/components/title-section";
import { Plan } from "@src/components/plan";
import { ProductInfo } from "./sections/product-info";
import { SubscriptionsSection } from "./sections/subscriptions";
import { ExpectationsSection } from "./sections/expectations";
import { AskedQuestionsSection } from "./sections/asksed-questions";
import { WhatsNewSection } from "./sections/whats-new";
import { useToastContextProvider } from "@src/hooks/toast";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.content}>
        <ProductInfo />
        <Separator />
        <TitleSection title="PLANOS" />
        <SubscriptionsSection />
        <Separator />
        <TitleSection title="O QUE ESPERAR" />
        <ExpectationsSection />
        <Separator />
        <TitleSection title="PERGUNTAR MAIS COMUNS" />
        <AskedQuestionsSection />
        <Separator />
        <TitleSection title="O QUE HÁ DE NOVO" />
        <WhatsNewSection />
      </div>
      <Footer />
    </main>
  );
}
