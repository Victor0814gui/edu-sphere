

import { Header } from '@src/components/header';
import styles from './styles.module.css';
import { Footer } from '@src/components/footer';


export default function TOS() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>Termos de serviços do EduSphere</h1>
        <span>Última atualização: 13/11/2023</span>
        <p>Bem-vindo ao [Nome do Aplicativo/Web] ("nós", "nosso", "nos"). Ao utilizar nosso aplicativo ou site, você concorda em cumprir e ficar vinculado aos seguintes termos e condições. Leia atentamente os Termos de Serviço antes de usar nosso serviço.</p>
        <ul>
          <li>1. Aceitação dos Termos:</li>
          <p>
            Ao acessar ou usar nosso aplicativo/web, você concorda em cumprir estes Termos de Serviço e todas as leis e regulamentos aplicáveis. Se você não concordar com qualquer parte dos termos, não está autorizado a acessar o serviço.
          </p>
          <li>2. Uso do Serviço:</li>
          <p>
            Você concorda em usar nosso serviço apenas para os fins permitidos pelos Termos de Serviço e por todas as leis, regulamentos e práticas ou diretrizes geralmente aceitas na jurisdição relevante. Você concorda em não acessar (ou tentar acessar) o serviço por qualquer meio que não seja através da interface fornecida por nós.
          </p>
          <li>3. Contas e Segurança:</li>
          <p>
            Ao criar uma conta conosco, você é responsável por manter a confidencialidade de suas credenciais de conta e por todas as atividades que ocorram sob sua conta. Notifique-nos imediatamente sobre qualquer uso não autorizado de sua conta ou qualquer outra violação de segurança.
          </p>
          <li>4. Conteúdo do Usuário:</li>
          <p>
            Você é o único responsável pelo conteúdo que você postar, enviar ou exibir em nosso aplicativo/web, e concorda em não postar conteúdo que viole os direitos de terceiros ou qualquer lei aplicável.
          </p>
          <li>5. Propriedade Intelectual:</li>
          <p>
            Nosso serviço e todo o conteúdo disponível através dele são protegidos por direitos autorais, marcas registradas e outras leis de propriedade intelectual. Você concorda em não reproduzir, modificar, distribuir, realizar engenharia reversa, ou criar obras derivadas do nosso serviço ou conteúdo sem nossa permissão expressa por escrito.
          </p>
          <li>6. Limitação de Responsabilidade:</li>
          <p>
            Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou exemplares, incluindo, mas não se limitando a, danos por perda de lucros, boa vontade, uso, dados ou outras perdas intangíveis.
          </p>
          <li>7. Modificações no Serviço:</li>
          Reservamo-nos o direito de modificar ou descontinuar o serviço a qualquer momento, com ou sem aviso prévio. Não seremos responsáveis perante você ou terceiros por qualquer modificação, suspensão ou interrupção do serviço.
          <li>8. Alterações nos Termos de Serviço:</li>
          <p>
            Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. A versão atualizada será publicada no aplicativo/web. O uso contínuo do serviço após tais alterações constitui aceitação dos termos modificados.
          </p>
          <li>9. Lei Aplicável:</li>
          <p>
            Estes Termos de Serviço são regidos e interpretados de acordo com as leis do [país ou estado], sem considerar seus princípios de conflito de leis.
            Se tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco em [endereço de e-mail de suporte].
            Ao utilizar nosso aplicativo/web, você concorda em cumprir estes Termos de Serviço.
          </p>
        </ul>
      </div>
      <Footer />
    </div>
  )
}