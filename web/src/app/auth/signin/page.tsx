"use client"

import { Header } from "@src/components/header";
import styles from "./styles.module.css"
import { Footer } from "@src/components/footer";

export default function SignIn() {
  // Or a custom loading skeleton component
  const animationsSize = 200;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>SignIn</h1>
        <div className={styles.box}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>Criar conta</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}