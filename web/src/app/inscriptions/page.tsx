'use client'

import { Button } from "@src/components/button"
import styles from "./styles.module.css"
import { Ticket } from "@src/components/ticket"
import { Header } from "@src/components/header"
import { Footer } from "@src/components/footer"


export default function Inscriptions() {

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <img src="/images/cart-image.png" className={styles.cartImage} />
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