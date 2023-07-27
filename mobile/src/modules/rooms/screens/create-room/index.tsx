import React, { useEffect, useLayoutEffect } from 'react';

import {
  Container,
} from "./styles";
import { Input } from '@modules/session/components/input';
import { ScreenAnimationWrapper } from '@shared/components/screen-wrapper-animation';
import { Button } from '@shared/components/button';
import { RootDrawerNavigationProp } from '@types/navigation';
import { Controller, useForm } from 'react-hook-form';
import { fullscreen } from "react-native-custom-window"
import { useFocusEffect } from "@react-navigation/native"

type CreateRoomScreenProps = {
  navigation: RootDrawerNavigationProp<"CreateRoomScreen">
}

// REACT_METHOD(AllowDrop, L"allowDrop")
// void AllowDrop(winrt:: Microsoft:: ReactNative:: ReactPromise < void> promise) noexcept {
//   context.UIDispatcher().Post([] {
//     winrt:: Windows:: UI:: Xaml:: Controls:: Frame frame;

//     frame.AllowDrop(true);
//   });
// }

// REACT_METHOD(DisableDrop, L"disableDrop")
// void DisableDrop(winrt:: Microsoft:: ReactNative:: ReactPromise < void> promise) noexcept {
//   context.UIDispatcher().Post([] {
//     winrt:: Windows:: UI:: Xaml:: Controls:: Frame frame;

//     frame.AllowDrop(false);
//   });
// }


export function CreateRoomScreen({ navigation }: CreateRoomScreenProps) {


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      type: "",
    },
  })

  const onSubmit = (data) => console.log(data)

  useFocusEffect(() => {
    const addNativeModulesMethod = async () => {
      const backButtonIsVisibleResponse = await fullscreen.backButtonIsVisible()
      await fullscreen.removeBackButton();
      if (!backButtonIsVisibleResponse) {
      } else {
        // await fullscreen.addBackButton();
      }
      console.log({ backButtonIsVisibleResponse })
      // fullscreen.disableDrop();
    }
    addNativeModulesMethod();
  })

  return (
    <ScreenAnimationWrapper>
      <Container>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 40,
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
          name="name"
        />
        <Input
          labelText="descrição da sala"
        />
        <Input
          labelText="tipo da sala"
        />
        <Input
          labelText="tipo da sala"
        />
        <Button.Default
          onPress={() => navigation.goBack()}
        >
          CRIAR NOVA SALA
        </Button.Default>
      </Container>
    </ScreenAnimationWrapper>
  );
}