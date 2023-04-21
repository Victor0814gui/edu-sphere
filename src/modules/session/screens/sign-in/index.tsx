import React, { useCallback } from 'react';
import { Button } from "../../components/button";
import { useNavigation } from '@react-navigation/native';
//@ts-ignore
import { Input } from '../../components/input';
import {
  styles,
  Container,
  Form,
} from './styles';
import { useAuthContextProvider } from '../../../../shared/contexts/auth';
import { HiperLink } from '../../components/hiper-link';
import { useForm, Controller } from 'react-hook-form';
import { MessageError } from '../../components/message-error';


type OnSubmitProps = {
  password: string;
  email: string;
}

export function SignIn() {
  const { navigate } = useNavigation()
  const { signIn } = useAuthContextProvider();

  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = useCallback(({ email, password }: OnSubmitProps) => {
    signIn({ email, password });
  }, [])

  const handlePress = useCallback(async () => {
    navigate('signupstepone');
  }, []);

  return (
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
              iconName="mail-outline"
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
        <HiperLink
          text="Redefinir senha"
          onPress={() => { }}
        />
        <Button
          text="entrar"
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
          iconName='login'
        />
      </Form>
      <HiperLink
        text="Ainda não tem uma conta? cria a sua aqui"
        onPress={handlePress}
      />
    </Container>
  );
}