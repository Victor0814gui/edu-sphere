import React,{useEffect} from 'react';
import { Text, Image,Linking,StyleSheet } from "react-native";
import { FONTS,COLORS } from "../../../shared/theme"
import { useNavigation } from '@react-navigation/native';
//@ts-ignore
import LogoImage from "../assets/images/logo.svg";
import { Input } from '../components/input';
import { StepLevel } from '../components/step-level';
import { useAuthStepsContextProvider } from '../contexts/auth-steps';
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
    <>
    <StepLevel/>
    <Container>
      <Image source={LogoImage} resizeMode="cover" style={styles.logo}/>
      <Form>
        <Input iconName="mail-outline" autoComplete='email' labelText="Seu Email"/>
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
    </>
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