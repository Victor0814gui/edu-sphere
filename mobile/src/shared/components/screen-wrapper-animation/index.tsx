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
  const animatedScreenValue = React.useRef(new Animated.Value(20)).current;

  const animationEnter = () => {
    Animated.spring(animatedScreenValue, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }

  React.useEffect(() => {
    animationEnter();
  }, [])

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: animatedScreenValue }] }]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})