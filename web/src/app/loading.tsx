"use client"

import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/animations/Message.json";

import styles from "./styles/loading.module.css"

export default function Loading() {
  // Or a custom loading skeleton component
  const animationsSize = 200;
  return (
    <div className={styles.container}>
      <Lottie
        animationData={groovyWalkAnimation}
        size={animationsSize}
        style={{
          width: animationsSize,
          height: animationsSize,
        }}
      />
    </div>
  );
}