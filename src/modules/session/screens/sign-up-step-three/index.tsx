import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet } from "react-native";
import { FONTS } from "../../../../shared/theme"
import { useNavigation } from '@react-navigation/native';
import { api } from "../../../../shared/services/api"
import {
  Container,
  SectionSelectAvatar,
  SectionSelectAvatarTitle,
  SelectAvatarList,
  Form,
  SectionButtonForm,
  ButtonGoBack,
  ButtonGoBackText,
  Button,
} from './styles';
import { StepLevel } from '../../components/step-level';
import { useAuthStepsContextProvider } from '../../contexts/auth-steps';
import { Avatar } from '../../components/avatar';
import { useCreateUserStepsContextProvider } from '../../../../shared/contexts/create-user-steps';
import { useAuthContextProvider } from '../../../../shared/contexts/auth';
import { ScreenAnimationWrapper } from '@modules/session/components/screen-wrapper-animation';
import { useNavigate } from 'react-router-native';
import { useToastNotificaitonProvider } from '@shared/contexts/toast-notification';

type OnSubmitProps = {
  avatarUrl: string;
}

export function SignUpStepThree() {
  const navigate = useNavigate();
  const [itemIndex, setItemIndex] = useState(0);
  const { setStep } = useAuthStepsContextProvider();
  const [avatars, setAvatars] = useState<string[]>([]);
  const { userData, setUserData } = useCreateUserStepsContextProvider();
  const { signUp } = useAuthContextProvider()
  const { addToastNotifications } = useToastNotificaitonProvider();;

  const onSubmit = useCallback(({ avatarUrl }: OnSubmitProps) => {
    console.log({ avatarUrl })
    setUserData({
      email: userData.email,
      password: userData.password,
      name: userData.name,
      birthday: userData.birthday,
      avatarUrl
    })

    console.log(userData);
    signUp({
      name: userData.name!,
      birthday: userData.birthday!,
      avatarUrl: avatarUrl,
      email: userData.email!,
      password: userData.password,
    })
  }, [signUp])



  const renderItem = ({ item, index }: { item: any, index: number }) => (
    <Avatar
      item={item}
      onPressIn={() => setItemIndex(index)}
      isSelected={itemIndex === index}
    />
  )

  const fetchAvatarsData = async () => {
    try {
      const avatarsDataResponse = await api.get("/avatars")
      console.log(avatarsDataResponse.data)
      setAvatars(avatarsDataResponse.data)
    } catch (err) {
      addToastNotifications({
        title: "Erro ao recuperar dados",
        type: 'error',
        mode: "temporary",
      })
    }
  }

  useEffect(() => {
    fetchAvatarsData()
    setStep(3);
  }, [])

  return (
    <ScreenAnimationWrapper>
      <StepLevel />
      <Container>
        <SectionSelectAvatar>
          <SectionSelectAvatarTitle style={styles.sectionSelectAvatar}>Escolha seu avatar</SectionSelectAvatarTitle>
          <SelectAvatarList
            data={avatars}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(_, index) => `${index}`}
          />
        </SectionSelectAvatar>
        <Form>
          <SectionButtonForm>
            <ButtonGoBack onPress={() => navigate("/signupsteptwo")}>
              <ButtonGoBackText style={{ fontFamily: FONTS.Roboto.Medium }}>Voltar</ButtonGoBackText>
            </ButtonGoBack>
            <Button
              text="Criar conta"
              style={{ marginTop: 12 }}
              onPress={() => onSubmit({ avatarUrl: avatars[itemIndex] })}
            />
          </SectionButtonForm>
        </Form>
      </Container>
    </ScreenAnimationWrapper>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 58,
  },
  text: {
    fontFamily: FONTS.Roboto.Medium
  },
  sectionSelectAvatar: {
    fontFamily: FONTS.Poppins.Medium,
  }
});