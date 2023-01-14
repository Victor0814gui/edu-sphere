import React,{ useState } from 'react';
import { 
  styles,
  InputContainerAndLabel,
  InputLabelText,
  ContainerStyleTextInput,
  Input as TextInput,
} from './styles';
import { COLORS } from "../../../../shared/theme";

import { TextInputProps } from 'react-native';

type InputProps = TextInputProps & {
  labelText: string;
}

export function Input({labelText,...rest}:InputProps) {
  const [ onHover,setOnHover ] = useState(false);
  console.log("[session]-{Component}-[Input]")
  return (
    <InputContainerAndLabel>
      <InputLabelText style={styles.textInput}>{labelText}</InputLabelText>
      <ContainerStyleTextInput
        //@ts-ignore
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        onHover={onHover}
      >
        <TextInput  
          {...rest}
          textAlign='left' 
          selectionColor={COLORS.green_390} 
          style={styles.textInput}
        />
      </ContainerStyleTextInput>
    </InputContainerAndLabel>
  );
}
