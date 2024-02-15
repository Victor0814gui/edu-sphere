"use client";
import { ToastProps } from "@src/contexts/toast";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { useToastContextProvider } from "@src/hooks/toast";
import { motion } from "framer-motion";

export const Toast = ({ title, content, type }: ToastProps) => {
  const { removeToast } = useToastContextProvider();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast();
    }, 2000);

    return () => clearTimeout(timer);
  });
  return (
    <motion.div
      initial={{ translateX: -60 }}
      animate={{ translateX: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={styles.container}
    >
      <div
        className={`
        ${styles.indicator}
        ${type == "warning" && styles.warning}
        ${type == "success" && styles.success}
        ${type == "error" && styles.error}
        ${type == "info" && styles.info}
      `}
      />
      <div className={styles.content}>
        {!!title && <h2>{title}</h2>}
        <p>{content}</p>
      </div>
    </motion.div>
  );
};
