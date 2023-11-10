import { useState, useRef, useCallback } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "@shared/theme";
import { useNavigation } from "@react-navigation/native";


import {
  additionalStyles,
  Container,
  Content,
  BackgrounImage,
  IconSubjectContainer,
  SubjectContainerContent,
  SubjectContainerContentTitle,
  SubjectContainerContentDescription,
} from "./styles";
import { Animated, TouchableOpacity } from "react-native";
import { Text } from "react-native-svg";
import { Pressable } from "react-native";
import { Image } from "react-native";

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
  const onPressIn = useCallback(() => {
    // setIsPressed(true);
    Animated.spring(animationsElement, {
      useNativeDriver: false,
      // duration: 200,
      toValue: 15,
    }).start();
  }, [])

  const onPressOut = useCallback(() => {
    // setIsPressed(false);   
  }, [])

  const onHoverIn = useCallback(() => {
    setOnHover(true);
    Animated.spring(animationsElement, {
      useNativeDriver: false,
      // duration: 200,
      toValue: 10,
    }).start();
  }, [])

  const onHoverOut = useCallback(() => {
    setOnHover(false);
    Animated.spring(animationsElement, {
      useNativeDriver: false,
      // duration: 200,
      toValue: 0,
    }).start();
  }, [])

  return (
    <Pressable
      onPressIn={onPressIn}
      onPress={handlerPress}
      onPressOut={onPressOut}
    // onHoverIn={onHoverIn}
    // onHoverOut={onHoverOut}
    >
      <Container
        onHover={onHover}
        isPressed={isPressed}
        style={{
          transform: [{ translateY: animationsElement }]
        }}
      >
        <BackgrounImage resizeMode="cover" source={{ uri: "https://cdn.discordapp.com/attachments/1008571142858092684/1138474924902715442/volul_96891_a_hipster_chic_girl_eating_hamburger_in_space_75c5e03c-6418-4bd5-943a-ef9d664a68e0.png" }} />
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