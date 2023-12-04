import Link from 'next/link'

import styles from "./not-found.module.css"

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Uhm... Não encontrei nada</h1>
        <p>parece que isso não está funcionando, talvez o link que você esteja acessando não esteja mais dispononivel ou não exista</p>
        <Link href="/">Pagina inicial</Link>
      </div>
    </div>
  )
}