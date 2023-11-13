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
        <h1>Inscriptions</h1>
        <Ticket />
      </div>
      <Footer />
    </div>
  )
}