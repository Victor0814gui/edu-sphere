import React, { useCallback, useState } from 'react';
import { Button } from "@session/components/button";
import { Input } from '@session/components/input';
import { useAuthContextProvider } from '@shared/contexts/auth';
import { HyperLink } from '@session/components/hyper-link';
import { useForm, Controller } from 'react-hook-form';
import { MessageError } from '@session/components/message-error';
import BackgroundIllustrationSvg from "@session/assets/images/background-illustration.svg";
import BackgroundIllustrationRightSvg from "@session/assets/images/background-illustration-right.svg";
import { Envelope, Password, SignIn as SignInIcon, User } from "phosphor-react-native";
import { Transition } from "@shared/components/transition";
import { Heading } from "@shared/components/heading";
import { Avatar } from "@session/components/avatar";

import {
  styles,
  Container,
  Content,
  Form,
  Footer,
} from './styles';
import { FlatList } from 'react-native';

type OnSubmitProps = {
  name: string;
  email: string;
  password: string;
}

export function CreateCustomerScreen({ navigation }: any) {
  const { signUp } = useAuthContextProvider();
  const [itemIndex, setItemIndex] = useState(0);
  const [avatars, setAvatars] = useState<string[]>([]);
  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  });

  const validatePasswordInput = useCallback((value: string) => {
    if (!value) return "Senha é obrigatória";
    if (value.length < 8 || value.length > 18) return "Senha deve ter entre 8 e 18 caracteres";
    if (/\s/.test(value)) return "Senha não pode conter espaços";
    return true;
  }, [])

  const renderItem = useCallback(({ item, index }: { item: any, index: number }) => (
    <Avatar
      item={""}
      onPressIn={() => setItemIndex(index)}
      isSelected={itemIndex === index}
    />
  ), [itemIndex])

  const onSubmit = async (props: OnSubmitProps) => {
    await signUp({
      ...props,
      avatarUrl: "https://avatars.githubusercontent.com/u/92493696?v=4",
    });
  }

  const handlePress = useCallback(() => {
    navigation.navigate('signin');
  }, []);

  const fetchAvatars = () => {
    setAvatars([])
  }


  return (
    <React.Fragment>
      <BackgroundIllustrationSvg style={styles.backgroundLeft} />
      <BackgroundIllustrationRightSvg style={styles.backgroundRight} />
      <Transition>
        <Container>
          <Content>
            <Form>
              <Controller
                control={control}
                rules={{
                  required: true,
                  maxLength: 20,
                  minLength: 6,
                  validate: validatePasswordInput
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    icon={User}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    autoComplete='name'
                    labelText="Seu nome"
                  />
                )}
                name="name"
              />
              {errors.name?.type === 'required' && <MessageError>name is required</MessageError>}
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
                  validate: validatePasswordInput
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
              <Heading>Escolha seu avatar</Heading>
              <FlatList
                data={[1, 2, 3, 4, 5]}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(_, index) => `${index}`}
                style={{ flexGrow: 0, marginTop: 12, borderRadius: 55 }}
              />
              <Button
                text="Criar Conta"
                onPress={handleSubmit(onSubmit)}
                style={styles.button}
                icon={SignInIcon}
              />
            </Form>
            <HyperLink
              text="Já tem uma conta? Entre aqui"
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