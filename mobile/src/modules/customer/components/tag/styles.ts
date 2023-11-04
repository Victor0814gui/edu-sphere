import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { COLORS, FONTS } from "@shared/theme";


export const additionalStyles = StyleSheet.create({
  text: {
    fontFamily: FONTS.Poppins.Medium
  },
})
type TagProps = {
  type: "green" | "orange" | "red" | "grey";
}

const tagColor = {
  green: COLORS.green_500,
  orange: COLORS.orange_400,
  red: COLORS.red_500,
  grey: COLORS.grey_680,
}

export const Container = styled.View<TagProps>`
  border-radius: 21px;
  height: 24px;
  padding: 0 16px;
  align-items: center;
  justify-content: center;
  /* border-width: 1px; */
  background-color: ${({ type }) => tagColor[type]};
`;

export const Text = styled.Text<TagProps>`
  /* color: ${({ type }) => tagColor[type]}; */
  color: ${COLORS.grey_180};
`;