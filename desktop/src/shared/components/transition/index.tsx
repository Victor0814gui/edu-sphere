import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  View,
  Animated,
  StyleSheet
} from 'react-native';

import { styles } from "./styles";

type TransitionProps = {
  children: React.ReactNode;
  duration?: number;
}

function Trasition({
  children,
  duration = 500,
}: TransitionProps) {
  const animatedScreenValue = React.useRef(new Animated.Value(20)).current;

  const animationEnter = () => {
    Animated.spring(animatedScreenValue, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }

  useFocusEffect(() => {
    animationEnter();
  })

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: animatedScreenValue }] }]}>
      {children}
    </Animated.View>
  );
}

const Transition = Trasition;

export {
  Trasition,
  Transition,
}