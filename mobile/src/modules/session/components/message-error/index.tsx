

import Icon from "react-native-vector-icons/MaterialIcons";

import {
  styles,
  ErrorMessageContainer,
  ErrorMessageContainerText,
} from "./styles";
import { COLORS } from "../../../../shared/theme";
import { Warning } from "phosphor-react-native";

export const MessageError = ({ children }: { children: string }) => {

  return (
    <ErrorMessageContainer>
      <Warning color={COLORS.orange_400} size={18} weight="bold" />
      <ErrorMessageContainerText style={styles.errorMessageContainerText}>{children}</ErrorMessageContainerText>
    </ErrorMessageContainer>
  )
}