import React from "react";
import styles from "./styles.module.css"

export function DashboardHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailContainer}>
        <div className={styles.thumbnail} />
        <img className={styles.avatar} src="https://github.com/victor0814gui.png" alt="avatar" />
      </div>
      <div className={styles.content}>
      </div>
    </div>
  )
}