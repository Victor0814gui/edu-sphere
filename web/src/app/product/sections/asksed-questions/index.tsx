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

export const AskedQuestionsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.productQuestions}>
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
        <div>
          <h2>O que há de novo?</h2>
          <p>
            Você pode adicionar mais itens dentro do contêiner conforme
            necessário. Este exemplo é um ponto de partida, e você pode
            personalizar os estilos e a estrutura conforme desejar.
          </p>
        </div>
      </div>
      <Image
        height={590}
        width={590}
        className={styles.preview}
        src="/images/preview-3.png"
        alt="preview"
      />
    </section>
  );
};
