

import { ReactNode } from "react";
import styles from "./styles.module.css";

type BadgeProps = {
  children: ReactNode;
  color?: string;
}

export function Badge({
  children,
  color = "#25DA67",
}: BadgeProps) {

  return (
    <span
      className={styles.container}
      style={{ backgroundColor: color }}>
      {children}
    </span>
  )
}