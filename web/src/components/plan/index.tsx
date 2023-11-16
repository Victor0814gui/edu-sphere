
import styles from "./styles.module.css";

type PlanProps = {
  premium?: boolean;
}

export function Plan({
  premium = false,
}: PlanProps) {

  return (
    <div className={styles.container}>
      <div className={premium ? styles.premium : styles.subscription}>
        <h2>Spark</h2>
        <h4>Este é o plano perfeito para aqueles que estão começando. Desfrute de uma comunicação rápida e confiável com amigos, familiares.</h4>
        <ul>
          Todos os recursos do plano Starter
          <li>Salas de voz exclusivas</li>
          <li>Streaming de áudio e vídeo em alta qualidade (1080p)</li>
          <li>Histórico de mensagens expandido (até 90 dias)</li>
          <li>Grupos com até 100 membros</li>
          <li>Temas exclusivos e emojis personalizados</li>
        </ul>
        {/* <h2>42.22R$</h2> */}
        {premium
          ? <button className={styles.active}>Comprar</button>
          : <button>Comprar</button>}

      </div>
    </div>
  )
}