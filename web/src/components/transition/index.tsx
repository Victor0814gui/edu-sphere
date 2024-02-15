import { ReactNode } from "react";
import { motion } from "framer-motion";

type TransitionProps = {
  children: ReactNode;
};

export const Transition = ({ children }: TransitionProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{}}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};
