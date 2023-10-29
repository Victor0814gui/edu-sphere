import React, { useState, useCallback } from 'react';
import { StyleSheet } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { titleBar } from "react-native-custom-window";
import { useAuthStepsContextProvider } from '../../contexts/auth-steps';
import { Controller, useForm } from 'react-hook-form';

import {
  Container,
  SectionSelectAvatar,
  SectionSelectAvatarTitle,
  SelectAvatarList,
  Button,
} from './styles';
import { useCreateUserStepsContextProvider } from '../../../../shared/contexts/create-user-steps';
import { useAuthContextProvider } from '../../../../shared/contexts/auth';
import { Avatar } from '../../components/avatar';
import { Trasition } from '../../../../shared/components/transition';
import { Input } from '../../components/input';
import { MessageError } from '../../components/message-error';
import { FONTS } from '../../../../shared/theme';

type OnSubmitProps = {
  avatarUrl: string;
}

export function CreateCustomerScreen() {
  const [itemIndex, setItemIndex] = useState(0);
  const [avatars, setAvatars] = useState<string[]>([]);
  const { userData, setUserData } = useCreateUserStepsContextProvider();
  const { signUp } = useAuthContextProvider()

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

  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  useFocusEffect(() => {
    const addBackButtonTitleBar = async () => {
      await titleBar.addBackButton()
    }

    addBackButtonTitleBar();
  })

  return (
    <Trasition>
      <Container>
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
        <Button
          text="Criar conta"
          style={{ marginTop: 12 }}
          onPress={() => onSubmit({ avatarUrl: avatars[itemIndex] })}
        />

      </Container>
    </Trasition>
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