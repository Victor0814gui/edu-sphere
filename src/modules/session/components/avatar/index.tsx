import { useState,useRef } from "react";
import { Animated,View,Pressable,PressableProps } from "react-native";
import { COLORS } from "../../../../shared/theme";


type AvatarProps = PressableProps & {
  isSelected: boolean;
  item: string;
}


export const Avatar = ({item,isSelected = false,...rest}: AvatarProps) => {
  const scaleAnimatedRef = useRef(new Animated.Value(1)).current;

  const onMouseEnter = () => {
    Animated.spring(scaleAnimatedRef,{
      toValue: 0.9,
      useNativeDriver: true,
      velocity:{ x: 2, y: 2 },
      speed: 21
    }).start()
  }
  const onMouseLeave = () => {
    Animated.spring(scaleAnimatedRef,{
      toValue: 1,
      useNativeDriver: true,
      velocity:{ x: 2, y: 2 },
      speed: 21
    }).start()
  }

  const pressedAnimationAvatar = () => {
    Animated.spring(scaleAnimatedRef,{
      toValue: 1,
      useNativeDriver: true,
      speed: 300
    }).start(({finished}) => {
      if(finished){
        Animated.spring(scaleAnimatedRef,{
          toValue: 0.9,
          useNativeDriver: true,
          speed: 300
        }).start()
      }
    })
  }

  const onPress = () => {
    pressedAnimationAvatar();
  }

  return (
    //@ts-ignore 
    <View onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
      <Pressable
        {...rest}
        onPress={onPress}
      >
        <Animated.Image 
          style={[{
            width: 110,
            height: 110,
            marginHorizontal: 7,
            transform:[{scale:scaleAnimatedRef}],
            borderRadius: 55,
          },isSelected && {
            borderWidth: 3,
            borderColor: COLORS.green_500,
          }]}
          source={!!item ? {uri: item} : require("../../assets/images/Multiavatar-Big-Brother.png")}
        />
      </Pressable>
    </View>
  )
}