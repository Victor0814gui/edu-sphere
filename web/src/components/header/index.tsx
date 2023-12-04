'use client'
import styles from "./styles.module.css"
import { GearSix, Bell, ShoppingCartSimple } from "@phosphor-icons/react"
import { ActiveLink } from "../active-link";


export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h1>EduSphere</h1>
      </div>
      <div className={styles.content}>
        <ActiveLink name="home" path="/" />
        <ActiveLink inactive name="dashboard" />
        <ActiveLink name="subscriptions" />
        <ActiveLink name="cart" />
        <ActiveLink name="shop" />
      </div>
      <div className={styles.content}>
        <Bell size={24} color="#d9d9d9" weight="fill" />
        <GearSix size={24} color="#d9d9d9" weight="fill" />
        <ShoppingCartSimple size={24} color="#d9d9d9" weight="fill" />
      </div>
    </header>
  )
}