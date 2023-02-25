import { useState,useRef } from "react";
import { Text,Button, TouchableHighlightProps } from "react-native";
import {
  styles,
  ContainerQuestion,
  ContentAuthorInformationAndEditOption,
  SectionContent,
  CircleIconProfile,
  ButtonIconContainer,
  VisualizationIcons,
} from "./styles";

import { defaultAvatar } from "../../assets/images";

import Video from 'react-native-video';

import { 
  checkmarkCircle,
  excluir,
  messages,
} from  "../../assets/icons";
import { QuestionType } from "../../room";
import { VideoPlayer } from "../video-player";

const ButtonIcon = ({icon,...rest}: any & TouchableHighlightProps) => {
  const [ onHover,setOnHover ] = useState(false);
  return (
    <ButtonIconContainer 
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      onHover={onHover} {...rest}>
      <VisualizationIcons source={icon} />
    </ButtonIconContainer>
  )
}

export function Question(props:QuestionType){
  const [ isFullScreen,setIsFullScreen ] = useState(false);
  const videoRef = useRef<Video>(null)

  return  (
    <ContainerQuestion>
      <Text style={styles.questionContentText}>{props.message}</Text>
      {props.messageVideoUrl && <VideoPlayer messageVideoUrl={props.messageVideoUrl} />}
      <ContentAuthorInformationAndEditOption>
        <SectionContent>
          <CircleIconProfile source={!props.avatarUrl ? defaultAvatar :{uri:props.avatarUrl}}/>
          <Text style={styles.questionUserNameProfile}>{props.nickname}</Text>          
        </SectionContent>
        <SectionContent>
          <ButtonIcon onPress={() => {}} icon={checkmarkCircle} />
          <ButtonIcon onPress={() => {}} icon={excluir} />
          <ButtonIcon onPress={() => {}} icon={messages} />
        </SectionContent>
      </ContentAuthorInformationAndEditOption>
    </ContainerQuestion>
  )
}