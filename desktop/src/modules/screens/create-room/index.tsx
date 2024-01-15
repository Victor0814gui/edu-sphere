import React, { useState, useEffect, useLayoutEffect } from 'react';

import { Input } from '@modules/components/input';
import { Button } from '@shared/components/button';
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

import {
  Container,
} from "./styles";

import { Trasition } from '@shared/components/transition';

type CreateRoomScreenProps = {
  navigation: any;
}

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

  const onSubmit = (data: any) => console.log(data)

  useFocusEffect(() => {
    const addNativeModulesMethod = async () => {
      // await fullscreen.removeBackButton();
    }
    addNativeModulesMethod();
  })

  return (
    <Trasition>
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
          <TextBlock text="this is a textblock" foreground='red' />
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
    </Trasition>
  );
}