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

export const SubscriptionsSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.listSubscriptions}>
        {[1, 2, 3].map((product, index) => (
          <Plan premium={index === 1} key={index} />
        ))}
      </div>
      <div className={styles.info}>
        <div className={styles.circle} />
        <div className={styles.content}>
          <h2>Para novos cliente os planos ficam com até 70% de desconto</h2>
          <p>
            sujeito a analize de pendencias anteriores,
            <span className={styles.link}> veja mais aqui</span>
          </p>
        </div>
      </div>
    </section>
  );
};
