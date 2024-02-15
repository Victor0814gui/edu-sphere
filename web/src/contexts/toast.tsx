"use client";
import { Toast } from "@src/components/toast";
import { ReactNode, createContext, useState } from "react";

export type ToastProps = {
  title?: string;
  content: string;
  type: "warning" | "success" | "error" | "info";
};

type ToastContextType = {
  toast: ToastProps | null;
  addToast: (toastData: ToastProps) => void;
  removeToast: () => void;
};

const ToastContext = createContext<ToastContextType>({} as ToastContextType);

const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastProps>({} as ToastProps);

  const addToast = (toastData: ToastProps) => {
    setToast(toastData);
  };

  const removeToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider
      value={{
        toast,
        addToast,
        removeToast,
      }}
    >
      {children}
      {toast && <Toast {...toast} />}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastContextProvider };
