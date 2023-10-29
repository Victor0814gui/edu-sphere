import React, { useCallback, useEffect, useRef } from "react";


import Icon from "react-native-vector-icons/MaterialIcons";

import {
  styles,
  ErrorMessageContainer,
  ErrorMessageContainerText,
} from "./styles";
import { COLORS } from "../../../../shared/theme";
import { Warning } from "phosphor-react-native";
import { Animated } from "react-native";
import { color } from "react-native-reanimated";

export const MessageError = ({ children, type }: {
  children: string,
  type?: "warning" | "error" | "info",
}) => {

  const animations = useRef(new Animated.Value(0.5)).current;


  const messageMode = useCallback(() => {
    switch (type) {
      case "error":
        return COLORS.red_500;
      case "info":
        return COLORS.grey_680;
      default:
        return COLORS.orange_400;
    }
  }, [])


  const enter = () => {
    Animated.timing(animations, {
      useNativeDriver: false,
      toValue: 1,
      duration: 100,
    }).start();
  }

  useEffect(() => {
    enter();
  }, [])

  return (
    <ErrorMessageContainer
      style={{
        transform: [{
          scaleY: animations,
        }]
      }}
      accessible={false}
    >
      <Warning color={messageMode()} size={18} weight="bold" />
      <ErrorMessageContainerText style={[
        styles.errorMessageContainerText,
        { color: messageMode(), }
      ]}>{children}</ErrorMessageContainerText>
    </ErrorMessageContainer>
  )
}