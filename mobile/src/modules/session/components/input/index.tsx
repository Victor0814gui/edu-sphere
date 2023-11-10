import React, { useEffect, useCallback, useState, useRef, ElementType, } from 'react';
import {
  styles,
  InputContainerAndLabel,
  InputLabelText,
  ContainerStyleTextInput,
  IconContainer,
  Input as TextInput,
} from './styles';
import { COLORS } from "@shared/theme";
import { TextInput as TextInputType, TextInputProps, Animated } from 'react-native';
import { ControllerFieldState } from 'react-hook-form';
import { User, Warning } from 'phosphor-react-native';

type InputProps = TextInputProps & {
  labelText?: string;
  icon?: ElementType;
  fieldState?: ControllerFieldState;
}

export const Input = ({ fieldState, icon: Icon = User, labelText, ...rest }: InputProps) => {
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

  const onMouseLeave = useCallback(() => {
    setOnHover(false);
  }, [])

  const onMouseEnter = useCallback(() => {
    setOnHover(true);
  }, [])


  return (
    <InputContainerAndLabel
      accessible={false}
    >
      {!!labelText && <InputLabelText style={styles.textInput}>{labelText}</InputLabelText>}
      <ContainerStyleTextInput
        onHover={onHover}
        //@ts-ignore
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
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
          multiline={rest.multiline}
          onFocus={handleInputFocus}
          onBlur={handleInputBlus}
        />
      </ContainerStyleTextInput>
    </InputContainerAndLabel>
  );
}
