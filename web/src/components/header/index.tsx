'use client'
import styles from "./styles.module.css"
import { usePathname, useRouter } from 'next/navigation'
import { ActiveLink } from "../active-link";


export function Header() {
  const router = useRouter();
  const pathName = usePathname();

  const handlerGoRoute = (route: string) => {
    router.push(route);
  }

  return (
    <header className={styles.container}>
      <div>
        <h1>EduSphere</h1>
      </div>
      <div className={styles.content}>
        <ActiveLink name="home" path="/" />
        <ActiveLink inactive name="dashboard" />
        <ActiveLink name="subscriptions" />
        <ActiveLink name="cart" />
        <ActiveLink name="shop" />
      </div>
      <div>
        {pathName === '/' && (
          <>
            <button onClick={() => handlerGoRoute("/auth/signup")} className={styles.buttonDefault}>Criar conta</button>
            <button onClick={() => handlerGoRoute("/auth/signin")} className={styles.button}>entrar</button>
          </>
        )}
      </div>
    </header>
  )
}