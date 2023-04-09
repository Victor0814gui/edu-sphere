

import Icon from "react-native-vector-icons/MaterialIcons";

import {
  styles,
  ErrorMessageContainer,
  ErrorMessageContainerText,
} from "./styles";
import { COLORS } from "../../../../shared/theme";

export const MessageError = ({children}:{children: string}) => {

  return (
    <ErrorMessageContainer>
      <Icon name="dangerous" size={15} color={COLORS.orange_400}/>
      <ErrorMessageContainerText style={styles.errorMessageContainerText}>{children}</ErrorMessageContainerText>
    </ErrorMessageContainer>
  )
}