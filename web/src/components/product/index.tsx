import { ShoppingCartSimple } from "@phosphor-icons/react"
import styles from "./styles.module.css"
import { Badge } from "../badge"

type ProductProps = {
  amount?: number,
  name?: string;
  description?: string;
}

export function Product({
  amount = 1599,
  name = "Spark",
  description = "Este é o plano perfeito para aqueles que estão começando. Desfrute de uma comunicação rápida e confiável com amigos, familiares.",
}: ProductProps) {
  const amountFormat = amount / 100
  let precoFormatado = amountFormat.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return (
    <div className={styles.subscription}>
      <header>
        <h2>{name}</h2>
        {/* <Badge>Atual</Badge> */}
      </header>
      <h4>{description}</h4>
      <footer>
        <h1>{precoFormatado}</h1>
        <button>
          Adicionar
          <ShoppingCartSimple size={28} color="#d9d9d9" weight="fill" />
        </button>
      </footer>
    </div>
  )
}