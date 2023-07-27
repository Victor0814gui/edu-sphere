import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import {
  aditionalStyles,
  Container,
  Content,
  Title,
  Description,
} from './styles';
import { useModalQueueContextProvider } from '@shared/contexts/modal-queue';
import { ButtonCloseModal } from './components/button-close-modal';
import LottieView from "lottie-react-native";

export const Modal = ({
  title = "",
  description = "",
}) => {
  const animationEnterModal = useRef(new Animated.Value(0.8)).current;

  const { removeModal } = useModalQueueContextProvider();

  const animationEnter = () => {
    Animated.spring(animationEnterModal, {
      useNativeDriver: false,
      toValue: 1,
    }).start();
  }

  const animationLeave = () => {
    Animated.timing(animationEnterModal, {
      useNativeDriver: false,
      toValue: 0,
      duration: 200,
    }).start(({ finished }) => {
      if (finished) {
        removeModal();
      }
    });
  }


  useEffect(() => {
    animationEnter();
  }, [])

  return (
    <Container style={{ backgroundColor: "#11111199" }}>
      <Content
        style={{
          transform: [{
            scale: animationEnterModal
          }]
        }}
      >
        <ButtonCloseModal onPress={animationLeave} />
        <Title style={aditionalStyles.title}>{title}</Title>
        <Description style={aditionalStyles.description}>{description}</Description>
        <LottieView
          source={"Lock"}
          autoPlay
          loop={false}
          resizeMode="contain"
          style={{ height: 120, width: 120 }}
        />
      </Content>
    </Container>
  );
} 