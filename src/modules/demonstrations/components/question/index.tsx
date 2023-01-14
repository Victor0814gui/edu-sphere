import { Text } from "react-native";
import {
  styles,
  ContainerQuestion,
  ContentAuthorInformationAndEditOption,
  SectionContent,
  CircleIconProfile,
  VisualizationIcons,
} from "./styles";

import Icon from "react-native-vector-icons/Entypo"

export function Question(){

  return  (
    <ContainerQuestion>
      <Text style={styles.questionContentText}>Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes.</Text>
      <ContentAuthorInformationAndEditOption>
        <SectionContent>
          <CircleIconProfile
            source={{uri:"https://avatars.githubusercontent.com/u/2254731?v=4"}}
            resizeMode="cover"
          />
          <Text style={styles.questionUserNameProfile}>Marcelo Oliveira de Souza</Text>
        </SectionContent>
        <SectionContent>
          <VisualizationIcons/>
          <VisualizationIcons/>
          <VisualizationIcons/>
        </SectionContent>
      </ContentAuthorInformationAndEditOption>
    </ContainerQuestion>
  )
}