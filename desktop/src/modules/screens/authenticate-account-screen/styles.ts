import styled, { css } from "styled-components/native";
import { COLORS, FONTS } from "@shared/theme";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  backgroundLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    height: 345,
    width: 407
  },
  backgroundRight: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: 345,
    width: 407,
  },
  text: {
    fontFamily: FONTS.Poppins.Medium,
  },
  errorMessageContainerText: {
    fontFamily: FONTS.Poppins.Ligth,
  },
  button: {
    marginTop: 12,
    minWidth: "100%"
  }
});

export const Container = styled.View`
  flex: 1;
  padding: 0 12px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  max-width: 480px;
  /* background-color: ${COLORS.grey_240}; */
`;

export const RedirectCreateAcountText = styled.Text`
  font-size: 16px;
  color: ${COLORS.grey_800};
  margin-top: 14px;
`;


export const Footer = styled.View`
  height: 100px;
  max-width: 500px;
  align-self: center;
`;