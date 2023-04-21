import React,{ useEffect, useCallback, useState, useRef } from 'react';
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
import { TextInput as TextInputType,TextInputProps } from 'react-native';
import { ControllerFieldState } from 'react-hook-form';

type InputProps = TextInputProps & {
  labelText: string;
  iconName?: string;
  fieldState?: ControllerFieldState;
}

export const Input = ({fieldState,iconName,labelText,...rest}:InputProps) => {
  console.log(fieldState)
  const [ onHover,setOnHover ] = useState(false);

  const inputValueRef = useRef<TextInputProps>(null);
	const [isFilled, setIsFilled] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

  const handleInputBlus = useCallback((value:any) => {
    setIsFocused(false)
		setIsFilled(!!inputValueRef.current?.value)
  },[])

  const handleInputFocus= useCallback((value:any) => {
    setIsFocused(true)
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
          <Icon name={iconName || "vpn-key"} size={25} color={isFocused || isFilled ? COLORS.green_500 : COLORS.grey_800}/>        
        </IconContainer>
        <TextInput  
          {...rest}
          ref={inputValueRef}
          textAlign='left' 
          verticalAlign='middle'          
          selectionColor={COLORS.green_390} 
          style={styles.textInput}
          multiline={false}
          onFocus={handleInputFocus}
          onBlur={handleInputBlus}
        />
      </ContainerStyleTextInput>
    </InputContainerAndLabel>
  );
}
