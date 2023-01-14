import React, { useState,ReactNode } from 'react';
import { COLORS, FONTS } from "../../../../shared/theme";
import { 
  ContainerButton,
  ContainerButtonText,
} from './styles';
import { ActivityIndicator,TouchableOpacityProps } from 'react-native';
import { useAuthContextProvider } from '../../../../shared/contexts/auth';

type InputProps = TouchableOpacityProps & {
  children?: ReactNode;
  text?: string
}

export function Button({children,text,...rest}:InputProps) {
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
      >
        <>
        {children}
        {text && sendResponseToServer
          ?<ActivityIndicator color={COLORS.grey_180}/>
          :<ContainerButtonText style={{fontFamily: FONTS.Roboto.Medium}}>{text}</ContainerButtonText>}
        </>
      </ContainerButton>
  );
}