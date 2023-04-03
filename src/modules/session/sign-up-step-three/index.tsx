import React, { useState,useEffect,useRef } from 'react';
import { View,Pressable, Animated,StyleSheet } from "react-native";
import { FONTS,COLORS } from "../../../shared/theme"
import { useNavigation } from '@react-navigation/native';
import LogoImage from "../assets/images/logo.svg";
import { Input } from '../components/input';
import { api } from "../../../shared/services/api"
import { 
  Container,
  SectionSelectAvatar,
  SectionSelectAvatarTitle,
  SelectAvatarList,
  SelectAvatarImage,
  Form,
  SectionButtonForm,
  ButtonGoBack,
  ButtonGoBackText,
  Button,
} from './styles';
import { StepLevel } from '../components/step-level';
import { useAuthStepsContextProvider } from '../contexts/auth-steps';
import { Avatar } from '../components/avatar';



export function SignUpStepThree() {
  const navigation = useNavigation()
  const [ itemIndex, setItemIndex ] = useState(0)
  const { setStep } = useAuthStepsContextProvider();
  const [ avatars,setAvatars ] = useState<string[]>([])


  const renderItem = ({item,index}:{item: any,index: number}) => (
      <Avatar 
        item={item}
        onPressIn={() => setItemIndex(index)}
        isSelected={itemIndex === index}
      />
  )
  
  const fetchAvatarsData = async () => {
    try{
      const avatarsDataResponse = await api.get("/avatars")
      setAvatars(avatarsDataResponse.data)
    }catch(err){

    }
  }

  useEffect(() => {
    fetchAvatarsData()
    setStep(3);
    console.log('SignUpStepThree')

  },[])

  return (
    <>
    <StepLevel/>
    <Container>
      <SectionSelectAvatar>
        <SectionSelectAvatarTitle style={styles.sectionSelectAvatar}>Escolha seu avatar</SectionSelectAvatarTitle>
        <SelectAvatarList
          data={avatars}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(_,index) => `${index}`}
        />
      </SectionSelectAvatar>
      <Form>
        <SectionButtonForm>
          <ButtonGoBack onPress={() => navigation.navigate("signupsteptwo")}>
            <ButtonGoBackText style={{fontFamily: FONTS.Roboto.Medium}}>Voltar</ButtonGoBackText>
          </ButtonGoBack>
          <Button
            text="Criar conta"
            style={{ marginTop: 12 }}
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
  sectionSelectAvatar:{
    fontFamily: FONTS.Poppins.Medium,
  }
});