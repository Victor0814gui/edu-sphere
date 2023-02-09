import React,{ memo,useState,useRef,useCallback } from "react";
import { Text,FlatList,StyleSheet,SectionList } from "react-native";
import { Header } from "../components/header";
import { Question } from "../components/question";
import { ProgressView } from "@react-native-community/progress-view";

import {
  fonts,
  Container,
  SubHeaderContent,
  AmountOfQuestions,
  ContainerSectionCardRoom,
  HeaderSectionTitle,
  ButtonBackRoom, 
  ButtonNextRoom, 
} from "./styles";
import { COLORS, FONTS } from "../../../shared/theme";
import { artyChat } from "../assets/animations";
import { CardRoom } from "../components/card-room";

type CardType = {
  title: string;
  avatarUrl: string;
  nickname: string;
  tags: string[];
}

type CardSectionType = {
  title: string;
  data: CardType[];
}

const card = {
  title: "Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes.",
  avatarUrl: "https://avatars.githubusercontent.com/u/92493696?v=4",
  nickname: "victor0814gui",
  tags: ["#reactjs","#nodejs"],
}

const cardSection: CardSectionType = {
  title: "#Node",
  data: [card,card,card,card,card,card,card]
}

const Data = [cardSection];
// new Array(30).fill(cardSection);

type RenderSectionListProps = {
  section:{
    title: string;
    data: CardType[];
  }
}

const RenderSectionList = ({section: {title,data: itemsData}}:RenderSectionListProps) => {
  console.log("[RenderSectionList]-atualizou")
  const [ index,setIndex ] = useState(0)
  const horizontalListRef = useRef<FlatList | null>(null);
  
  const nextIndexList = useCallback((indexTotal: number) => {
    if( index + 1 <indexTotal){
      setIndex(index + 1)
      horizontalListRef.current?.scrollToIndex({index: index + 1})
    }
  },[index]);
  
  const backIndexList = useCallback(() => {
    if(index > 0){
      setIndex(index - 1)
      horizontalListRef.current?.scrollToIndex({index: index - 1})
    }
  },[index]);

  return (
    <>
    <ContainerSectionCardRoom>
      <HeaderSectionTitle style={fonts.headerSectionTitle}>{title}</HeaderSectionTitle>
      <ButtonBackRoom onPress={backIndexList}/>
      <FlatList
        ref={horizontalListRef}
        data={itemsData}
        renderItem={({item}) => <CardRoom {...item}/>}
        keyExtractor={(_,index) => index.toString() + _.nickname}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
      <ButtonNextRoom onPress={() => nextIndexList(itemsData.length)}/>
    </ContainerSectionCardRoom>
    </>
  )
}

export const Dashboard = () => {

  const [ data,setData ] = useState<CardSectionType[]>(Data);
  return(
    <Container>
      <SubHeaderContent>
        <Text style={fonts.TitleRoom}>Sala React Q&A</Text>
        <AmountOfQuestions>
          <Text style={fonts.TitleRoomText}>42 perguntas</Text>
        </AmountOfQuestions>
      </SubHeaderContent>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>null}
        renderSectionHeader={({section}) => <RenderSectionList section={section}/>}
      />
    </Container>
  );
}