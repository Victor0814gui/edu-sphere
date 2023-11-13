
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
        <p>Termos de serviços</p>
        <p>Politica de privacidade</p>
        <p>Cookies</p>
      </div>
    </footer>
  )
}