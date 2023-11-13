import React, { useState, ReactNode, useRef, ElementType, useCallback } from 'react';
import { COLORS, FONTS } from "../../../../shared/theme";
import {
  ContainerButton,
  ContainerButtonText,
} from './styles';
import { ActivityIndicator, TouchableOpacityProps, Animated, View } from 'react-native';
import { useAuthContextProvider } from '../../../../shared/contexts/auth';
import Icon from "react-native-vector-icons/MaterialIcons";
import { SignIn } from 'phosphor-react-native';

type InputProps = TouchableOpacityProps & {
  children?: ReactNode;
  text?: string;
  icon?: ElementType;
  loading?: boolean
}

export function Button({
  children,
  text,
  icon: Icon = SignIn,
  loading = false,
  ...rest
}: InputProps) {
  const { sendResponseToServer } = useAuthContextProvider();
  const [onHover, setOnHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setOnHover(true);
  }, [])

  const onMouseLeave = useCallback(() => {
    setOnHover(false);
  }, [])

  return (
    <ContainerButton
      accessible
      underlayColor={COLORS.green_400}
      {...rest}
      //@ts-ignore
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onHover={onHover}
      active={sendResponseToServer}
    // disabled={sendResponseToServer}
    >
      {sendResponseToServer ? <ActivityIndicator color={COLORS.grey_240} /> : (
        <View style={{
          alignItems: "center",
          flexDirection: "row",
        }}>
          <ContainerButtonText style={{ fontFamily: FONTS.Roboto.Medium, marginRight: 4 }}>{text}</ContainerButtonText>
          <SignIn size={23} color={COLORS.grey_180} />
        </View>
      )}
    </ContainerButton>
  );
}