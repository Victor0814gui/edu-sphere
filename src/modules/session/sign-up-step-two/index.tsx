import React, { useEffect } from 'react';
import { Text, Image,StyleSheet } from "react-native";
import { FONTS,COLORS } from "../../../shared/theme"
import { useNavigation } from '@react-navigation/native';
import LogoImage from "../assets/images/logo.svg";
import { Input } from '../components/input';
import { 
  styles,
  Container,
  Form,
  SectionButtonForm,
  ButtonGoBack,
  ButtonGoBackText,
  Button,
} from './styles';
import { StepLevel } from '../components/step-level';
import { useAuthStepsContextProvider } from '../contexts/auth-steps';

export function SignUpStepTwo() {
  const { navigate,goBack } = useNavigation()
  const { setStep } = useAuthStepsContextProvider();

  useEffect(() => {
    setStep(2);
    console.log('SignUpStepTwo')
  },[])

  return (
    <>
    <StepLevel/>
    <Container>
      <Image source={LogoImage} resizeMode="cover" style={styles.logo}/>
      <Form>
        <Input autoComplete='email' labelText="Seu Email"/>
        <Input autoComplete='email' labelText="Seu Email"/>
        <SectionButtonForm>
          <ButtonGoBack onPress={() => goBack()}>
            <ButtonGoBackText style={{fontFamily: FONTS.Roboto.Medium}}>Voltar</ButtonGoBackText>
          </ButtonGoBack>
          <Button
            text="proximo passo"
            onPress={() => {
              navigate('signinstepthree')
            }}
            style={{ marginTop: 12 }}
          />
        </SectionButtonForm>
      </Form>
    </Container>
    </>
  );
}
