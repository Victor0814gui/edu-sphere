import React, { useEffect, useState, useRef } from 'react';
import { Animated } from 'react-native';
import {
  aditionalStyles,
  Container,
  Content,
  Title,
  Description,
} from './styles';
import { ButtonCloseModal } from './components/button-close-modal';
import LottieView from "lottie-react-native";
import { useModalQueueContextProvider } from '../../contexts/modal-queue';
import { Input } from '@modules/screens/create-room/styles';

type ModalProps = {
  title?: string;
  description?: string
}

export const Modal = ({
  title = "",
  description = "",
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const animationEnterModal = useRef(new Animated.Value(0.8)).current;
  const { removeModal } = useModalQueueContextProvider();

  const animationEnter = () => {

  }

  const animationLeave = () => {
    setIsOpen(false)
  }


  useEffect(() => {
    animationEnter();
  }, [])

  useEffect(() => {
    setIsOpen(true);

  }, [isOpen])

  return (

    <Content
      isOpen={isOpen}
      onDismiss={() => {
        setIsOpen(false);
      }}
      placement='full'
      showMode='standard'
    // style={{
    //   transform: [{
    //     scale: animationEnterModal
    //   }]
    // }}
    >
      <ButtonCloseModal onPress={animationLeave} />
      <LottieView
        source={"Lock"}
        autoPlay
        loop={false}
        resizeMode="contain"
        style={{ height: 120, width: 120 }}
      />
      <Input />
    </Content>
  );
} 