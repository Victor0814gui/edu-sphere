import { useState } from "react";
import { COLORS } from "../../../../shared/theme";


import {
  styles,
  HiperLinkText,
} from "./styles";

type HiperLinkTextProps = {
  pressed?: boolean;
  text: string;
}


export const HiperLink = ({
  pressed = false,
  text,
}:HiperLinkTextProps) => {

  const [onHover,setOnHover] = useState(false);

  return (
    <HiperLinkText
      //@ts-ignore
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      style={[styles.redirectCreateAcountText,onHover && {
        textDecorationLine: "underline",
        color: pressed ? COLORS.green_900 : COLORS.green_500,
      }]}
    >
      {text}
    </HiperLinkText>
  )
}
 