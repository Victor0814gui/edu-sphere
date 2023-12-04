import { HTMLAttributes } from "react"
import styles from "./styles.module.css";

type CheckBoxProps = HTMLAttributes<HTMLDivElement> & {
  active?: boolean;
}

export function Checkbox({ active = false, ...rest }: CheckBoxProps) {
  return (
    <div
      {...rest}
      className={
        active
          ? styles.checkboxActive
          : styles.checkbox}
    />
  )
}