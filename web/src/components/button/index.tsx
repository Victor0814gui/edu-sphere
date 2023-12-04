import { HTMLAttributes, ReactElement, ReactNode } from "react"
import styles from "./styles.module.css"


type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  active?: boolean;
  icon?: ReactElement;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export function Button({
  children,
  active = true,
  type = "submit",
  icon: Icon,
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} type={type} disabled={!active} className={active ? styles.container : styles.inactive}>
      {children}
    </button>
  )
}