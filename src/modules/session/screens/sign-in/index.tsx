import React, { useState,useCallback } from 'react';
import {  Image,Text,Pressable } from "react-native";
import { Button } from "../../components/button";
import { useNavigation } from '@react-navigation/native';
//@ts-ignore
import LogoImage from "../../assets/images/logo.svg";
import { Input } from '../../components/input';
import { 
  styles,
  Container,
  Form,
  ErrorMessageContainer,
  ErrorMessageContainerText
} from './styles';
import { useAuthContextProvider } from '../../../../shared/contexts/auth';
import { HiperLink } from '../../components/hiper-link';
import { useForm,Controller } from 'react-hook-form';
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from '../../../../shared/theme';
import { ScrollView } from 'react-native-gesture-handler';


type OnSubmitProps = {
  password: string;
  email: string;
}


const MessageError = ({children}:{children: string}) => {

  return (
    <ErrorMessageContainer>
      <Icon name="dangerous" size={15} color={COLORS.orange_400}/>
      <ErrorMessageContainerText style={styles.errorMessageContainerText}>{children}</ErrorMessageContainerText>
    </ErrorMessageContainer>
  )
}


export function SignIn() {
  const { navigate } = useNavigation()
  const { signIn } = useAuthContextProvider();

  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = useCallback(({email,password}: OnSubmitProps) => {
    signIn({email,password});   
  },[])

  const handlePress = useCallback(async () => {
    navigate('signupstepone');
  }, []);

  return (
    <Container>
      <Image source={LogoImage} resizeMode="cover" style={styles.logo}/>
      <Form>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 40,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input 
              onChangeText={onChange}
              iconName="mail-outline"
              onBlur={onBlur}
              value={value} 
              autoComplete='email' 
              labelText="Seu Email"
            />
          )}
          name="email"
        />
        {errors.email?.type === 'required' && <MessageError >email is required</MessageError>}
        {errors.email && <MessageError>email is incorrect</MessageError>}
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 20,
          }}
          render={({ field: { onChange,onBlur, value } }) => (
            <Input 
              onChangeText={onChange} 
              onBlur={onBlur}
              value={value} 
              autoComplete='password' 
              secureTextEntry
              labelText="Sua senha"
            />
          )}
          name="password"
        />  
        {errors.password?.type === 'required' && <MessageError>password is required</MessageError>}
        <HiperLink 
          text="Redefinir senha" 
          onPress={() => {}}
        />
        <Button
          text="entrar"
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
          iconName='login'
        />
      </Form>
      <HiperLink 
        text="Ainda não tem uma conta? cria a sua aqui" 
        onPress={handlePress}
      />
    </Container>
  );
}