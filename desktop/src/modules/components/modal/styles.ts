import styled from "styled-components/native";
import { Animated, StyleSheet } from "react-native";
import { COLORS, FONTS } from "@shared/theme";


export const aditionalStyles = StyleSheet.create({
  title: {
    fontFamily: FONTS.Poppins.Bold,
  },
  description: {
    fontFamily: FONTS.Poppins.Bold,
  }
});

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  flex: 1;
  align-items: center;
  justify-content: center;
`;


export const Content = styled(Animated.View)`
  width: 500px;
  padding: 21px;
  border-radius: 12px;
  background-color: ${COLORS.grey_180};
`;

export const Title = styled.Text`
  font-size: 26px;
  max-width: 90%;
  color: #f2f2f2
`;
export const Description = styled.Text`
  font-size: 14px;
  color: #d9d9d9;
  margin-top: 18px;
`;