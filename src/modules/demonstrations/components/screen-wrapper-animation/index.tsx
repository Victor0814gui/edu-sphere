import React from 'react';
import {
  View,
  Animated,
  StyleSheet
} from 'react-native';

type ScreenAnimationWrapperPrpos = {
  children: React.ReactNode;
  duration?: number;
}

export function ScreenAnimationWrapper({
  children,
  duration = 500,
}: ScreenAnimationWrapperPrpos) {
  const animatedScreenValue = React.useRef(new Animated.Value(0.9)).current;

  const animationEnter = () => {
    Animated.spring(animatedScreenValue, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  }

  React.useEffect(() => {
    animationEnter();
  }, [])

  return (
    <Animated.View style={[styles.container, { transform: [{ scale: animatedScreenValue }] }]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})