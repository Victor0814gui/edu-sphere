import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { COLORS, FONTS } from "@shared/theme";

export const font = StyleSheet.create({
  buttonText: {
    fontFamily: FONTS.Roboto.Medium,
  }
})

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  height: 42px;
  margin-bottom: 21px;
`;