import styles from "./styles.module.css"


export function TitleSection(props: {
  title: string,
}) {

  return (
    <div className={styles.container}>
      <span>1</span>
      <h1>{props.title}</h1>
    </div>
  )
}