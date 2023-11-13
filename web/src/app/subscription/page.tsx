'use client'

import { Header } from "@src/components/header";
import styles from "./styles.module.css";
import { GearSix, MagnifyingGlass, ShoppingCartSimple } from "@phosphor-icons/react"
import { Footer } from "@src/components/footer";
import { Product } from "@src/components/product";
import { TitleSection } from "@src/components/title-section";


export default function Home() {


  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.content}>
        <TitleSection title="UPGRADES" />
        <div className={styles.listSubscriptions}>
          {[1, 2, 3].map((product, index) => (
            <Product index={index} />
          ))}
        </div>
        <TitleSection title="PRODUTOS" />
        <div className={styles.listSubscriptions}>
          {[1, 2, 3, 4, 5, 6].map((product, index) => (
            <Product index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
