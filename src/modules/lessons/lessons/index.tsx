import React,{useState,useRef,useEffect} from 'react';
import { Container,Box,Circle } from './styles';
import { View,Text,Button,Animated, useWindowDimensions, Pressable } from "react-native";
import { COLORS } from '../../../shared/theme';
import { useNavigation } from "@react-navigation/native";




export const Lessons = () => {
  const viewRef = useRef<View>(null);
  const animatedView = useRef(new Animated.Value(0)).current;
  const [key ,setKey] = useState('');
  const { height,width } = useWindowDimensions();
  const { navigate } = useNavigation();

  const bigScale = () => {
    Animated.spring(animatedView,{
      toValue: 300,
      useNativeDriver: true,
    }).start()
  }

  const nomalScale = () => {
    Animated.spring(animatedView,{
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }

  const smallScale = () => {
    Animated.spring(animatedView,{
      toValue: -120,
      useNativeDriver: true,
    }).start();
  }

  const _onKeyDown = ({nativeEvent}) => {
    console.log(nativeEvent.key)
    
    if(nativeEvent.key === "Control"){
      bigScale()
    }
    if(nativeEvent.key === "F"){
      nomalScale()
    }
    if(nativeEvent.key === " "){
      smallScale()
    }
    
    // console.log(viewRef.current)
    setKey(nativeEvent.key)
    
    const {
      capsLockKey = false,
      shiftKey = false,
      controlKey = false,
      optionKey = false,
      commandKey = false,
      numericPadKey = false,
      helpKey = false,
      functionKey = false,
      leftArrowKey = false,
      rightArrowKey = false,
      upArrowKey = false,
      downArrowKey = false,
    } = nativeEvent ?? {};
    capsLockKey && console.log('Key Pressed: Caps Lock!');
    shiftKey && console.log('Key Pressed: Shift Key!');
    controlKey && console.log('Key Pressed: Control Key!');
    optionKey && console.log('Key Pressed: Option Key!');
    commandKey && console.log('Key Pressed: Command Key!');
    numericPadKey && console.log('Key Pressed: NumericPad Key!');
    helpKey && console.log('Key Pressed: Help Key!');
    functionKey && console.log('Key Pressed: Function Key!');
    leftArrowKey && console.log('Key Pressed: Left Arrow!');
    rightArrowKey && console.log('Key Pressed: Right Arrow!');
    upArrowKey && console.log('Key Pressed: Up Arrow!');
    downArrowKey && console.log('Key Pressed: Down Arrow!');
    // console.log('Key Pressed: ', key);
  };

  useEffect(() => {
    viewRef?.current?.focus?.();
  }, []);

  return (
    <Pressable
      style={{flex: 1}}
      onPress={() => viewRef?.current?.focus?.()}
    >
    <Container
      ref={viewRef}
      // style={{flex: 1}}
      onMagicTap={() => viewRef?.current?.focus?.()}
      focusable={true}
      enableFocusRing={false}
      onTouchEndCapture={(e) => console.log(e)}
      validKeysDown={['Enter', 'Esc', 'rightArrow']}
      onKeyDown={_onKeyDown}
      pointerEvents={(e) =>console.log(e)}
    >
      <View
        // ref={viewRef}
        style={{flex: 1}}
        // focusable
        // enableFocusRing={true}
        // validKeysDown={['Enter', 'Esc', 'rightArrow']}
        // onKeyDown={_onKeyDown}
        // pointerEvents={(e) =>console.log(e)}
        >
      </View>

          
      <View style={{flexDirection: "row",alignSelf: "center",}}>
        <Animated.View style={{
          backgroundColor: COLORS.green_500,
          width: width/3,
          height: 130,
          borderRadius: animatedView,
          transform:[{translateY: animatedView}],
        }}>
          <Text>{key}</Text>
          <Button title="focar" onPress={() => navigate('player')} color={COLORS.red_530}/>

        </Animated.View>
        <Animated.View style={{
          backgroundColor: COLORS.green_500,
          width: width/3,
          height: 130,
          borderRadius: animatedView,
          transform:[{translateY: animatedView}],
        }}>
          <Text>{key}</Text>
        </Animated.View>
      </View>
    
      <View style={{
        position: "absolute",
        right: 0,
      }}>
      <Button title="focar" onPress={() => viewRef?.current?.focus?.()} color={COLORS.red_530}/>
      </View>
    </Container>
    </Pressable>
  );
}