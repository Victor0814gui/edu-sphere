import React,{ memo,useState } from "react";
import { Text,StyleSheet,Animated } from "react-native";
import { Header } from "../components/header";
import { Question } from "../components/question";
import { ProgressView } from "@react-native-community/progress-view";

import {
  Container,
  SubHeaderContent,
  AmountOfQuestions,
  ListQuestions,
} from "./styles";
import { COLORS, FONTS } from "../../../shared/theme";


export const Dashboard = () => {

  const [ data,setData ] = useState<number[]>([1,2,1,2,3,4,5,2,2,3,4,2,4,2,4,5,1,2,5,1,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,5,2,5,25,2,2,2,2,2,3,4,4,5,6,6,7,8,8,9,9,6,6,5,5,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]);
  return(
    <Container>
      <Header/> 
      <SubHeaderContent>
          <Text style={fonts.TitleRoom}>Sala React Q&A</Text>
          <AmountOfQuestions>
            <Text style={fonts.TitleRoomText}>42 perguntas</Text>
          </AmountOfQuestions>
      </SubHeaderContent>
      <ProgressView  
        //@ts-ignore
        isIndeterminate={true}
      />
      <ListQuestions
        data={data}
        renderItem={({item}) => (<Question/>)}        
        showsVerticalScrollIndicator
        keyExtractor={(item,index) =>`${index}-${item}`}
      />
    </Container>
  );
}

export const fonts = StyleSheet.create({
  TitleRoom:{
    color: COLORS.white,
    fontFamily: FONTS.Poppins.Bold,
    fontSize: 24,
  },
  TitleRoomText:{
    color: COLORS.grey_180,
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 14,
  },
});