import React,{ useState } from 'react';
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

type InputProps = TextInputProps & {
  labelText: string;
  iconName?: string;
}

export const Input = ({iconName,labelText,...rest}:InputProps) => {
  const [ onHover,setOnHover ] = useState(false);

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
          <Icon name={iconName || "vpn-key"} size={25} color={COLORS.green_500}/>        
        </IconContainer>
        <TextInput  
          {...rest}
          textAlign='left' 
          verticalAlign='middle'          
          selectionColor={COLORS.green_390} 
          style={styles.textInput}
          multiline={false}
        />
      </ContainerStyleTextInput>
    </InputContainerAndLabel>
  );
}
