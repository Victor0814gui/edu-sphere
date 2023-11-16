"use client"

import { Header } from "@src/components/header";
import styles from "./styles.module.css"
import { Footer } from "@src/components/footer";
import { Input } from "@src/components/input";
import { Envelope, Password, User } from "@phosphor-icons/react";
import Link from "next/link";


export default function SignUp() {
  // Or a custom loading skeleton component
  const animationsSize = 200;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>Sign up</h1>
        <div className={styles.box}>
          <Input icon={User} />
          <Input icon={Envelope} />
          <Input icon={Password} />
          <div className={styles.about}>
            <div className={styles.checkbox} />
            <span>termos de uso</span>
            <Link href="/about/tos">aqui</Link>
          </div>
          <div className={styles.about}>
            <div className={styles.checkbox} />
            <span>polica de privacidade</span>
            <Link href="/about/privacity">aqui</Link>
          </div>
          <button>Criar conta</button>
          <span>Já tem uma conta? <Link href="/auth/signin">faça login aqui</Link></span>
        </div>
      </div>
      <Footer />
    </div>
  );
}