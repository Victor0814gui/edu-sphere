

import { Header } from '@src/components/header';
import styles from './styles.module.css';
import { Footer } from '@src/components/footer';


export default function Cookies() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>Política de Cookies do EduSphere</h1>
        <span>Última atualização: 13/11/2023</span>
        <p>Bem-vindo ao [Nome do Aplicativo/Web] ("nós", "nosso", "nos"). Ao utilizar nosso aplicativo ou site, você concorda em cumprir e ficar vinculado aos seguintes termos e condições. Leia atentamente os Termos de Serviço antes de usar nosso serviço.</p>
        <ul>
          <li>1. O que são cookies?</li>
          <p>
            Os cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita um site ou utiliza um aplicativo. Eles são amplamente utilizados para melhorar a sua experiência de navegação, lembrando suas preferências e oferecendo conteúdo personalizado.
          </p>
          <li>Como utilizamos cookies?</li>
          <p>
            Os cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita um site ou utiliza um aplicativo. Eles são amplamente utilizados para melhorar a sua experiência de navegação, lembrando suas preferências e oferecendo conteúdo personalizado.
          </p>
        </ul>
      </div>
      <Footer />
    </div>
  )
}