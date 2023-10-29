import React, { useState, ReactNode, useRef, ElementType } from 'react';
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
}

export function Button({
  children,
  text,
  icon: Icon = SignIn,
  ...rest
}: InputProps) {
  const { sendResponseToServer } = useAuthContextProvider();
  const [onHover, setOnHover] = useState(false);
  const animatedButton = useRef(new Animated.Value(1)).current


  const onMouseEnter = () => {
    Animated.timing(animatedButton, {
      toValue: 1.04,
      useNativeDriver: true,
      duration: 200,
    })
    setOnHover(true);
  }
  const onMouseLeave = () => {
    Animated.timing(animatedButton, {
      toValue: 1,
      useNativeDriver: true,
      duration: 200,
    })
    setOnHover(false);
  }

  return (
    <ContainerButton
      underlayColor={COLORS.green_400}
      {...rest}
      //@ts-ignore
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onHover={onHover}
      disabled={sendResponseToServer}
    >
      {sendResponseToServer ? <ActivityIndicator color={COLORS.grey_240} /> : <>
        {text && sendResponseToServer
          ? <ActivityIndicator color={COLORS.grey_180} />
          : (
            <View style={{
              alignItems: "center",
              flexDirection: "row",
            }}>
              <ContainerButtonText style={{ fontFamily: FONTS.Roboto.Medium, marginRight: 4 }}>{text}</ContainerButtonText>
              <SignIn size={23} color={COLORS.grey_180} />
            </View>
          )}
      </>
      }
    </ContainerButton>
  );
}