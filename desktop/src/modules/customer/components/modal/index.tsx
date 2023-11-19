import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import {
  aditionalStyles,
  Container,
  Content,
  Title,
  Description,
} from './styles';
import { ButtonCloseModal } from './components/button-close-modal';
import LottieView from "lottie-react-native";
import { Input } from '@session/components/input';
import { Button } from '@shared/components/button';
import { Article, TextAlignJustify } from 'phosphor-react-native';
import { Controller, useForm } from 'react-hook-form';
import { socket } from '@shared/services/socket-io';
import { MessageError } from '@session/components/message-error';
import { ToastContentType, useToastNotificationProvider } from '@shared/contexts/toast-notification';
import { api } from '@shared/services/api';
import { useAuthContextProvider } from '@shared/contexts/auth';


const createRoomNotification: ToastContentType = {
  title: "Sala criada",
  description: "Sala criada com sucesso, bem vindo!",
  position: "center",
  type: "success"
}

type ModalProps = {
  title: string;
  description: string
}

type OnSubmitProps = {
  title: string;
  description: string
}

export const Modal = ({
  title = "",
  description = "",
}: ModalProps) => {
  const animationEnterModal = useRef(new Animated.Value(0.8)).current;
  const { addToastNotifications } = useToastNotificationProvider();
  const { user } = useAuthContextProvider();

  const animationEnter = () => {
    Animated.spring(animationEnterModal, {
      useNativeDriver: false,
      toValue: 1,
    }).start();
  }

  const animationLeave = () => {
    Animated.timing(animationEnterModal, {
      useNativeDriver: false,
      toValue: 0,
      duration: 200,
    }).start(({ finished }) => {
      if (finished) {
      }
    });
  }

  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      title: "",
      description: "",
    }
  });


  const onSubmit = (props: OnSubmitProps) => {
    socket.emit(
      "room:create", {
      ...props,
      type: "default",
      published: true,
      authorId: user?.id,
    }, (data: any) => {
      if (!!data.id) {
        addToastNotifications(createRoomNotification)
      }
    }
    )
  }


  useEffect(() => {
    animationEnter();
  }, [])

  return (
    <Container style={{ backgroundColor: "#11111199" }}>
      <Content
        style={{
          transform: [{
            scale: animationEnterModal
          }]
        }}
      >
        <ButtonCloseModal onPress={animationLeave} />
        <Title style={aditionalStyles.title}>{title}</Title>
        <Description style={aditionalStyles.description}>{description}</Description>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 60,
            minLength: 4,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon={Article}
              labelText='Titulo'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="title"
        />
        {errors.title?.type === 'required' && <MessageError>Você deve preencher esse campo</MessageError>}
        {errors.title?.type === 'minLength' && <MessageError>o titulo deve ter no maxino 4 caracteres</MessageError>}
        {errors.title?.type === 'maxLength' && <MessageError>o titulo deve ter no maxino 40 caracteres</MessageError>}
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 200,
            minLength: 10,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon={TextAlignJustify}
              labelText='Descrição da sala'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="description"
        />
        {errors.description?.type === 'required' && <MessageError>Você deve preencher esse campo</MessageError>}
        {errors.description?.type === 'minLength' && <MessageError>a descrição deve ter no maxino 10 caracteres</MessageError>}
        {errors.description?.type === 'maxLength' && <MessageError>o titulo deve ter no maxino 200 caracteres</MessageError>}
        <View style={{ marginTop: 16 }} />
        <Button.Default onPress={handleSubmit(onSubmit)}>Criar Sala</Button.Default>
      </Content>
    </Container>
  );
}