import React,{ useEffect,useState } from "react";
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
// import LottieView  from "lottie-react-native";


type RoomParamsType = {
  roomId: string;
}

export type QuestionType = {
  message: string;
  avatarUrl?: string;
  authorId: string;
  nickname: string;
  messageVideoUrl?: string | null;
  isPrivate: boolean;
}

const questions: QuestionType[] = [
  {
    nickname: "Álefe C Oliveira",
    message: "Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes.",
    authorId: "1234-1234-asdf-asdf",
    avatarUrl: "https://avatars.githubusercontent.com/u/92493696?v=4",
    messageVideoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_30mb.mp4",
    isPrivate: false,
  },
  {
    nickname: "Victorguilherme0814",
    authorId: "1234-asdf-hjk5-55hf",
    message: "Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes.",
    avatarUrl: "https://avatars.githubusercontent.com/u/92493696?v=4",
    messageVideoUrl: "http://localhost:4000/2023-02-13-21-27-16.mkv",
    isPrivate: false,
  },
  {
    nickname: "Victorguilherme0814",
    authorId: "1234-asdf-hjk5-55hf",
    message: "Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes.",
    avatarUrl: "https://avatars.githubusercontent.com/u/92493696?v=4",
    messageVideoUrl: "http://localhost:4000/2022-08-28-09-12-22.mkv",
    isPrivate: false,
  },
]

export const Room = () => {

  const [ data,setData ] = useState<QuestionType[]>([]);
  const route  = useRoute()
  const { navigate } = useNavigation();

  useEffect(() => {
    setData(questions)
  })  

  if(!route.params){
    return (
      <ContainerRoomNotFound>
        <TitleRoomNotFound style={fonts.titleRoomNotFound}>Ops,sala não encontrada</TitleRoomNotFound>
        <DescriptionRoomNotFound style={fonts.descriptionRoomNotFound}>parece que a sala que você está buscando não existe, verifique se o codigo da sala está certo e tente novamente</DescriptionRoomNotFound>
        <ButtonRoomNotFound onPress={() => navigate("dashboard")}>
          <ButtonRoomNotFoundText style={fonts.buttonRoomNotFoundText}>Home</ButtonRoomNotFoundText>
        </ButtonRoomNotFound>
        {/* <LottieView style={{width: 400,height:400}}  source={"HamburgerArrow"} /> */}
      </ContainerRoomNotFound>
    )
  }

  const {
    roomId,
  } = route.params as RoomParamsType;

  const renderItem = ({item}:{item: QuestionType,index?: number}): JSX.Element => (
    <Question
      nickname={item.nickname}
      message={item.message}
      authorId={item.authorId}
      avatarUrl={item.avatarUrl}
      messageVideoUrl={item.messageVideoUrl}
      isPrivate={item.isPrivate}
    />
  )

  const keyExtractor = (item:unknown,index:number) =>`${index}-${item}`;

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
        //@ts-ignore
        renderItem={renderItem}
        showsVerticalScrollIndicator
        keyExtractor={keyExtractor}
      />
    </Container>
  );
}