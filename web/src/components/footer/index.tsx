
import Link from "next/link";
import styles from "./styles.module.css";

export function Footer() {

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div>
          <h4>Plataforma</h4>
          <p>Planos e preços</p>
          <p>Mais sobre</p>
          <p>News</p>
        </div>
        <div>
          <h4>Plataforma</h4>
          <p>Planos e preços</p>
          <p>Mais sobre</p>
          <p>News</p>
        </div>
        <div>
          <h4>Plataforma</h4>
          <p>Planos e preços</p>
          <p>Mais sobre</p>
          <p>News</p>
        </div>
      </div>
      <div className={styles.separator} />
      <div className={styles.about}>
        <Link href="/about/tos">Termos de serviços</Link>
        <Link href="/about/privacity">Politica de privacidade</Link>
        <Link href="/about/cookies">Cookies</Link>
      </div>
    </footer>
  )
}