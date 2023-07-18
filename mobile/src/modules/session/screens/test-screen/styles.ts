import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { COLORS, FONTS } from "@shared/theme";


export const aditionalStyles = StyleSheet.create({
  modal:{
    maxWidth: 530,
    backgroundColor: COLORS.grey_200,
    padding: 21,
  },
  title:{
    fontFamily: FONTS.Poppins.Medium,
    fontSize: 21,
  },
  description:{
    fontSize: 16,
    fontFamily: FONTS.Poppins.Medium,
  }
})

export const Description = styled.Text`
  font-family: ${FONTS.Poppins.Medium};
  font-size: 16px;
`