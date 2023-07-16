import { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Pressable, Switch } from "react-native";
import { COLORS } from "../../../../shared/theme";
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
import { useAuthContextProvider } from "../../../../shared/contexts/auth";
import { ScreenAnimationWrapper } from "@modules/demonstrations/components/screen-wrapper-animation";
import { Expander } from "@modules/demonstrations/components/expander";

const description = "Os Ursos constituem uma família de mamíferos plantígrados, geralmente de grande porte, contendo os ursos e os pandas. Algumas características comuns dos ursos são pelagem espessa, rabo curto, o olfato desenvolvido e as garras não retráteis.";




export const Profile = (): JSX.Element => {
  const [folder,setFolder] = useState("");
  const { signOut } = useAuthContextProvider();

  const onPressSignOut = () => {
    signOut()
  }

  const pickFile = async () => {
    const filePathResponse = await FilePicker.pickerSingleFolder();
    setFolder(filePathResponse)
    console.log(filePathResponse);
  }

  const readFile = () => {
    RNFS.readDir(folder) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then((result) => {
        console.log('GOT RESULT', result);

        // stat the first file
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      .then((statResult) => {
        if (statResult[0].isFile()) {
          // if we have a file, read it
          return RNFS.readFile(statResult[1], 'utf8');
        }

        return 'no file';
      })
      .then((contents) => {
        // log the file contents
        console.log(contents);
      })
      .catch((err) => {
        console.log(err.message, err.code);
      });
  }

  return (
    <ScrollView>
      <ScreenAnimationWrapper>
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
      </ScreenAnimationWrapper>
    </ScrollView>
  )
}

