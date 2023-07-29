import React, { useState, useEffect, useLayoutEffect } from 'react';

import {
  Container,
} from "./styles";
import { Input } from '@modules/session/components/input';
import { ScreenAnimationWrapper } from '@shared/components/screen-wrapper-animation';
import { Button } from '@shared/components/button';
import { RootDrawerNavigationProp } from '@types/navigation';
import { Controller, useForm } from 'react-hook-form';
// import { fullscreen } from "react-native-custom-window"
import { useFocusEffect } from "@react-navigation/native"

import {
  Viewbox, Border,
  TextBlock,
  WinUI,
  Visibility,
  WinUIEnums,
} from "react-native-xaml";
import { View } from 'react-native';

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
  const [pointerMoved, setPointerMoved] = useState(false);

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
      // await fullscreen.removeBackButton();
    }
    addNativeModulesMethod();
  })

  return (
    <ScreenAnimationWrapper>
      <Container>
        <WinUI.InfoBar
          message="the message"
          title="the title"
          isOpen={true}
          visibility={Visibility.Visible}
          severity={WinUIEnums.InfoBarSeverity.Success}
        />
        <Border
          onPointerMoved={() => console.log("moved-1")}
          allowDrop
          onDrop={(e) => console.log(e)}
          background="paleturquoise"
        >
          <TextBlock text="this is a textblock" foreground='red' textAlignment="center" />
        </Border>
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
          onPress={() => navigation.navigate("dashboard")}
        >
          CRIAR NOVA SALA
        </Button.Default>
      </Container>
    </ScreenAnimationWrapper>
  );
}