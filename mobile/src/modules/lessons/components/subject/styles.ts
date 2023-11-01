import styled, { css } from "styled-components/native";
import { COLORS, FONTS } from "@shared/theme";


import { StyleSheet, Animated } from "react-native";

export const additionalStyles = StyleSheet.create({
  subjectContainerContentTitle: {
    fontFamily: FONTS.Poppins.Medium,
    color: COLORS.grey_970,
    fontSize: 14
  },
  subjectContainerContentDescription: {
    fontFamily: FONTS.Poppins.Ligth,
    color: COLORS.grey_800,
    fontSize: 12
  },
})


export const Container = styled(Animated.View) <{ isPressed: boolean, onHover: boolean }>`
  padding: 12px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  min-height: 300px;
  width: 200px;
  margin-right: 14px;
  position: relative;

  ${({ onHover, isPressed }) =>
    isPressed && css` background-color: ${COLORS.grey_200}; `
    || onHover && css` background-color: ${COLORS.grey_240}; `
    || css` background-color: ${COLORS.grey_270} `
  }
`;

export const BackgrounImage = styled.Image`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const Content = styled.View`
  
`;

export const IconSubjectContainer = styled.View`
  margin: 0 12px;
`;

export const SubjectContainerContent = styled.View`
`;

export const SubjectContainerContentTitle = styled.Text``;
export const SubjectContainerContentDescription = styled.Text``;