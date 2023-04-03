import React, { useState,useCallback } from 'react';
import {  Image,Pressable } from "react-native";
import { Button } from "../components/button";
import { useNavigation } from '@react-navigation/native';
//@ts-ignore
import LogoImage from "../assets/images/logo.svg";
import { Input } from '../components/input';
import { 
  styles,
  Container,
  Form
} from './styles';
import { useAuthContextProvider } from '../../../shared/contexts/auth';
import { HiperLink } from '../components/hiper-link';



export function SignIn() {
  const [ email,setEmail ] = useState('')
  const [ password,setPassword ] = useState('')
  const { navigate } = useNavigation()
  const { signIn } = useAuthContextProvider();

  const handleSignIn = useCallback(() => {
    signIn({email,password});   
  },[email,password])

  const handlePress = useCallback(async () => {
    // Open the custom settings if the app has one`
    navigate('signupstepone');
    // await Linking.openURL("https://github.com/notifications")
  }, []);

  return (
    <Container>
      <Image source={LogoImage} resizeMode="cover" style={styles.logo}/>
      <Form>
        <Input 
          onChangeText={setEmail}
          iconName="mail-outline"
          value={email} 
          autoComplete='email' 
          labelText="Seu Email"
        />
        <Input 
          onChangeText={setPassword} 
          value={password} 
          autoComplete='password' 
          secureTextEntry
          labelText="Sua senha"
        />
        <HiperLink text="Redefinir senha" />
        <Button
          text="entrar"
          onPress={() => handleSignIn()}
          style={styles.button}
        />
      </Form>
      <Pressable onPress={handlePress}>
          {({pressed}:{pressed: boolean}) => (
            <HiperLink 
              text="Ainda não tem uma conta? cria a sua aqui" 
              pressed={pressed}
            />
          )}
      </Pressable>
    </Container>
  );
}