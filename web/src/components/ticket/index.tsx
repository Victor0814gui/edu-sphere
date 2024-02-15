import { ShoppingBagOpen } from "@phosphor-icons/react";
import styles from "./styles.module.css";
import { useShop } from "@src/store/shop";
import { motion } from "framer-motion";

export function Ticket({
  id = "adkfjaçlkdfjasdf",
  type = "product",
  name = "Spark",
  amount = 61540,
  description = "Permite ao cliente compartilhar mais de 25 convites com mensagens customizadas",
}) {
  const amountFormat = amount / 100;
  const precoFormatado = amountFormat.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const removeProduct = useShop((state) => state.removeProduct);

  const handlerRemoveProduct = () => {
    removeProduct(id, amount);
  };

  return (
    <motion.div
      initial={{ translateX: 10 }}
      animate={{ translateX: 0 }}
      transition={{
        type: "spring",
        // stiffness: 260,
        // damping: 20,
      }}
      exit={{ translateX: 100, opacity: 0 }}
      className={styles.ticket}
    >
      <div>
        <h2>{name}</h2>
        <span>{precoFormatado}</span>
      </div>
      <div className={styles.content}>
        <span>{description}</span>
      </div>
      <button
        onClick={handlerRemoveProduct}
        className={styles.buttonRemoveProductIcon}
      >
        <ShoppingBagOpen size={32} color="#f2f2f2" />
      </button>
    </motion.div>
  );
}
