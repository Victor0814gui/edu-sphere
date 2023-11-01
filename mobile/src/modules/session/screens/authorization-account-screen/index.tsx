import React, { useEffect, useState } from 'react';
import { Alert, TouchableHighlight, StyleSheet, Text, Pressable, View } from 'react-native';
import { Flyout } from "react-native-windows";
import {
  Container,
  Content,
  Title,
  Description,
  aditionalStyles,
} from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { CodeSimple } from "phosphor-react-native";
import { useAuthContextProvider } from '../../../../shared/contexts/auth';
import { Controller, useForm } from 'react-hook-form';
import { MessageError } from '../../components/message-error';
import { titleBar } from 'react-native-custom-window';
import { Transition } from '../../../../shared/components/transition';

export const AuthorizationAccountScreen = () => {
  const { authorization } = useAuthContextProvider();

  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      token: ''
    }
  });

  const handlerAuthorizationAccount = (props: any) => {
    authorization({
      token: props.token
    })
  };


  return (
    <Transition>
      <Container>
        <Content>
          <Title style={aditionalStyles.title}>Autorizar conta</Title>
          <Description style={aditionalStyles.description}>Esse processo serve para verificar e garantir a integratidade do serviço, uma conta autorizada e segura evita uma grande parte de ataques mal intencionados</Description>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                icon={CodeSimple}
              />
            )}
            name="token"
          />
          {errors.token?.type === 'required' && <MessageError>token is required</MessageError>}
          <Button
            onPress={handleSubmit(handlerAuthorizationAccount)}
            text="Autorizar"
          />
        </Content>
      </Container>
    </Transition>
  );
};