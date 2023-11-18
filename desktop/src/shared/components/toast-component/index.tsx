import React, { useCallback, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  Pressable,
} from 'react-native';


import { aditionalStyles } from "../aditional-styles"
import {
  Container,
  ListToastNotifications,
  IndicatorTypeToast,
  ToastRemoveButton,
} from '../styles';
import { XCircle } from 'phosphor-react-native';
import { ToastContentType, useToastNotificationProvider } from '../../contexts/toast-notification';
import { COLORS } from '../../theme';



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
  const { removeToastNotification } = useToastNotificationProvider();

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
        removeToastNotification(id!)
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
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
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
  const { toastNotifications } = useToastNotificationProvider();

  if (!toastNotifications) {
    return <View />
  }

  const renderItem = useCallback(({ item }: { item: ToastContentType }) => (
    <ToastItem {...item} />
  ), [])

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