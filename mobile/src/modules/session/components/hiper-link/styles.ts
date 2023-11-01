import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { FONTS, COLORS } from "../../../../shared/theme";



export const styles = StyleSheet.create({
  redirectCreateAcountText: {
    fontFamily: FONTS.Poppins.Medium,
  },
})
export const HiperLinkText = styled.Text`
  font-size: 16px;
  color: ${COLORS.grey_800};
  margin-top: 12px;
`;