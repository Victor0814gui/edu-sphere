import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css"
import { Lock } from "@phosphor-icons/react";


type ActiveLink = {
  name: string;
  path?: string;
  inactive?: boolean;
}

export function ActiveLink({ name, inactive = false, path }: ActiveLink) {
  const pathName = usePathname();
  const operation = path ?? `/${name}`;
  return (
    <div className={styles.content}>
      <Link
        className={pathName == operation ? styles.active : styles.default}
        href={operation}>
        {inactive && <Lock size={20} color="#f2f2f2" weight="bold" />}
        {name}
      </Link>
    </div>
  )
}