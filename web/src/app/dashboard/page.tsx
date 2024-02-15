"use client";

import { Header } from "@src/components/header";
import styles from "./styles.module.css";
import { Footer } from "@src/components/footer";
import { Channel } from "@src/components/channel";
import { DashboardHeader } from "./components/header";
import { Badge } from "@src/components/badge";
import { Button } from "@src/components/button";
import { useToastContextProvider } from "@src/hooks/toast";

export default function Dashboard() {
  const { addToast } = useToastContextProvider();

  const handlerAddToast = () => {
    addToast({
      content: "Error ao entrar, verifique seu dados",
      type: "warning",
    });
  };
  return (
    <div className={styles.container}>
      <Header />
      <DashboardHeader />
      <div className={styles.content}>
        <div className={styles.profile}>
          <h1>Victor Guilherme Coimbra</h1>
          <p>
            sou um entusiasta das tecnologia, meu maior sonho é mudar o mundo
            ajudando as pessoas através da tecnologia, e bom, tem sido uma
            tarefa um tanto desafiadora :'(, mas nada que tentar mais uma vez
            não resvolva.
          </p>
        </div>
        <div className={styles.productsList}>
          {new Array(8).fill({ id: 0 }).map((product, index) => (
            <div className={styles.product} key={index} />
          ))}
        </div>
        <button onClick={handlerAddToast}>Toast</button>
      </div>
      <Footer />
    </div>
  );
}
