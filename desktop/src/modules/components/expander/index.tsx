import { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Animated, Switch } from "react-native";
import { COLORS } from "@shared/theme";
import { useNavigation } from "@react-navigation/native";
import {
  aditionalStyles,
  Container,
  TextContainer,
  ButtonSingnOut,
  ButtonSingnOutText,
  SectionSwitch,
  ContainerOnMouseHover,
  SwitchText,
  OptionsDescription,
  OptionsDescriptionText,
} from "./styles";


type ExpanderProps = {
  label: string;
  children?: React.ReactNode;
}

export function Expander({ label,children }: ExpanderProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [onMouse, setOnMouse] = useState(false);
  //const [expanded, setExpanded] = useState(false);
  
  const heightValue = useRef(new Animated.Value(0)).current;

  const handleLayout = (event:any) => {
    const { height } = event.nativeEvent.layout;
    heightValue.setValue(isEnabled ? height : 0);
  };

  const handlePress = () => {
    setIsEnabled(!isEnabled);
    Animated.timing(heightValue, {
      toValue: isEnabled ? 0 : 200,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyle = {
    height: heightValue,
  };

  return (
    <ContainerOnMouseHover
      onLayout={handleLayout} 
    //@ts-ignore
      onMouseEnter={() => setOnMouse(true)}
      onMouseLeave={() => setOnMouse(false)}>
      <SectionSwitch onMouse={onMouse} onPress={handlePress}>
        <>
          <SwitchText style={aditionalStyles.switchText}>{label}</SwitchText>
          <Switch
            trackColor={{ false: COLORS.grey_180, true: COLORS.green_500 }}
            thumbColor={"#f4f3f4"}
            onValueChange={handlePress}
            value={isEnabled}
          />
        </>
      </SectionSwitch>
      {isEnabled && children}
    </ContainerOnMouseHover>
  )
}
