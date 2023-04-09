
import React,{ useState } from "react";
import { 
  View,
  Text,
  TouchableOpacity,
} from "react-native-windows";
import Icon from "react-native-vector-icons/MaterialIcons";
import { 
  additionalStyles,
  Container,
  BackgroundImageContainer,
  BackgroundImageContent,
  BackgroundImage,
  SectionHeaderContainer,
  SectionHeaderContainerLeftText,
  ListSubjectsContainer,
} from "./styles";
import { Subject } from "../../components/subject";
import { COLORS } from "../../../../shared/theme";

const uri = "https://cdn.discordapp.com/attachments/1008571142858092684/1093544099388338287/thisistheway1142_toms_guide_logo_on_white_background_in_the_sty_4bf63938-ce79-40e7-928d-ac2b0da8b32b.png";



export const Lessons = () => {
  const RenderList = [1,2,3,4,5,6,7,8,9,10,11,12,14].map((e,index) => (
    <Subject
      amountLessons={index}
      premiun={index % 2 === 0 && true}
      title="Matematica"
    />
  ))


  return(
    <Container>
      <BackgroundImageContainer>
        <BackgroundImageContent>
          <BackgroundImage blurRadius={61} resizeMode="cover" source={{ uri }} />
        </BackgroundImageContent>
      </BackgroundImageContainer>
      <SectionHeaderContainer>
        <SectionHeaderContainerLeftText style={additionalStyles.sectionHeaderContainerLeftText}>materias</SectionHeaderContainerLeftText>
      </SectionHeaderContainer>
      <ListSubjectsContainer>
        {RenderList}
      </ListSubjectsContainer>
    </Container>
  )
}