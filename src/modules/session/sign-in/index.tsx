import React, { useState,useCallback } from 'react';
import {  Image,Pressable } from "react-native";
import { Button } from "../components/button";
import { useNavigation } from '@react-navigation/native';
import LogoImage from "../assets/images/logo.svg";
import { Input } from '../components/input';
import { 
  styles,
  Container,
  Form,
  TextRecoveryPassword,
  TextRedirectCreateAcount
} from './styles';
import { useAuthContextProvider } from '../../../shared/contexts/auth';


export function SignIn() {
  const [ email,setEmail ] = useState('')
  const [ password,setPassword ] = useState('')
  const { navigate } = useNavigation()
  const { signIn } = useAuthContextProvider();

  const handleSignIn = useCallback(() => {
    signIn({email,password});   
  },[email,password])

  return (
    <Container>
      <Image source={LogoImage} resizeMode="cover" style={styles.logo}/>
      <Form>
        <Input onChangeText={setEmail} value={email} autoComplete='email' labelText="Seu Email"/>
        <Input onChangeText={setPassword} value={password} autoComplete='password' labelText="Sua senha"/>
        <TextRecoveryPassword style={styles.text}>Redefinir senha</TextRecoveryPassword>
        <Button
          text="entrar"
          onPress={() => handleSignIn()}
          style={styles.button}
        />
      </Form>
      <Pressable onPress={() => {
        navigate('signupstepone');
      }}>
        <TextRedirectCreateAcount style={styles.text}>Ainda não tem uma conta? cria a sua aqui</TextRedirectCreateAcount>
      </Pressable>
    </Container>
  );
}