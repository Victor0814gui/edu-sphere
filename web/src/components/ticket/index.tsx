import { ShoppingBagOpen } from "@phosphor-icons/react";
import { Button } from "../button";
import styles from "./styles.module.css";



export function Ticket({
  name = "Spark",
  amount = 61540,
  description = "Permite ao cliente compartilhar mais de 25 convites com mensagens customizadas"
}) {

  return (
    <div className={styles.ticket}>
      <div>
        <h2>{name}</h2>
        <span>{amount / 100}</span>
      </div>
      <div className={styles.content}>
        <span>{description}</span>
      </div>
      <div className={styles.icon}>
        <ShoppingBagOpen size={32} color="#f2f2f2" />
      </div>
    </div>
  )
}