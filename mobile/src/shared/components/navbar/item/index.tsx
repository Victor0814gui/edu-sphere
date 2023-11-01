import { useCallback, useState } from "react";

import { PressableProps, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import {
  fonts,
  Container,
  Label,
} from "./styles";
import { COLORS } from "../../../theme";

type ItemNavbar = PressableProps & {
  isActive: boolean;
  routeName: string;
  icon: React.ElementType;
}



export const ItemNavbar = ({ icon: Icon, routeName, isActive, ...rest }: ItemNavbar) => {
  const [onHover, setOnHover] = useState(false);

  const onMouseEnter = useCallback(() => setOnHover(true), [])
  const onMouseLeave = useCallback(() => setOnHover(false), [])

  return (
    <Container
      {...rest}
      onHoverIn={onMouseEnter}
      onHoverOut={onMouseLeave}
      isActive={false}
      onHover={onHover}
    >
      <Icon size={30} color={isActive ? COLORS.green_500 : COLORS.white} weight="fill" />
      <Label
        style={[
          fonts.containerNavbarText,
          !isActive && {
            color: COLORS.grey_970
          }
        ]}
      >{routeName}</Label>
    </Container>
  )
}

