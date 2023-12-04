"use client"

import { Header } from "@src/components/header";
import styles from "./styles.module.css"
import { Footer } from "@src/components/footer";
import { Input } from "@src/components/input";
import { Envelope, Password } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@src/components/button";


export default function SignIn() {
  // Or a custom loading skeleton component
  const animationsSize = 200;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>SignIn</h1>
        <div className={styles.box}>
          <Input icon={Envelope} placeholder="ex: seunome@gmail.com" />
          <Input icon={Password} placeholder="ex: *******" />
          <Button>Criar conta</Button>
          <span>Ainda não tem uma conta? <Link href="/auth/signup">crie a sua aqui</Link></span>
        </div>
      </div>
      <Footer />
    </div>
  );
}