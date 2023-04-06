
import { View } from "react-native";
import { 
  Container,
  BackgroundImageContainer,
  BackgroundImageContent,
  BackgroundImage,
  SectionHeaderContainer,
  SectionHeaderContainerLeftText,
  ListSubjectsContainer,
} from "./styles";

export const Lessons = () => {


  const renderItem = ({item}:any) => <View/>


  return(
    <Container>
      <BackgroundImageContainer>
        <BackgroundImageContent>
          <BackgroundImage />
        </BackgroundImageContent>
        <SectionHeaderContainer>
          <SectionHeaderContainerLeftText>materias</SectionHeaderContainerLeftText>
        </SectionHeaderContainer>
        <ListSubjectsContainer
          data={[]}
          renderItem={renderItem}
        />
      </BackgroundImageContainer>
    </Container>
  )
}