import React, { useCallback } from 'react';
import { Button } from "@modules/components/button";
//@ts-ignore
import { Input } from '@modules/components/input';
import { useAuthContextProvider } from '@shared/contexts/auth';
import { HyperLink } from '@modules/components/hyper-link';
import { useForm, Controller } from 'react-hook-form';
import { MessageError } from '@modules/components/message-error';
import BackgroundIllustrationSvg from "@modules/assets/images/background-illustration.svg";
import BackgroundIllustrationRightSvg from "@modules/assets/images/background-illustration-right.svg";
import { Envelope, Password, SignIn as SignInIcon } from 'phosphor-react-native';
import { Transition } from '@shared/components/transition';
import { Heading } from '@shared/components/heading';
import {
  styles,
  Container,
  Content,
  Form,
  Footer,
} from './styles';

type OnSubmitProps = {
  password: string;
  email: string;
}

const ROUTE_NAME = "homescreen";

function AuthenticateAccountScreen({ navigation }: any) {
  const { signIn } = useAuthContextProvider();

  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const validadePasswordInput = useCallback((value: string) => {
    if (!value) return "Senha é obrigatória";
    if (value.length < 8 || value.length > 18) return "Senha deve ter entre 8 e 18 caracteres";
    if (/\s/.test(value)) return "Senha não pode conter espaços";
    return true;
  }, [])

  const onSubmit = useCallback(({ email, password }: OnSubmitProps) => {
    signIn({ email, password });
  }, [])

  const handlePress = useCallback(() => {
    navigation.navigate('signup');
  }, []);


  return (
    <React.Fragment>
      <BackgroundIllustrationSvg style={styles.backgroundLeft} />
      <BackgroundIllustrationRightSvg style={styles.backgroundRight} />
      <Transition>
        <Container accessible>
          <Content>
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
                    icon={Envelope}
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
                  minLength: 8,
                  validate: validadePasswordInput
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    icon={Password}
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
              {errors.password?.type === 'maxLength' && <MessageError>password is required 18 caracters</MessageError>}
              {errors.password?.type === 'minLength' && <MessageError>password is required 8 caracters</MessageError>}
              <HyperLink
                text="Redefinir senha"
                onPress={() => { }}
              />
              <Button
                text="entrar"
                onPress={handleSubmit(onSubmit)}
                style={styles.button}
                icon={SignInIcon}
              />
            </Form>
            <HyperLink
              text="Ainda não tem uma conta? cria a sua aqui"
              onPress={handlePress}
            />
          </Content>
          <Footer>
            <Heading>Ao criar um conta você está sujeito aos termos de uso presente aqui, e as politicias de privacidade</Heading>
          </Footer>
        </Container>
      </Transition>
    </React.Fragment>
  );
}


export {
  ROUTE_NAME,
  AuthenticateAccountScreen,
}