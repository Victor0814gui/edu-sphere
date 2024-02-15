"use client";
import { useEffect } from "react";
import { Button } from "@src/components/button";
import styles from "./styles.module.css";

import { useRouter } from "next/navigation";

import { socket } from "@src/services/socket-io";

export default function Success() {
  const router = useRouter();
  const handlerEmit = () => {
    socket.emit("message", "FASDFASDFASDF");
    router.push("/", { scroll: false });
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>product comprado com sucesso</h1>
        <Button onClick={handlerEmit}>Ver compras</Button>
      </div>
    </div>
  );
}
