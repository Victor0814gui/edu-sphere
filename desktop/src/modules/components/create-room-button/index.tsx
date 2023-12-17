import { Plus } from "phosphor-react-native";
import {
  Container
} from "./styles"
import { COLORS } from "@shared/theme";
import { useState } from "react";

export const CreateRoomButton = () => {

  const [onHover, setOnHover] = useState(false);

  const onHoverIn = () => {
    setOnHover(true)
  }

  const onHoverOut = () => {
    setOnHover(false)
  }

  return (
    <Container
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      style={{
        backgroundColor: onHover ? COLORS.green_400 : COLORS.green_500
      }}
    >
      <Plus color={COLORS.grey_180} size={30} />
    </Container>
  )
}