"use client"

import { Header } from "@src/components/header";
import styles from "./styles.module.css"
import { Footer } from "@src/components/footer";

export default function SignUp() {
  // Or a custom loading skeleton component
  const animationsSize = 200;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>SignUp</h1>
      </div>
      <Footer />
    </div>
  );
}