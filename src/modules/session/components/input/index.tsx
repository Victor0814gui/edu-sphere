import React, { useEffect, useCallback, useState, useRef, ElementType } from 'react';
import {
  styles,
  InputContainerAndLabel,
  InputLabelText,
  ContainerStyleTextInput,
  IconContainer,
  Input as TextInput,
} from './styles';
import { COLORS } from "../../../../shared/theme";
import { TextInput as TextInputType, TextInputProps } from 'react-native';
import { ControllerFieldState } from 'react-hook-form';
import { User } from 'phosphor-react-native';

type InputProps = TextInputProps & {
  labelText: string;
  icon?: ElementType;
  fieldState?: ControllerFieldState;
}

export const Input = ({ fieldState, icon: Icon = User, labelText, ...rest }: InputProps) => {
  console.log(fieldState)
  const [onHover, setOnHover] = useState(false);

  const inputValueRef = useRef<TextInputProps>(null);
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlus = useCallback((value: any) => {
    setIsFocused(false)
    setIsFilled(!!inputValueRef.current?.value)
  }, [])

  const handleInputFocus = useCallback((value: any) => {
    setIsFocused(true)
  }, [])

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
          <Icon size={22} color={isFocused || isFilled ? COLORS.green_500 : COLORS.grey_800} />
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
