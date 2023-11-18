"use client"

import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/animations/Message.json";

import styles from "./styles/loading.module.css"
import { Header } from "@src/components/header";
import { Footer } from "@src/components/footer";

export default function Loading() {
  // Or a custom loading skeleton component
  const animationsSize = 200;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Lottie
          animationData={groovyWalkAnimation}
          size={animationsSize}
          style={{
            width: animationsSize,
            height: animationsSize,
          }}
        />
      </div>
    </div>
  );
}