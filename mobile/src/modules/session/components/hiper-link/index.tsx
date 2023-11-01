import { useState } from "react";
import { Pressable } from "react-native";
import { COLORS } from "../../../../shared/theme";


import {
  styles,
  HiperLinkText,
} from "./styles";

type HiperLinkTextProps = {
  text: string;
  onPress: () => void;
}


export const HiperLink = ({
  text,
  onPress,
}: HiperLinkTextProps) => {

  const [onHover, setOnHover] = useState(false);

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <HiperLinkText
          //@ts-ignore
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          style={[styles.redirectCreateAcountText, onHover && {
            textDecorationLine: "underline",
            color: pressed ? COLORS.green_900 : COLORS.green_500,
          }]}
        >
          {text}
        </HiperLinkText>
      )}
    </Pressable>
  )
}
