import { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Pressable, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FilePicker } from "react-native-custom-window"
import RNFS from "react-native-fs";
import {
  aditionalStyles,
  Container,
  TextContainer,
  ButtonSingnOut,
  ButtonSingnOutText,
  SectionSwitch,
  ContainerOnMouseHover,
  SwitchText,
  OptionsDescription,
  OptionsDescriptionText,
} from "./styles";
import { COLORS } from "@shared/theme";
import { useAuthContextProvider } from "@shared/contexts/auth";
import { Trasition } from '@shared/components/transition';
import { useToastNotificationProvider } from "@shared/contexts/toast-notification";
import { Expander } from "../../components/expander";

const description = "Os Ursos constituem uma família de mamíferos plantígrados, geralmente de grande porte, contendo os ursos e os pandas. Algumas características comuns dos ursos são pelagem espessa, rabo curto, o olfato desenvolvido e as garras não retráteis.";




export const Profile = (): JSX.Element => {
  const [folder, setFolder] = useState("");
  const [file, setFile] = useState("");

  const { signOut } = useAuthContextProvider();

  const { addToastNotifications } = useToastNotificationProvider();

  const onPressSignOut = () => {
    signOut()
  }

  const pickFolder = async () => {
    try {
      // const filePathResponse = await FilePicker.pickerFolder();
      // setFolder(filePathResponse)
      // console.log({ filePathResponse });
    } catch (err) {
      console.log(err);
      addToastNotifications({
        title: "você não selecionou nenhum pasta",
        type: "warning",
      });
    }
  }

  const pickFile = async () => {
    try {
      const filePathResponse = await FilePicker.pickFile();
      setFile(filePathResponse)
    } catch (err) {
      addToastNotifications({
        title: "você não selecionou nenhum arquivo",
        type: "warning",
      });
    }
  }

  const readFile = async () => {
    try {
      const readFileResponse = await RNFS.readFile(file, 'utf8')
      console.log(readFileResponse);
    } catch (err) {
      console.log({ err })
    }
  }

  const createFile = async () => {
    try {
      const fileCreateResponse = await RNFS.writeFile(`${folder}-new-file-gallery-rnw-2.txt`, 'Lorem ipsum dolor sit amet', 'utf8');
      console.log(fileCreateResponse);
    } catch (err) {
      console.log(err);
      console.log({
        fsPath: RNFS.DownloadDirectoryPath,
        systemPath: folder,
      })
    }
  }

  const createFolder = async () => {
    try {
      const response = await RNFS.mkdir(`${folder}/new-file-gallery-rnw-asdfasdf`);
      console.log(`[createFolder]- [response]`)
      // await Linking.openURL(`explorer /select,${folder}`)
    } catch (err) {
      // const error = err as unknown as {message: string};
      // console.log(`[createFolder] - ${error.message}`)
      addToastNotifications({
        title: "você não selecionou nenhum arquivo",
        type: "warning",
      });
    }
  }

  return (
    <ScrollView>
      <Trasition>
        <Container>
          <TextContainer>Profile</TextContainer>
          <Pressable onPress={pickFile}>
            {({ pressed }) => (
              <ButtonSingnOut pressed={pressed ? pressed : false} >
                <ButtonSingnOutText
                  pressed={pressed ? pressed : false}
                  style={aditionalStyles.buttonSingnOutText}>sair</ButtonSingnOutText>
              </ButtonSingnOut>
            )}
          </Pressable>
          <Pressable onPress={readFile}>
            {({ pressed }) => (
              <ButtonSingnOut pressed={pressed ? pressed : false} >
                <ButtonSingnOutText
                  pressed={pressed ? pressed : false}
                  style={aditionalStyles.buttonSingnOutText}>readFile</ButtonSingnOutText>
              </ButtonSingnOut>
            )}
          </Pressable>

          {file && <Image
            style={{ height: 100, width: 100 }}
            source={{ uri: "C:/User/agcoi/Downloads/Thumbnail.png" }}
            onError={(e) => console.log({ image: e })}
          />}
          <Pressable onPress={createFile}>
            {({ pressed }) => (
              <ButtonSingnOut pressed={pressed ? pressed : false} >
                <ButtonSingnOutText
                  pressed={pressed ? pressed : false}
                  style={aditionalStyles.buttonSingnOutText}>Create file</ButtonSingnOutText>
              </ButtonSingnOut>
            )}
          </Pressable>
          <Pressable onPress={createFolder}>
            {({ pressed }) => (
              <ButtonSingnOut pressed={pressed ? pressed : false} >
                <ButtonSingnOutText
                  pressed={pressed ? pressed : false}
                  style={aditionalStyles.buttonSingnOutText}>createFolder</ButtonSingnOutText>
              </ButtonSingnOut>
            )}
          </Pressable>
          <Expander label="criar mensagens com dados moveis" />
          <Expander label="tornar perfil publico ao criar e editar questions" />
          <Expander label="tonar minhas questions editaveis ao publico" />
          <Expander label="Desabilitar animações" >
            <OptionsDescription>
              <OptionsDescriptionText style={aditionalStyles.optionsDescriptionText}>{description}</OptionsDescriptionText>
            </OptionsDescription>
          </Expander>
          <Expander label="Desabilitar animações" >
            <OptionsDescription>
              <OptionsDescriptionText style={aditionalStyles.optionsDescriptionText}>{description}</OptionsDescriptionText>
            </OptionsDescription>
          </Expander>
        </Container>
      </Trasition>
    </ScrollView>
  )
}

