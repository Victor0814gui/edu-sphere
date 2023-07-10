import React, { useEffect, useCallback } from 'react';
import { Text, Image, StyleSheet } from "react-native";
import { FONTS, COLORS } from "../../../../shared/theme"
import { useNavigation } from '@react-navigation/native';
//@ts-ignore
import LogoImage from "../../assets/images/logo.svg";
import { Input } from '../../components/input';
import {
  styles,
  Container,
  Form,
  SectionButtonForm,
  ButtonGoBack,
  ButtonGoBackText,
  Button,
} from './styles';
import { StepLevel } from '../../components/step-level';
import { useAuthStepsContextProvider } from '../../contexts/auth-steps';
import { Controller, useForm } from 'react-hook-form';
import { useCreateUserStepsContextProvider } from '../../../../shared/contexts/create-user-steps';
import { MessageError } from '../../components/message-error';
import { ScreenAnimationWrapper } from '@modules/session/components/screen-wrapper-animation';
import { useNavigate } from 'react-router-native';

type OnSubmitProps = {
  name: string;
  birthday: string;
}

export function SignUpStepTwo() {
  const navigate = useNavigate()
  const { setStep } = useAuthStepsContextProvider();
  const { userData, setUserData } = useCreateUserStepsContextProvider();


  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      birthday: '',
      name: '',
    }
  });

  const onSubmit = useCallback(({ name, birthday }: OnSubmitProps) => {
    setUserData({
      email: userData.email,
      password: userData.password,
      name,
      birthday,
      avatarUrl: ''
    })
    navigate('/signinstepthree')
  }, [])


  useEffect(() => {
    setStep(2);
    console.log('SignUpStepTwo')
  }, [])

  return (
    <ScreenAnimationWrapper>
      <StepLevel />
      <Container>
        {/* <Image source={LogoImage} resizeMode="cover" style={styles.logo}/> */}
        <Form>
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 50,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                autoComplete='name'
                labelText="Seu Nome"
              />
            )}
            name="name"
          />
          {errors.name?.type === 'required' && <MessageError>birthday is required</MessageError>}
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 20,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                autoComplete='birthdate-full'
                labelText="Seu aniversario"
              />
            )}
            name="birthday"
          />
          {errors.birthday?.type === 'required' && <MessageError>name is required</MessageError>}
          <SectionButtonForm>
            <ButtonGoBack onPress={() => navigate('/')}>
              <ButtonGoBackText style={{ fontFamily: FONTS.Roboto.Medium }}>Voltar</ButtonGoBackText>
            </ButtonGoBack>
            <Button
              text="proximo passo"
              onPress={handleSubmit(onSubmit)}
              style={{ marginTop: 12 }}
            />
          </SectionButtonForm>
        </Form>
      </Container>
    </ScreenAnimationWrapper>
  );
}
