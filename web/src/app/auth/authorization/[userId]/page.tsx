"use client"
import { Header } from "@src/components/header";
import styles from "./styles.module.css"
import { Footer } from "@src/components/footer";
import Link from "next/link";
import { Button } from "@src/components/button";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useAuthContextProvider } from "@src/hooks/auth";

type AuthorizationAccountProps = {
  params: {
    userId: string;
  }
}

export default function AuthorizationAccount({ params }: AuthorizationAccountProps) {
  const [text, setText] = useState("");

  const { authorization, user } = useAuthContextProvider();


  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Se o campo atual tiver um caractere, muda o foco para o próximo campo
    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const printValue = async (e: FormEvent) => {
    e.preventDefault();
    setText("");
    inputRefs.map(inputRef => {
      setText(oldValue => oldValue + inputRef.current?.value);
    })

    await authorization({
      code: text,
      customerId: user.id,
    })
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>Ativar Conta</h1>
        <span>Digite o codigo de ativação que você recebeu.</span>
        <form className={styles.box} onSubmit={printValue}>
          <div className={styles.inputsList}>
            {inputRefs.map((inputRef, index) => (
              <input
                onChange={(e) => handleChange(index, e)} // Chama a função handleChange
                key={index}
                ref={inputRef}
                maxLength={1}
                className={styles.input}
              />
            ))}
          </div>
          <Button
            onClick={printValue}
            type="button"
            active={true}
          >Autorizar Conta</Button>
          <span>Já tem uma conta? <Link href="/auth/signin">faça login aqui</Link></span>
        </form>
      </div>
      <Footer />
    </div>
  );
}