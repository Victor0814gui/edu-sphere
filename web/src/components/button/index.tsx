import { ReactElement, ReactNode } from "react"
import styles from "./styles.module.css"


type ButtonProps = {
  children: ReactNode,
  icon?: ReactElement,
}

export function Button({
  children,
  icon: Icon,
}: ButtonProps) {
  return (
    <button className={styles.container}>
      {children}
    </button>
  )
}