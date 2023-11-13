
import { ShoppingCartSimple } from "@phosphor-icons/react"
import styles from "./styles.module.css"
import { Badge } from "../badge"


export function Product(props: {
  index: number
}) {
  return (
    <div className={styles.subscription} key={props.index}>
      <header>
        <h2>Spark</h2>
        {props.index === 2 && <Badge>especial</Badge>}
      </header>
      <h4>Este é o plano perfeito para aqueles que estão começando. Desfrute de uma comunicação rápida e confiável com amigos, familiares.</h4>
      <footer>
        <h1>15.99R$</h1>
        <button>
          Adicionar
          <ShoppingCartSimple size={28} color="#d9d9d9" weight="fill" />
        </button>
      </footer>
    </div>
  )
}