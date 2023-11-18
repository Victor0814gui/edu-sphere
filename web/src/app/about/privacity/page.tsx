

import { Header } from '@src/components/header';
import styles from './styles.module.css';
import { Footer } from '@src/components/footer';


export default function Privacity() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>Política de Privacidade do EduSphere</h1>
        <span>Última atualização: 13/11/2023</span>
        <p>Agradecemos por utilizar EduSphere ("nós", "nosso", "nos"). Esta Política de Privacidade tem o objetivo de informar sobre como coletamos, usamos e protegemos suas informações pessoais ao utilizar nosso aplicativo ou site.</p>

        <ul>
          <li>1. Informações Coletadas:</li>
          <p>
            Coletamos informações que você nos fornece voluntariamente ao utilizar nosso aplicativo/web. Isso pode incluir, mas não está limitado a:
            Informações de conta: Nome, endereço de e-mail, senha.
            Informações de perfil: Foto de perfil, dados biográficos, preferências pessoais.
            Informações de pagamento: Detalhes necessários para processar transações.
          </p>
          <li>2. Coleta Automática de Dados:</li>
          Ao utilizar nosso aplicativo/web, podemos coletar automaticamente certas informações, incluindo, mas não se limitando a:
          <p>
            Endereço IP
            Tipo de dispositivo
            Navegador utilizado
            Páginas visitadas
            Tempo de permanência no aplicativo/web
          </p>
          <li>3. Uso das Informações:</li>
          <p>
            Utilizamos as informações coletadas para:

            Personalizar sua experiência no aplicativo/web.
            Processar transações e fornecer serviços.
            Enviar comunicações relacionadas ao serviço.
            Aprimorar nosso aplicativo/web e desenvolver novos recursos.
          </p>
          <li>4. Compartilhamento de Informações:</li>
          <p>
            Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer os serviços solicitados ou quando exigido por lei.
          </p>
          <li>5. Cookies e Tecnologias Semelhantes:</li>
          <p>
            Utilizamos cookies e tecnologias semelhantes para melhorar a funcionalidade do aplicativo/web e oferecer uma experiência personalizada. Você pode ajustar as configurações do navegador para recusar cookies, mas isso pode afetar a funcionalidade do aplicativo/web.
          </p>
          <li>6. Segurança:</li>
          <p>
            Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>
          <li>7. Menores de Idade:</li>
          <p>
            Nosso aplicativo/web não se destina a menores de idade, e não coletamos intencionalmente informações pessoais de crianças com menos de 13 anos. Se tomarmos conhecimento de que coletamos inadvertidamente informações pessoais de uma criança, tomaremos medidas para excluí-las.
          </p>
          <li>8. Alterações na Política de Privacidade:</li>
          <p>
            Reservamo-nos o direito de fazer alterações nesta Política de Privacidade a qualquer momento. Recomendamos que você revise periodicamente para estar ciente de quaisquer atualizações.
          </p>
          <li>9. Contato:</li>
          <p>
            Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em [endereço de e-mail de suporte].

            Ao utilizar nosso aplicativo/web, você concorda com os termos desta Política de Privacidade.
          </p>
        </ul>
      </div>
      <Footer />
    </div>
  )
}