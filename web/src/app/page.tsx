'use client'

import { Header } from "@src/components/header";
import styles from "./styles.module.css";
import Image from "next/image";
import { Button } from "@src/components/button";
import { Badge } from "@src/components/badge";
import { Separator } from "@src/components/separator";
import { Footer } from "@src/components/footer";
import { TitleSection } from "@src/components/title-section";
import { Plan } from "@src/components/plan";

export default function Home() {


  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.content}>
        <section>
          <div className={styles.info}>
            <Badge color="#00B0FF">Acesso antecipado</Badge>
            <h1 className={styles.title}>Gerencie <span>!</span> <br />seu grupo</h1>
            <h3 className={styles.description}>Explore um novo padrão de aprendizado com nosso aplicativo inovador, oferecendo uma sala de aula virtual envolvente e interativa. Facilitamos a colaboração entre alunos e professores, proporcionando uma experiência de aprendizado personalizada.</h3>
            <Button>CRIAR INSCRIÇÃO</Button>
          </div>
          <div className={styles.previewThumbnailContainer}>
            <Image height={590} width={590} className={styles.preview} src="/images/preview.png" alt="preview" />
          </div>
        </section>
        <Separator />
        <TitleSection title="PLANOS" />
        <section>
          <div className={styles.listSubscriptions}>
            {[1, 2, 3].map((product, index) => (
              <Plan premium={index === 1} key={index} />
            ))}
          </div>
        </section>
        <Separator />
        <TitleSection title="O QUE ESPERAR" />
        <section className={styles.section}>
          <Image height={590} width={590} className={styles.preview} src="/images/preview-2.png" alt="preview" />
          <div className={styles.productInfo}>
            <div>
              <h2>O que há de novo?</h2>
              <p>Você pode adicionar mais itens dentro do contêiner conforme necessário. Este exemplo é um ponto de partida, e você pode personalizar os estilos e a estrutura conforme desejar.</p>
            </div>
            <div>
              <h2>O que há de novo?</h2>
              <p>Você pode adicionar mais itens dentro do contêiner conforme necessário. Este exemplo é um ponto de partida, e você pode personalizar os estilos e a estrutura conforme desejar.</p>
            </div>
            <Button>Testar funcionalidades</Button>
          </div>
        </section>
        <Separator />
        <TitleSection title="PERGUNTAR MAIS COMUNS" />
        <section className={styles.section}>
          <div className={styles.productQuestions}>
            <div>
              <h2>O que há de novo?</h2>
              <p>Você pode adicionar mais itens dentro do contêiner conforme necessário. Este exemplo é um ponto de partida, e você pode personalizar os estilos e a estrutura conforme desejar.</p>
            </div>
            <div>
              <h2>O que há de novo?</h2>
              <p>Você pode adicionar mais itens dentro do contêiner conforme necessário. Este exemplo é um ponto de partida, e você pode personalizar os estilos e a estrutura conforme desejar.</p>
            </div>
            <div>
              <h2>O que há de novo?</h2>
              <p>Você pode adicionar mais itens dentro do contêiner conforme necessário. Este exemplo é um ponto de partida, e você pode personalizar os estilos e a estrutura conforme desejar.</p>
            </div>
            <div>
              <h2>O que há de novo?</h2>
              <p>Você pode adicionar mais itens dentro do contêiner conforme necessário. Este exemplo é um ponto de partida, e você pode personalizar os estilos e a estrutura conforme desejar.</p>
            </div>
          </div>
          <Image height={590} width={590} className={styles.preview} src="/images/preview-3.png" alt="preview" />
        </section>
        <Separator />
        <TitleSection title="O QUE HÁ DE NOVO" />
        <section>
          <Image width={590} height={590} className={styles.preview} src="/images/preview-4.png" alt="preview" />
          <div className={styles.productFeatures}>
            <div>
              <h2>O que há de novo?</h2>
              <p>Você pode adicionar mais itens dentro do contêiner conforme necessário. Este exemplo é um ponto de partida, e você pode personalizar os estilos e a estrutura conforme desejar.</p>
            </div>
            <div>
              <h2>O que há de novo?</h2>
              <p>Você pode adicionar mais itens dentro do contêiner conforme necessário. Este exemplo é um ponto de partida, e você pode personalizar os estilos e a estrutura conforme desejar.</p>
            </div>
            <div>
              <h2>O que há de novo?</h2>
              <p>Você pode adicionar mais itens dentro do contêiner conforme necessário. Este exemplo é um ponto de partida, e você pode personalizar os estilos e a estrutura conforme desejar.</p>
            </div>
            <Button>Testar funcionalidades</Button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
