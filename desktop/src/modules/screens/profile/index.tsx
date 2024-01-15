import { useState } from "react";
import { ScrollView, Pressable, Image } from "react-native";

import { FilePicker } from "react-native-custom-window"
import RNFS from "react-native-fs";
import {
  additionalStyles,
  Container,
  TextContainer,
  ButtonSingnOut,
  ButtonSingnOutText,
  OptionsDescription,
  OptionsDescriptionText,
} from "./styles";
import { useAuthContextProvider } from "@shared/contexts/auth";
import { Transition } from '@shared/components/transition';
import { useToastNotificationProvider } from "@shared/contexts/toast-notification";
import { Expander } from "../../components/expander";

const description = "Os Ursos constituem uma família de mamíferos plantígrados, geralmente de grande porte, contendo os ursos e os pandas. Algumas características comuns dos ursos são pelagem espessa, rabo curto, o olfato desenvolvido e as garras não retráteis.";




export const Profile = () => {
  return (
    <ScrollView>
      <Transition>
        <Container>
          <TextContainer>Profile</TextContainer>
          <Expander label="criar mensagens com dados moveis" />
          <Expander label="tornar perfil publico ao criar e editar questions" />
          <Expander label="tonar minhas questions editaveis ao publico" />
          <Expander label="Desabilitar animações" >
            <OptionsDescription>
              <OptionsDescriptionText style={additionalStyles.optionsDescriptionText}>{description}</OptionsDescriptionText>
            </OptionsDescription>
          </Expander>
          <Expander label="Desabilitar animações" >
            <OptionsDescription>
              <OptionsDescriptionText style={additionalStyles.optionsDescriptionText}>{description}</OptionsDescriptionText>
            </OptionsDescription>
          </Expander>
        </Container>
      </Transition>
    </ScrollView>
  )
}

