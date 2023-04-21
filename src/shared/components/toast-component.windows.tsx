import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {
  useToastNotificaitonProvider,
  ToastContentType,
} from '../../shared/contexts/toast-notification';
import { TouchableHighlight } from 'react-native';



import { COLORS } from "../theme";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  aditionalStyles,
  Container,
  ListToastNotifications,
  IndicatorTypeToast,
  ContainerButtons,
  ContainerButtonCancel,
  ContainerButtonAccept,
} from './styles';

export const ToastItem = ({
  title,
  description,
  id,
  position,
  type,
}: ToastContentType) => {
  const animateEnterAndLeaveToastItem = useRef(new Animated.Value(-20)).current
  const animationScale = useRef(new Animated.Value(1)).current
  const { removeToastNotication } = useToastNotificaitonProvider();

  const animateEnterToastItem = () => {
    setTimeout(() => {
      animateLeaveToastItem()
    }, 5000)
    Animated.spring(animateEnterAndLeaveToastItem, {
      toValue: 20,
      useNativeDriver: true,
    }).start();
  }

  const animateLeaveToastItem = () => {
    Animated.spring(animateEnterAndLeaveToastItem, {
      toValue: 480,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        Animated.spring(animationScale, {
          toValue: 1,
          useNativeDriver: true,
        }).stop();
        removeToastNotication(id!)
      }
    })
  }

  const onPress = () => {
    Animated.timing(animationScale, {
      toValue: 0.94,
      duration: 100,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        Animated.timing(animationScale, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }).start();
      }
    });
  }

  useEffect(() => {
    animateEnterToastItem()
  }, [])

  return (
    <Pressable onPress={onPress}>
      <Animated.View style={{
        backgroundColor: COLORS.grey_270,
        padding: 12,
        maxWidth: 480,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        transform: [{ translateX: animateEnterAndLeaveToastItem },{ scale: animationScale }],
      }}>
        <IndicatorTypeToast />
        <View>
          <Text style={aditionalStyles.modalTitle}>{title}</Text>
          <Text style={aditionalStyles.modalDescription}>{description}</Text>
        </View>
        <TouchableHighlight onPress={animateLeaveToastItem}>
          <Icon
            name="highlight-remove"
            size={25}
            color={COLORS.orange_400}
          />
        </TouchableHighlight>
      </Animated.View>
    </Pressable>
  )
}

export function ToastComponent() {
  const { toastNotifications } = useToastNotificaitonProvider();
  const { width, height } = useWindowDimensions()
  const [onHover, setOnHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [flyoutIsDimissible, setFlyoutIsDimissible] = useState(true);

  if (!toastNotifications) {
    return <View />
  }

  const renderItem = ({ item }: { item: ToastContentType }) => (
    <ToastItem {...item} />
  )

  return (
    <Container>
      <ListToastNotifications<React.ElementType>
        data={toastNotifications}
        renderItem={renderItem}
        keyExtractor={({ id }: { id: string }) => id}
      />
    </Container>
  );
}