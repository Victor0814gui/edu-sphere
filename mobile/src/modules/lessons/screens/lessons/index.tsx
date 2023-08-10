
import React, { useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  additionalStyles,
  Container,
  BackgroundImageContainer,
  Button,
  ButtonText,
  BackgroundImageContent,
  BackgroundImage,
  SectionHeaderContainer,
  SectionHeaderContainerLeftText,
  ListSubjectsContainer,
} from "./styles";
import { Subject } from "../../components/subject";
import { COLORS } from "@shared/theme";
import { ScreenAnimationWrapper } from '@shared/components/screen-wrapper-animation';

const uri = "https://cdn.discordapp.com/attachments/1008571142858092684/1093544099388338287/thisistheway1142_toms_guide_logo_on_white_background_in_the_sty_4bf63938-ce79-40e7-928d-ac2b0da8b32b.png";



export const Lessons = () => {
  const RenderList = (({ item, index }: any) => (
    <Subject
      amountLessons={index}
      premiun={index % 2 === 0 && true}
      title="Matematica"
    />
  ))


  return (
    <ScreenAnimationWrapper>
      <Container>
        <BackgroundImageContainer>
          <BackgroundImage resizeMode="cover"  source={{uri: "https://cdn.discordapp.com/attachments/1008571074981658694/1138478042944110624/Cindy.Y_Please_generate_a_real_life_photo_of_Playground_on_a_wh_8184e6bd-a8e7-41d9-bebe-0c2611964bd9.png"}} />
          <Button>
            <ButtonText>Assistir</ButtonText>
          </Button>
        </BackgroundImageContainer>
        <SectionHeaderContainer>
          <SectionHeaderContainerLeftText style={additionalStyles.sectionHeaderContainerLeftText}>materias</SectionHeaderContainerLeftText>
        </SectionHeaderContainer>
        <ListSubjectsContainer>
          <FlatList
            style={{ paddingVertical: 12 }}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14]}
            renderItem={RenderList}
            horizontal
          />
        </ListSubjectsContainer>
      </Container>
    </ScreenAnimationWrapper>
  )
}