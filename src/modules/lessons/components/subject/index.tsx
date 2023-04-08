import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../../../shared/theme";
import { useNavigation } from "@react-navigation/native";


import {
  additionalStyles,
  SubjectContainer,
  IconSubjectContainer,
  SubjectContainerContent,
  SubjectContainerContentTitle,
  SubjectContainerContentDescription,
} from "./styles";
import { TextInput, TouchableOpacity } from "react-native";
import { Text } from "react-native-svg";

export const Subject = () => {
  const [ onHover,setOnHover ] = useState(false);
  const [ isPressed,setIsPressed ] = useState(false);
  const {navigate}  = useNavigation();

  const handlerPress = () => {
    setIsPressed(true)

    navigate("playlistlessons")
  }
  const onPressIn = () => {
    setIsPressed(true)
  }

  const onPressOut = () => {
    setIsPressed(false)
  }


  return (
    <SubjectContainer
      onHoverIn={(e) => setOnHover(true)}
      onHoverOut={(e) => setOnHover(false)}
      onPressIn={onPressIn}
      onPress={handlerPress}
      onPressOut={onPressOut}
      onHover={onHover}
      isPressed={isPressed}
    >      
      <IconSubjectContainer>
        <Icon name="play-circle-fill" size={25} color={COLORS.grey_970} />
      </IconSubjectContainer>
      <SubjectContainerContent>
        <SubjectContainerContentTitle style={additionalStyles.subjectContainerContentTitle}>matematica</SubjectContainerContentTitle>
        <SubjectContainerContentDescription style={additionalStyles.subjectContainerContentDescription}>14 aulas</SubjectContainerContentDescription>
      </SubjectContainerContent>
      <IconSubjectContainer>
        <Icon name="local-play" size={25} color={COLORS.green_500} />
      </IconSubjectContainer>
    </SubjectContainer>
  )
}
