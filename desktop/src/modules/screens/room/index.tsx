import React, { useState, useCallback } from "react";
import { ListRenderItem, ListRenderItemInfo, Text } from "react-native";
import { Header } from "@modules/components/header";
import { Question } from "@modules/components/question";
import { useFocusEffect } from "@react-navigation/native";
import {
  fonts,
  Container,
  SubHeaderContent,
  AmountOfQuestions,
  ListQuestions,
  ContainerRoomNotFound,
  TitleRoomNotFound,
  DescriptionRoomNotFound,
} from "./styles";
import LottieView from "lottie-react-native";
import { Transition } from "@shared/components/transition";
import { Button } from "@shared/components/button";

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
    authorId: "hnmk-cvad-asdf-asd5rt",
    avatarUrl: "https://avatars.githubusercontent.com/u/92493696?v=4",
    messageVideoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_30mb.mp4",
    isPrivate: false,
  },
  {
    nickname: "Victorguilherme0814",
    authorId: "bykork-asdf-hjk5-55hf",
    message: "Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes.",
    avatarUrl: "https://avatars.githubusercontent.com/u/92493696?v=4",
    messageVideoUrl: "http://localhost:4000/2023-02-13-21-27-16.mkv",
    isPrivate: false,
  },
  {
    nickname: "Victorguilherme0814",
    authorId: "1234-asdf-fgjkj-55hf",
    message: "Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes.",
    avatarUrl: "https://avatars.githubusercontent.com/u/92493696?v=4",
    messageVideoUrl: "http://localhost:4000/2022-08-28-09-12-22.mkv",
    isPrivate: false,
  },
  {
    nickname: "Victorguilherme0814",
    authorId: "1234-asdf234-avvtjh2-55hf",
    message: "Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes.",
    avatarUrl: "https://avatars.githubusercontent.com/u/92493696?v=4",
    messageVideoUrl: null,
    isPrivate: false,
  },
  {
    nickname: "Victorguilherme0814",
    authorId: "34cvh6-f4v5y-n67a-34vjs",
    message: "Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes.",
    avatarUrl: "https://avatars.githubusercontent.com/u/92493696?v=4",
    messageVideoUrl: null,
    isPrivate: false,
  },
]


export const Room = ({ navigation: { navigate }, route }: any) => {
  const [data, setData] = useState<QuestionType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  if (!route.params.id) {
    return (
      <Transition>
        <ContainerRoomNotFound>
          <LottieView autoPlay loop style={{ width: 400, height: 400 }} source={"Not Found"} />
          <TitleRoomNotFound style={fonts.titleRoomNotFound}>Ops,sala não encontrada</TitleRoomNotFound>
          <DescriptionRoomNotFound style={fonts.descriptionRoomNotFound}>parece que a sala que você está buscando não existe, verifique se o codigo da sala está certo e tente novamente</DescriptionRoomNotFound>
          <Button.Default onPress={() => navigate("dashboard")}>Home</Button.Default>
        </ContainerRoomNotFound>
      </Transition>
    )
  }

  useFocusEffect(() => {

    setData(questions)
    setIsLoading(true);
    // const timer = setTimeout(() => {
    // }, 400);
    // return () => {
    //   clearTimeout(timer);
    // }
  })


  const renderItem = useCallback(({ item }: any) => (
    <Question
      nickname={item.nickname}
      message={item.message}
      authorId={item.authorId}
      avatarUrl={item.avatarUrl}
      messageVideoUrl={item.messageVideoUrl}
      isPrivate={item.isPrivate}
    />
  ), [])

  const keyExtractor = (item: unknown, index: number) => `${index}-${item}`;

  return (
    <Transition>
      <Container>
        <Header roomId={route.params.id} />
        <SubHeaderContent>
          <Text style={fonts.titleRoom}>Sala React Q&A</Text>
          <AmountOfQuestions>
            <Text style={fonts.titleRoomText}>42 perguntas</Text>
          </AmountOfQuestions>
        </SubHeaderContent>
        <ListQuestions
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator
          keyExtractor={keyExtractor}
        />
      </Container>
    </Transition>
  );
}