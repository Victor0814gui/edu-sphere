import { useState, useRef } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../../../shared/theme";
import { useNavigation } from "@react-navigation/native";


import {
  additionalStyles,
  Container,
  Content,
  IconSubjectContainer,
  SubjectContainerContent,
  SubjectContainerContentTitle,
  SubjectContainerContentDescription,
} from "./styles";
import { Animated, TouchableOpacity } from "react-native";
import { Text } from "react-native-svg";
import { Pressable } from "react-native";

export const Subject = (props: {
  premiun: boolean;
  title: string;
  amountLessons: number;
}) => {
  const [onHover, setOnHover] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const { navigate } = useNavigation();
  const animationsElement = useRef(new Animated.Value(0)).current;

  const handlerPress = () => {
    // setIsPressed(true)

    navigate("playlistlessons")
  }
  const onPressIn = () => {
    // setIsPressed(true);
    Animated.spring(animationsElement, {
      useNativeDriver: false,
      // duration: 200,
      toValue: 15,
    }).start();
  }

  const onPressOut = () => {
    // setIsPressed(false);   
  }

  const onHoverIn = () => {
    setOnHover(true);
    Animated.spring(animationsElement, {
      useNativeDriver: false,
      // duration: 200,
      toValue: 10,
    }).start();
  }
  const onHoverOut = () => {
    setOnHover(false);
    Animated.spring(animationsElement, {
      useNativeDriver: false,
      // duration: 200,
      toValue: 0,
    }).start();
  }

  return (
    <Pressable
      onPressIn={onPressIn}
      onPress={handlerPress}
      onPressOut={onPressOut}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
    >
      <Container
        onHover={onHover}
        isPressed={isPressed}
        style={{
          transform: [{ translateY: animationsElement }]
        }}
      >
        <Content>
          <IconSubjectContainer>
            <Icon name="play-circle-fill" size={25} color={COLORS.grey_970} />
          </IconSubjectContainer>
          <SubjectContainerContent>
            <SubjectContainerContentTitle style={additionalStyles.subjectContainerContentTitle}>{props.title}</SubjectContainerContentTitle>
            <SubjectContainerContentDescription style={additionalStyles.subjectContainerContentDescription}>{props.amountLessons} aulas</SubjectContainerContentDescription>
          </SubjectContainerContent>
          <IconSubjectContainer>
            {props.premiun ?? <Icon name="local-play" size={25} color={COLORS.green_500} />}
          </IconSubjectContainer>
        </Content>
      </Container>
    </Pressable>
  )
}