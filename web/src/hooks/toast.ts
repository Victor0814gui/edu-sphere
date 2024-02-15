import { ToastContext } from "@src/contexts/toast";
import { useContext } from "react";

export function useToastContextProvider() {
  const context = useContext(ToastContext);
  return context;
}
