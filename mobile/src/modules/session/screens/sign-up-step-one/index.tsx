import React, { useCallback, useEffect } from 'react';
import { StyleSheet } from "react-native";
import { FONTS } from "@shared/theme"
//@ts-ignore
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
import { useCreateUserStepsContextProvider } from '@shared/contexts/create-user-steps';
import { Controller, useForm } from 'react-hook-form';
import { MessageError } from '../../components/message-error';
import { ScreenAnimationWrapper } from '@shared/components/screen-wrapper-animation';
import { useNavigate } from 'react-router-native';

type OnSubmitProps = {
  email: string;
  password: string;
}

export function SignUpStepOne() {
  const navigate = useNavigate()
  const { setStep } = useAuthStepsContextProvider()
  const { setUserData } = useCreateUserStepsContextProvider();

  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = useCallback(({ email, password }: OnSubmitProps) => {
    setUserData({
      email,
      password,
      name: null,
      birthday: null,
      avatarUrl: ''
    })
  }, [])


  useEffect(() => {
    setStep(1);
    console.log('SignUpStepOne')
  }, [])

  return (
    <ScreenAnimationWrapper>
      {/* <Image source={Background} style={{position: "absolute",top: 0, right: 0, bottom: 0,left: 0, zIndex: 0}}/> */}
      <StepLevel />
      <Container>
        {/* <Image source={LogoImage} resizeMode="cover" style={styles.logo}/> */}
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
                onBlur={onBlur}
                value={value}
                autoComplete='email'
                labelText="Seu Email"
              />
            )}
            name="email"
          />
          {errors.email?.type === 'required' && <MessageError>email is required</MessageError>}
          {errors.email && <MessageError>email is incorrect</MessageError>}
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
                autoComplete='password'
                secureTextEntry
                labelText="Sua senha"
              />
            )}
            name="password"
          />
          {errors.password?.type === 'required' && <MessageError>password is required</MessageError>}
          <SectionButtonForm>
            <ButtonGoBack onPress={() => navigate('/')}>
              <ButtonGoBackText style={{ fontFamily: FONTS.Roboto.Medium }}>Voltar</ButtonGoBackText>
            </ButtonGoBack>
            <Button
              text="proximo passo"
              onPress={handleSubmit(onSubmit)}
              style={{
                marginTop: 12,
              }}
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
}); 