import { ShoppingBagOpen } from "@phosphor-icons/react";
import { Button } from "../button";
import styles from "./styles.module.css";


export function Ticket() {

  return (
    <div className={styles.ticket}>
      <div>
        <h2>Spark</h2>
        <span>615.40</span>
      </div>
      <div className={styles.content}>
        <span>Permite ao cliente compartilhar mais de 25 convites com mensagens customizadas</span>
      </div>
      <div className={styles.icon}>
        <ShoppingBagOpen size={32} color="#f2f2f2" />
      </div>
    </div>
  )
}