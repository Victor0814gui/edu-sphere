"use client"

import { Header } from "@src/components/header";
import styles from "./styles.module.css"
import { Footer } from "@src/components/footer";
import { Input } from "@src/components/input";
import { Envelope, Password, User } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@src/components/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Checkbox } from "@src/components/checkbox";

import { useRouter } from 'next/navigation'
import { useAuthContextProvider } from "@src/hooks/auth";


type SignupProps = {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const router = useRouter();
  const { signUp } = useAuthContextProvider()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [terms, setTerms] = useState({
    acceptPolicy: false,
    acceptTerms: false,
  })

  const handlerCreateCustomer: SubmitHandler<SignupProps> = async (data: SignupProps) => {
    await signUp(data);
  }

  const acceptTerms = () => {
    setTerms({
      acceptPolicy: terms.acceptPolicy,
      acceptTerms: !terms.acceptTerms,
    });
  }

  const acceptPolicy = () => {
    setTerms({
      acceptPolicy: !terms.acceptPolicy,
      acceptTerms: terms.acceptTerms,
    });
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>Sign up</h1>
        <form className={styles.box} onSubmit={handleSubmit(handlerCreateCustomer)}>
          <Input {...register("name", { required: true })} icon={User} placeholder="ex: seunome" />
          {errors.name?.type === 'required' && <p role="alert">name is required</p>}

          <Input type="email" {...register("email", { required: true })} icon={Envelope} placeholder="ex: seuemail@gmail.com" />
          {errors.email?.type === 'required' && <p role="alert">email is required</p>}

          <Input type="password" {...register("password", { required: true })} icon={Password} placeholder="ex: *********" />
          {errors.password?.type === 'required' && <p role="alert">password is required</p>}

          <div className={styles.about}>
            <Checkbox active={terms.acceptTerms} onClick={acceptTerms} />
            <span>termos de uso</span>
            <Link href="/about/tos">aqui</Link>
          </div>
          <div className={styles.about}>
            <Checkbox active={terms.acceptPolicy} onClick={acceptPolicy} />
            <span>polica de privacidade</span>
            <Link href="/about/privacity">aqui</Link>
          </div>
          <Button active={terms.acceptPolicy && terms.acceptTerms}>Criar conta</Button>
          <span>Já tem uma conta? <Link href="/auth/signin">faça login aqui</Link></span>
        </form>
      </div>
      <Footer />
    </div>
  );
}