import React, { useState,ReactNode } from 'react';
import { COLORS, FONTS } from "../../../../shared/theme";
import { 
  ContainerButton,
  ContainerButtonText,
} from './styles';
import { ActivityIndicator,TouchableOpacityProps, View } from 'react-native';
import { useAuthContextProvider } from '../../../../shared/contexts/auth';
import Icon from "react-native-vector-icons/MaterialIcons";

type InputProps = TouchableOpacityProps & {
  children?: ReactNode;
  text?: string;
  iconName?: string;
}

export function Button({
  children,
  text,
  iconName = "login",
  ...rest
}:InputProps) {
  const { sendResponseToServer } = useAuthContextProvider();
  const [ onHover,setOnHover ] = useState(false);

  return (
      <ContainerButton  
        underlayColor={COLORS.green_400} 
        {...rest}
        //@ts-ignore
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        onHover={onHover}
        disabled={sendResponseToServer}
      >
        <>
        {children}
        {text && sendResponseToServer
          ?  <ActivityIndicator color={COLORS.grey_180}/>
          :(
            <View style={{
              alignItems: "center",
              flexDirection: "row",
            }}>
              <ContainerButtonText style={{fontFamily: FONTS.Roboto.Medium,marginRight: 4}}>{text}</ContainerButtonText>
              <Icon size={23} color={COLORS.grey_180} name={iconName}/>
            </View>
          )}
        </>
      </ContainerButton>
  );
}