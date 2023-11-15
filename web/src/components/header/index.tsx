'use client'
import Link from "next/link"
import styles from "./styles.module.css"
import { GearSix, Bell, ShoppingCartSimple } from "@phosphor-icons/react"



export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h1>EduSphere</h1>
      </div>
      <div className={styles.content}>
        <Link href="/">Home</Link>
        <Link href="/subscription">Products</Link>
        <Link href="/inscriptions">Inscriptions</Link>
      </div>
      <div className={styles.content}>
        <Bell size={24} color="#d9d9d9" weight="fill" />
        <GearSix size={24} color="#d9d9d9" weight="fill" />
        <ShoppingCartSimple size={24} color="#d9d9d9" weight="fill" />
      </div>
    </header>
  )
}