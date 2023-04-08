import React,{ useCallback, useState, useRef } from 'react';
import { 
  styles,
  InputContainerAndLabel,
  InputLabelText,
  ContainerStyleTextInput,
  IconContainer,
  Input as TextInput,
} from './styles';
import { COLORS } from "../../../../shared/theme";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TextInputProps } from 'react-native';
import { ControllerFieldState } from 'react-hook-form';

type InputProps = TextInputProps & {
  labelText: string;
  iconName?: string;
  fieldState?: ControllerFieldState;
}

export const Input = ({fieldState,iconName,labelText,...rest}:InputProps) => {
  console.log(fieldState)
  const [ onHover,setOnHover ] = useState(false);
  const [ifFocused,setIsFocused] = useState(false);
  const [ isFilled, setIsFilled ] = useState(false);

  const handleInputBlus = useCallback((value:any) => {
    console.log(value);

  },[])

  const handleInputFocus= useCallback((value:any) => {
    console.log(value);
  },[])

  return (
    <InputContainerAndLabel>
      <InputLabelText style={styles.textInput}>{labelText}</InputLabelText>
      <ContainerStyleTextInput
        onHover={onHover}
        //@ts-ignore
        onMouseLeave={() => setOnHover(false)}
        onMouseEnter={() => setOnHover(true)}
      >
        <IconContainer>
          <Icon name={iconName || "vpn-key"} size={25} color={COLORS.grey_680}/>        
        </IconContainer>
        <TextInput  
          textAlign='left' 
          verticalAlign='middle'          
          selectionColor={COLORS.green_390} 
          style={styles.textInput}
          multiline={false}
          onFocus={handleInputBlus}
          onBlur={handleInputFocus}
          {...rest}
        />
      </ContainerStyleTextInput>
    </InputContainerAndLabel>
  );
}
