"use client";

import { Header } from "@src/components/header";
import styles from "./styles.module.css";
import Image from "next/image";
import { Button } from "@src/components/button";
import { Badge } from "@src/components/badge";
import { Separator } from "@src/components/separator";
import { Footer } from "@src/components/footer";
import { TitleSection } from "@src/components/title-section";
import { Plan } from "@src/components/plan";

export const WhatsNewSection = () => {
  return (
    <section>
      <Image
        width={590}
        height={590}
        className={styles.preview}
        src="/images/preview-4.png"
        alt="preview"
      />
      <div className={styles.productFeatures}>
        <div>
          <h2>O que há de novo?</h2>
          <p>
            Você pode adicionar mais itens dentro do contêiner conforme
            necessário. Este exemplo é um ponto de partida, e você pode
            personalizar os estilos e a estrutura conforme desejar.
          </p>
        </div>
        <div>
          <h2>O que há de novo?</h2>
          <p>
            Você pode adicionar mais itens dentro do contêiner conforme
            necessário. Este exemplo é um ponto de partida, e você pode
            personalizar os estilos e a estrutura conforme desejar.
          </p>
        </div>
        <div>
          <h2>O que há de novo?</h2>
          <p>
            Você pode adicionar mais itens dentro do contêiner conforme
            necessário. Este exemplo é um ponto de partida, e você pode
            personalizar os estilos e a estrutura conforme desejar.
          </p>
        </div>
        <Button>Testar funcionalidades</Button>
      </div>
    </section>
  );
};
