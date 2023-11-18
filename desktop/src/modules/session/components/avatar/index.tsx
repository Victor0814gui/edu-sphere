import { useState, useRef, useCallback } from "react";
import { Animated, View, Pressable, PressableProps } from "react-native";
import { COLORS } from "../../../../shared/theme";


type AvatarProps = PressableProps & {
  isSelected: boolean;
  item: string;
}


export const Avatar = ({ item, isSelected = false, ...rest }: AvatarProps) => {
  const scaleAnimatedRef = useRef(new Animated.Value(1)).current;

  const onMouseEnter = useCallback(() => {
    Animated.spring(scaleAnimatedRef, {
      toValue: 0.9,
      useNativeDriver: true,
      velocity: { x: 2, y: 2 },
      speed: 21
    }).start()
  }, [scaleAnimatedRef])

  const onMouseLeave = useCallback(() => {
    Animated.spring(scaleAnimatedRef, {
      toValue: 1,
      useNativeDriver: true,
      velocity: { x: 2, y: 2 },
      speed: 21
    }).start()
  }, [scaleAnimatedRef])

  const pressedAnimationAvatar = useCallback(() => {
    Animated.spring(scaleAnimatedRef, {
      toValue: 1,
      useNativeDriver: true,
      speed: 300
    }).start(({ finished }) => {
      if (finished) {
        Animated.spring(scaleAnimatedRef, {
          toValue: 0.9,
          useNativeDriver: true,
          speed: 300
        }).start()
      }
    })
  }, [scaleAnimatedRef])

  const onPress = () => {
    pressedAnimationAvatar();
  }

  return (
    //@ts-ignore 
    <Pressable
      {...rest}
      onPress={onPress}
      onHoverIn={onMouseEnter}
      onHoverOut={onMouseLeave}
    >
      <Animated.Image
        style={[{
          width: 110,
          height: 110,
          marginHorizontal: 7,
          transform: [{ scale: scaleAnimatedRef }],
          borderRadius: 55,
        }, isSelected && {
          borderWidth: 3,
          borderColor: COLORS.green_500,
        }]}
        source={!!item ? { uri: item } : require("../../assets/images/Multiavatar-Big-Brother.png")}
        onLoadStart={() => { }}
        onLoadEnd={() => { }}
      />
    </Pressable>
  )
}