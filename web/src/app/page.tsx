'use client'

import { Header } from "@src/components/header";
import styles from "./styles.module.css";
import Image from "next/image";
import { Button } from "@src/components/button";
import { Badge } from "@src/components/badge";
import { Separator } from "@src/components/separator";
import { Footer } from "@src/components/footer";
import { TitleSection } from "@src/components/title-section";

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
            <img className={styles.preview} src="/images/preview.png" alt="preview" />
            {/* <span>
              O título no header com um botão "ver todos" é comumente chamado de "Título de Seção" ou "Cabeçalho de Seção" em um layout de página ou aplicativo. </span> */}
          </div>
        </section>
        <Separator />
        <TitleSection title="PLANOS" />
        <section>
          <div className={styles.listSubscriptions}>
            {[1, 2, 3].map((product, index) => (
              <div className={styles.subscription} key={index}>
                <h2>Spark</h2>
                <h4>Este é o plano perfeito para aqueles que estão começando. Desfrute de uma comunicação rápida e confiável com amigos, familiares.</h4>
                <ul>
                  Todos os recursos do plano "Starter"
                  <li>Salas de voz exclusivas</li>
                  <li>Streaming de áudio e vídeo em alta qualidade (1080p)</li>
                  <li>Histórico de mensagens expandido (até 90 dias)</li>
                  <li>Grupos com até 100 membros</li>
                  <li>Temas exclusivos e emojis personalizados</li>
                </ul>
                {index === 1
                  ? <button className={styles.active}>Comprar</button>
                  : <button>Comprar</button>}
              </div>
            ))}
          </div>
        </section>
        <Separator />
        <TitleSection title="O QUE ESPERAR" />
        <section className={styles.section}>
          <img className={styles.preview} src="/images/preview-2.png" alt="preview" />
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
          <img className={styles.preview} src="/images/preview-3.png" alt="preview" />
        </section>
        <Separator />
        <TitleSection title="O QUE HÁ DE NOVO" />
        <section>
          <img className={styles.preview} src="/images/preview-4.png" alt="preview" />
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
