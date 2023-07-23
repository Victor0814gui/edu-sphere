import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  Pressable,
} from 'react-native';


import { COLORS } from "@shared/theme";
import { aditionalStyles } from "../aditional-styles"
import {
  Container,
  ListToastNotifications,
  IndicatorTypeToast,
  ToastRemoveButton,
} from '../styles';
import { XCircle } from 'phosphor-react-native';
import { useToastNotificaitonProvider, ToastContentType, } from '@shared/contexts/toast-notification';
import { Flyout } from 'react-native-windows';



const nativeDriverIsTrue = false;

export const ToastItem = ({
  title,
  description,
  id,
  position,
  type,
  mode = "temporary",
}: ToastContentType) => {
  const animateEnterAndLeaveToastItem = useRef(new Animated.Value(-20)).current
  const animationScale = useRef(new Animated.Value(1)).current
  const { removeToastNotication } = useToastNotificaitonProvider();

  const animateEnterToastItem = () => {
    if (mode === "temporary") {
      setTimeout(() => {
        animateLeaveToastItem()
      }, 5000)
    }
    Animated.spring(animateEnterAndLeaveToastItem, {
      toValue: 0,
      useNativeDriver: nativeDriverIsTrue,
    }).start();
  }

  const animateLeaveToastItem = () => {
    Animated.spring(animateEnterAndLeaveToastItem, {
      toValue: 480,
      useNativeDriver: nativeDriverIsTrue,
    }).start(({ finished }) => {
      if (finished) {
        Animated.spring(animationScale, {
          toValue: 1,
          useNativeDriver: nativeDriverIsTrue,
        }).stop();
        removeToastNotication(id!)
      }
    })
  }

  const onPressOut = () => {
    Animated.timing(animationScale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: nativeDriverIsTrue,
    }).start();
  }

  const onPressIn = () => {
    Animated.timing(animationScale, {
      toValue: 0.94,
      duration: 100,
      useNativeDriver: nativeDriverIsTrue,
    }).start();
  }

  const onPress = () => { }

  useEffect(() => {
    animateEnterToastItem()
  }, [])

  return (
    <Pressable
      onPressOut={onPressOut}
      onPressIn={onPressIn}
      onPress={onPress}>
      <Animated.View style={{
        backgroundColor: COLORS.grey_270,
        padding: 12,
        maxWidth: 480,
        width: "100%",
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 51,
        transform: [{ translateX: animateEnterAndLeaveToastItem }, { scale: animationScale }],
      }}>
        <IndicatorTypeToast type={type} />
        <View>
          <Text style={aditionalStyles.modalTitle}>{title}</Text>
          {/* <Text style={aditionalStyles.modalDescription}>{description}</Text> */}
        </View>
        <ToastRemoveButton onPress={animateLeaveToastItem}>
          <XCircle size={28} color="#f2f2f2" />
        </ToastRemoveButton>
      </Animated.View>
    </Pressable>
  )
}

export function ToastComponent() {
  const { toastNotifications } = useToastNotificaitonProvider();

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
        keyExtractor={(_: any, index: number) => `${index}`}
      />
    </Container>
  );
};