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

export const ProductInfo = () => {
  return (
    <section>
      <div className={styles.info}>
        <Badge color="#00B0FF">Acesso antecipado</Badge>
        <h1 className={styles.title}>
          Gerencie <span>!</span> <br />
          seu grupo
        </h1>
        <h3 className={styles.description}>
          Explore um novo padrão de aprendizado com nosso aplicativo inovador
        </h3>
        <div className={styles.qualitiesList}>
          <div className={styles.squareContent}>
            <p>windows</p>
          </div>
          <div className={styles.squareContent}>
            <p>android</p>
          </div>
          <div className={styles.squareContent}>
            <p>ios</p>
          </div>
          <div className={styles.squareContent}>
            <p>web</p>
          </div>
          <div className={styles.squareContent}>
            <p>TVs</p>
          </div>
          <div className={styles.squareContent}>
            <p>macOS</p>
          </div>
        </div>
        <h3 className={styles.description}>
          Facilitamos a colaboração entre alunos e professores, proporcionando
          uma experiência de aprendizado personalizada.
        </h3>
        <Button>CRIAR INSCRIÇÃO</Button>
      </div>
      <div className={styles.previewThumbnailContainer}>
        <Image
          height={590}
          width={590}
          className={styles.preview}
          src="/images/preview.png"
          alt="preview"
        />
      </div>
    </section>
  );
};
