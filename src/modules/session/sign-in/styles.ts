import styled from "styled-components/native";
import { COLORS, FONTS } from "../../../shared/theme";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  logo:{
    marginBottom: 58,
  },
  text:{
    fontFamily: FONTS.Roboto.Medium
  },
});

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  justify-content: start;
  max-width: 380px;
`;

export const TextRecoveryPassword = styled.Text`
  font-size: 16px;
  color: ${COLORS.grey_800};
`;

export const TextRedirectCreateAcount = styled.Text`
  font-size: 16px;
  color: ${COLORS.grey_800};
  margin-top: 14px;
`;