"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./styles.module.css";
import { network } from "@src/services/network";
import { io } from "socket.io-client";
import { Button } from "@src/components/button";
import { useSocket } from "@src/store/socket";

type FileType = {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

const socket = io("http://localhost:5000");

export default function DragAndDrop() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);

  const useSocketState = useSocket((state) => state.isConnected);

  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      for (let i = 0; i < e.target.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.target.files[i]]);
      }
    }
  }

  function handleSubmitFile(e: any) {
    e.preventDefault();
    if (files.length > 0) {
      socket.emit("room:upload:files", files[0]);
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.dataTransfer.files[0]);
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
      }
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    // e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  return (
    <div className={styles.container}>
      <p>{useSocketState ? "conectado" : "disconectado"}</p>
      <form
        className={dragActive ? styles.boxActive : styles.box}
        // onDragEnter={handleDragEnter}
        onSubmit={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
        <input
          placeholder="fileInput"
          className={styles.inputHidden}
          ref={inputRef}
          type="file"
          multiple={true}
          onChange={handleChange}
          accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
        />

        <p>
          Drag & Drop files or{" "}
          <span
            className="font-bold text-blue-600 cursor-pointer"
            onClick={openFileExplorer}
          >
            <u>Select files</u>
          </span>{" "}
          to upload
        </p>

        <div className={styles.listFiles}>
          {files.map((file: FileType, idx: any) => (
            <div key={idx} className={styles.fileContent}>
              <span>{file.name}</span>
              <span>{(file.size / (1024 * 1024)).toPrecision(3)} MB</span>
              <span
                className="text-red-500 cursor-pointer"
                onClick={() => removeFile(file.name, idx)}
              >
                remove
              </span>
            </div>
          ))}
        </div>

        <Button onClick={handleSubmitFile}>
          <span className="p-2 text-white">Submit</span>
        </Button>
      </form>
    </div>
  );
}
