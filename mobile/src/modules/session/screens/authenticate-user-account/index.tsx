import React, { useCallback } from 'react';
import { Button } from "../../components/button";
//@ts-ignore
import { Input } from '../../components/input';
import { useAuthContextProvider } from '../../../../shared/contexts/auth';
import { HiperLink } from '../../components/hiper-link';
import { useForm, Controller } from 'react-hook-form';
import { MessageError } from '../../components/message-error';
import BackgroundIlustrationSvg from "../../assets/images/background-ilustration.svg";
import BackgroundIlustrationRightSvg from "../../assets/images/background-ilustration-right.svg";
import { Envelope, Password, SignIn as SignInIcon } from 'phosphor-react-native';
import { Trasition } from '../../../../shared/components/transition';
import { Heading } from '../../../../shared/components/heading';
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

export function AuthenticateUserAccount({ navigation }: any) {
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
    navigation.navigate('createCustomer');
  }, []);


  return (
    <React.Fragment>
      <BackgroundIlustrationSvg style={styles.backgroundLeft} />
      <BackgroundIlustrationRightSvg style={styles.backgroundRight} />
      <Trasition>
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
              <HiperLink
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
            <HiperLink
              text="Ainda não tem uma conta? cria a sua aqui"
              onPress={handlePress}
            />
          </Content>
          <Footer>
            <Heading>Ao criar um conta você está sujeito aos termos de uso presente aqui, e as politicias de privacidade</Heading>
          </Footer>
        </Container>
      </Trasition>
    </React.Fragment>
  );
}