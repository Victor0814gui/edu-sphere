"use client"

import { Header } from "@src/components/header";
import styles from "./styles.module.css"
import { Footer } from "@src/components/footer";
import { Channel } from "@src/components/channel";

export default function Dashboard() {
  // Or a custom loading skeleton component
  const animationsSize = 200;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>Dashboard</h1>

        {/* <div className={styles.listChannels}>
          {new Array(30).fill({ i: 0 }).map(channel => (
            <Channel />
          ))}
        </div> */}
      </div>
      <Footer />
    </div>
  );
}