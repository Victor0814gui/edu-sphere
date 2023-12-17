import { useState } from "react";
import { Pressable } from "react-native";
import { COLORS } from "@shared/theme";


import {
  styles,
  HyperLinkText,
} from "./styles";

type HyperLinkTextProps = {
  text: string;
  onPress: () => void;
}


export const HyperLink = ({
  text,
  onPress,
}: HyperLinkTextProps) => {

  const [onHover, setOnHover] = useState(false);

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <HyperLinkText
          //@ts-ignore
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          style={[styles.redirectCreateAcountText, onHover && {
            textDecorationLine: "underline",
            color: pressed ? COLORS.green_900 : COLORS.green_500,
          }]}
        >
          {text}
        </HyperLinkText>
      )}
    </Pressable>
  )
}
