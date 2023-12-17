import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { COLORS, FONTS } from "@shared/theme";


export const aditionalStyles = StyleSheet.create({
  modal: {
    maxWidth: 530,
    backgroundColor: COLORS.grey_200,
    padding: 21,
  },
  title: {
    fontFamily: FONTS.Poppins.Medium,
  },
  description: {
    fontFamily: FONTS.Poppins.Medium,
  }
})

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Content = styled.View`
  width: 480px;
  gap: 10px;
`;

export const Title = styled.Text`
  font-size: 28px;
`;

export const Description = styled.Text`
  line-height: 22px;
  font-size: 16px;
  color: ${COLORS.grey_680};
`;