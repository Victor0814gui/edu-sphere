"use client";

import styles from "./styles.module.css";

export const ExpectationsSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.list}>
          {new Array(3).fill({ id: "0" }).map((e, index) => (
            <div className={styles.article} key={index}>
              <h2>Em constante melhorias</h2>
              <p>
                Através na nossa rapida comunicação rapida e eficiente com a
                equipe de desenvolvimento podemos dar prioridade maxima a
                resolução de bugs e melhorias sugeridas.
              </p>
            </div>
          ))}
        </div>
        {/* <div className={styles.separator} /> */}
        <div className={styles.list}>
          {new Array(2).fill({ id: "0" }).map((e, index) => (
            <div className={styles.article} key={index}>
              <h2>Em constante melhorias</h2>
              <p>
                Através na nossa rapida comunicação rapida e eficiente com a
                equipe de desenvolvimento podemos dar prioridade maxima a
                resolução de bugs e melhorias sugeridas.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
