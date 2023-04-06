import styled from "styled-components/native";
import { COLORS, FONTS } from "../../../../shared/theme";
import { Animated, StyleSheet } from "react-native";


export const aditionalStyles = StyleSheet.create({
  description:{
    fontFamily: FONTS.Poppins.Ligth,
  }
})

export  const Container = styled.View`
  flex: 1;
  position: relative;
`;


export const VideoContainerControls = styled.Pressable`
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const DescriptionContainer = styled.View`
  position: absolute;
  bottom: 50px;
  padding: 21px;
  width: 100%;
`;
export const Description = styled.Text`

`;

export const Controls = styled(Animated.View)`
  height: 120px;
  width: 70%;
  align-self: center;
  background: ${COLORS.green_500};
  position: absolute;
  bottom: 0;
  border-radius: 21px;
  align-items: center;
  justify-content: center;
`;