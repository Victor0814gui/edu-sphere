import styles from "./styles.module.css";

export default function Home() {


  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.listSubscriptions}>
          {[1, 2, 3].map((product, index) => (
            <div className={styles.subscription} key={index}>
              <h2>Spark</h2>
              <h4>Este é o plano perfeito para aqueles que estão começando. Desfrute de uma comunicação rápida e confiável com amigos, familiares e colegas de equipe. Obtenha acesso a canais de texto e voz, compartilhamento de arquivos, e a capacidade de criar grupos com até 50 membros. Além disso, aproveite a integração com aplicativos de produtividade e personalização do perfil.</h4>
              <ul>
                Todos os recursos do plano "Starter"
                <li>Salas de voz exclusivas</li>
                <li>Streaming de áudio e vídeo em alta qualidade (1080p)</li>
                <li>Histórico de mensagens expandido (até 90 dias)</li>
                <li>Grupos com até 100 membros</li>
                <li>Temas exclusivos e emojis personalizados</li>
                <li>Plano Premium - "Ultimate"</li>

                <li>Todos os recursos dos planos "Starter" e "Pro"</li>
                <li>Prioridade no suporte ao cliente (24/7)</li>
                <li>Armazenamento de arquivos expandido (até 20GB por upload)</li>
                <li>Compartilhamento de tela de alta qualidade</li>
                <li>Grupos com até 250 membros</li>
                <li>Acesso a novos recursos antes dos outros usuários</li>
                <li>Todos os temas premium disponíveis</li>
                <li>Lembre-se de que estes detalhes são fictícios e servem apenas como exemplo para ilustrar os diferentes níveis de subscrição em um produto semelhante ao Discord.</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
