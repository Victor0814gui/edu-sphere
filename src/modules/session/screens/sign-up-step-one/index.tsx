import React,{useEffect} from 'react';
import { Text, Animated, Image,Linking,StyleSheet } from "react-native";
import { FONTS,COLORS } from "../../../../shared/theme"
import { useNavigation } from '@react-navigation/native';
//@ts-ignore
import LogoImage from "../assets/images/logo.svg";
import { Input } from '../../components/input';
import { StepLevel } from '../../components/step-level';
import { useAuthStepsContextProvider } from '../../contexts/auth-steps';

import { 
  Container,
  Form,
  SectionButtonForm,
  ButtonGoBack,
  ButtonGoBackText,
  Button,
} from './styles';


export function SignUpStepOne() {
  const { navigate,goBack } = useNavigation()
  const { setStep } = useAuthStepsContextProvider()


  const handlePress = async () => {
    // await Linking.openURL("reactativeustomallery://signup")
      navigate('signupsteptwo');
  }

  useEffect(() => {
    setStep(1);
    console.log('SignUpStepOne')
  },[])

  return (
    <Animated.View
      style={{
        flex: 1,
      }}
    >
    <StepLevel/>
    <Container>
      <Image source={LogoImage} resizeMode="cover" style={styles.logo}/>
      <Form>
        <Input iconName="mail" autoComplete='email' labelText="Seu email"/>
        <Input iconName="vpn-key" autoComplete='email' labelText="Sua senha"/>
        <SectionButtonForm>
          <ButtonGoBack onPress={() => goBack()}>
            <ButtonGoBackText style={{fontFamily: FONTS.Roboto.Medium}}>Voltar</ButtonGoBackText>
          </ButtonGoBack>
          <Button
            text="proximo passo"
            onPress={handlePress}
            style={{
              marginTop: 12,
            }}
          />
        </SectionButtonForm>
      </Form>
    </Container>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  logo:{
    marginBottom: 58,
  },
  text:{
    fontFamily: FONTS.Roboto.Medium
  },
});