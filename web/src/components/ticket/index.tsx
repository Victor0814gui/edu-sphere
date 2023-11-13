import { ShoppingBagOpen } from "@phosphor-icons/react";
import { Button } from "../button";
import styles from "./styles.module.css";


export function Ticket() {

  return (
    <div className={styles.ticket}>
      <header>
        <div className={styles.icon}>
          <ShoppingBagOpen size={32} color="#1c211d" weight="bold" />
        </div>
        <h1>Inscriptions</h1>
      </header>
      <div className={styles.separator} />
      <footer>
        <h1>615.40</h1>
        <Button>Remove</Button>
      </footer>
    </div>
  )
}