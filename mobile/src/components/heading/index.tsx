import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler"
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { Avatar } from "../avatar";
import { COLORS } from "../../theme";
import { useCallback } from "react";

type HeadingProps = {
  children: string;
  mode?: "big" | "medium" | "small";
  font?: "poppins" | "roboto";
}

export function Heading({ children, mode = "medium", font = "roboto" }: HeadingProps) {

  const stylesMode = useCallback((mode: string) => {
    switch (mode) {
      case "big":
        return styles.big;
      case "medium":
        return styles.medium;
      default:
        return styles.small;
    }
  }, [])

  const stylesFont = useCallback((mode: string) => {
    switch (mode) {
      case "Poppins":
        return styles.poppins;
      default:
        return styles.roboto;
    }
  }, [])

  return (
    <Text style={[styles.heading, stylesMode(mode), stylesFont(font)]}>{children}</Text>
  );
}