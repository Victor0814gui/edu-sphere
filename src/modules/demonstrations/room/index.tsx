import React,{ useState } from "react";
import { Text,Image } from "react-native";
import { Header } from "../components/header";
import { Question } from "../components/question";
import { useNavigation,useRoute } from "@react-navigation/native";
import { ProgressView } from "@react-native-community/progress-view";

import {
  fonts,
  Container,
  SubHeaderContent,
  AmountOfQuestions,
  ListQuestions,
  ContainerRoomNotFound,
  TitleRoomNotFound,
  DescriptionRoomNotFound,
  ButtonRoomNotFound,
  ButtonRoomNotFoundText,
} from "./styles";


type RoomParamsType = {
  roomId: string;
}

export const Room = () => {

  const [ data,setData ] = useState<number[]>([1,2,1,2,3,4,5,2,2,3,4,2,4,2,4,5,1,2,5,1,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,5,2,5,25,2,2,2,2,2,3,4,4,5,6,6,7,8,8,9,9,6,6,5,5,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]);
  const route  = useRoute()
  const { navigate } = useNavigation();


  if(!route.params){
    return (
      <ContainerRoomNotFound>
        <TitleRoomNotFound style={fonts.titleRoomNotFound}>Ops,sala não encontrada</TitleRoomNotFound>
        <DescriptionRoomNotFound style={fonts.descriptionRoomNotFound}>parece que a sala que você está buscando não existe, verifique se o codigo da sala está certo e tente novamente</DescriptionRoomNotFound>
        <ButtonRoomNotFound onPress={() => navigate("dashboard")}>
          <ButtonRoomNotFoundText style={fonts.buttonRoomNotFoundText}>Home</ButtonRoomNotFoundText>
        </ButtonRoomNotFound>
      </ContainerRoomNotFound>
    )
  }

  const {
    roomId,
  } = route.params as RoomParamsType;

  return(
    <Container>
      <Header roomId={roomId}/> 
      <SubHeaderContent>
        <Text style={fonts.titleRoom}>Sala React Q&A</Text>
        <AmountOfQuestions>
          <Text style={fonts.titleRoomText}>42 perguntas</Text>
        </AmountOfQuestions>
      </SubHeaderContent>
      {/* @ts-ignore */}
      <ProgressView  isIndeterminate={true}/>
      <ListQuestions
        data={data}
        ListEmptyComponent={<Image source={require("../assets/animations/arty-chat.gif")}/>}
        renderItem={({item}) => (<Question/>)}        
        showsVerticalScrollIndicator
        keyExtractor={(item,index) =>`${index}-${item}`}
      />
    </Container>
  );
}