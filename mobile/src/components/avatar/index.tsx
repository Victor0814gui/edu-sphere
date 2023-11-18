import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import { useCallback } from "react";

const uri = "https://avatars.githubusercontent.com/u/92493696?v=4"

type CardProps = {
  mode?: "small" | "medium" | "big";
  url?: string;
}

export function Avatar({
  mode = "small",
  url,
}: CardProps) {

  const stylesMode = useCallback((mode: string) => {
    switch (mode) {
      case "big":
        return styles.avatarBig;
      case "medium":
        return styles.avatarMedium;
      default:
        return styles.avatarSmall;
    }
  }, [])

  return (
    <Image
      style={stylesMode(mode)}
      source={{ uri: url ?? uri }}
      resizeMode="contain"
    />
  );
}