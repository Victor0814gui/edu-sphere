"use client";

import { Header } from "@src/components/header";
import styles from "./styles.module.css";
import { Footer } from "@src/components/footer";
import { Input } from "@src/components/input";
import { Envelope, Password } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@src/components/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useCartContextProvider } from "@src/hooks/cart";
import { useAuthContextProvider } from "@src/hooks/auth";

type SignupProps = {
  email: string;
  password: string;
};

export default function Recovery() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupProps>();

  const handlerCreateCustomer: SubmitHandler<SignupProps> = async (
    data: SignupProps
  ) => {};

  return (
    <div className={styles.container}>
      <Header />
      <div
        className={styles.content}
        onSubmit={handleSubmit(handlerCreateCustomer)}
      >
        <h1>Recuperar senha</h1>
        <form className={styles.box}>
          <Input
            type="password"
            {...register("password", { required: true })}
            icon={Password}
            placeholder="ex: *******"
          />
          {errors.password?.type === "required" && (
            <p role="alert">password is required</p>
          )}
          <Button>Redefinir senha</Button>
          <span>
            Ainda não tem uma conta?{" "}
            <Link href="/auth/signup">crie a sua aqui</Link>
          </span>
        </form>
      </div>
      <Footer />
    </div>
  );
}
