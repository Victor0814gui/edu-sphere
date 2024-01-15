import React, { useCallback } from 'react';
import { View, Animated, ActivityIndicator } from 'react-native';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

import { styles } from "./styles";
import { COLORS } from '@shared/theme';
import { Modal } from '../modal';

type TransitionProps = {
  children: React.ReactNode;
  duration?: number;
}

function Trasition({
  children,
  duration = 500,
}: TransitionProps) {
  const animatedScreenValue = React.useRef(new Animated.Value(20)).current;
  const isScreenFocused = useIsFocused();

  const animationEnter = useCallback(() => {
    Animated.spring(animatedScreenValue, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }, [])

  useFocusEffect(() => {
    animationEnter();
  })

  if (isScreenFocused) {
    return (
      <Animated.View style={[styles.container, { transform: [{ translateY: animatedScreenValue }] }]}>
        {children}
        <Modal />
      </Animated.View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={42} color={COLORS.green_500} />
      </View>
    );
  }
}

const Transition = Trasition;

export {
  Trasition,
  Transition,
}