
import styles from "./styles.module.css";
import { ElementType } from "react";

type InputProps = {
  premium?: boolean;
  icon?: ElementType;
}

export function Input({
  premium = false,
  icon: Icon,
}: InputProps) {

  return (
    <div className={styles.container}>
      {Icon && <Icon size={24} color="#d9d9d9" weight="bold" />}
      <input className={styles.input} type="email" />
    </div>
  )
}