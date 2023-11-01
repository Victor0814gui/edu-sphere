import styled from "styled-components/native";
import { COLORS, FONTS } from "../../../theme";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.Roboto.Medium,
  }
})

export const Container = styled.View`
  height: 38px;
  border-color: ${COLORS.grey_240};
  border-bottom-width:  1px;
  border-radius: 4px;
  padding: 8px;
  margin: 3px 0;
`;

export const Text = styled.Text`
  font-size: 15px;
`;