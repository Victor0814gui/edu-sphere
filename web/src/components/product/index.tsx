import { ShoppingCartSimple } from "@phosphor-icons/react";
import styles from "./styles.module.css";
import { Badge } from "../badge";
import { useShop } from "@src/store/shop";

type ProductProps = {
  amount?: number;
  name?: string;
  description?: string;
  buttonLabel?: string;
  type?: string;
  id?: string;
  onClick?: () => void;
};

export function Product({
  type = "product",
  id = "asdfjçlaksdjflkjaçslkfj",
  amount = 1599,
  name = "Spark",
  description = "Este é o plano perfeito para aqueles que estão começando. Desfrute de uma comunicação rápida e confiável com amigos, familiares.",
  buttonLabel = "Adicionar",
  onClick,
}: ProductProps) {
  const amountFormat = amount / 100;
  const precoFormatado = amountFormat.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const productsInfo = useShop((state) => state);

  const handlerAddProduct = () => {
    productsInfo.addProduct({
      amount,
      description,
      id,
      name,
      type,
    });
  };

  return (
    <div className={styles.subscription}>
      <header>
        <h2>{name}</h2>
        {/* <Badge>Atual</Badge> */}
      </header>
      <h4>{description}</h4>
      <footer>
        <h1>{precoFormatado}</h1>
        <button onClick={handlerAddProduct}>
          {buttonLabel}
          <ShoppingCartSimple size={28} color="#d9d9d9" weight="fill" />
        </button>
      </footer>
    </div>
  );
}
