import { ArrowFatLineDown } from "@phosphor-icons/react"
import styles from "./styles.module.css"


export function Separator() {

  return (
    <div className={styles.container}>
      <div className={styles.line} />
      <div className={styles.circle} >
        <ArrowFatLineDown size={32} color="#d9d9d9" weight="bold" />
      </div>
      <div className={styles.line} />
    </div>
  )
}