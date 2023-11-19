'use client'

import { Button } from "@src/components/button"
import styles from "./styles.module.css"
import { Ticket } from "@src/components/ticket"
import { Header } from "@src/components/header"
import { Footer } from "@src/components/footer"
import Image from "next/image"


export default function Inscriptions() {

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Image width={520} height={520} src="/images/cart-image.png" className={styles.cartImage} alt={"preview"} />
        <div className={styles.listTickets}>
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </div>
      <Footer />
    </div>
  )
}