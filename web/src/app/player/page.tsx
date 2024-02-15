"use client";

import { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";

import styles from "./styles.module.css";

export default function DragAndDrop() {
  const videoPlayerRef = useRef<HtmlHTMLAttributes<HTMLVideoElement>>(null);

  const handlerChangeReproductionState = () => {};

  return (
    <main className={styles.container}>
      <video
        ref={videoPlayerRef}
        controls
        className={styles.player}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
      <button onClick={handlerChangeReproductionState}></button>
    </main>
  );
}
