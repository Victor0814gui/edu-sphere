import { Text, TouchableOpacityProps } from "react-native";
import { COLORS } from "@shared/theme";
import {
  fonts,
  AmountOfQuestions
} from "./styles";


type BadgeButtonProps = TouchableOpacityProps & {
  text: string;
  color?: string;
}

export const BadgeButton = ({ text, color = COLORS.green_500, ...rest }: BadgeButtonProps) => {

  return (
    <AmountOfQuestions {...rest} color={color}>
      <Text style={fonts.TitleRoomText}>{text}</Text>
    </AmountOfQuestions>
  )
}