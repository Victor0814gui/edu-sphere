import styled from "styled-components/native";
import { COLORS, FONTS } from "../../../theme";
import { StyleSheet } from "react-native";
import { Animated } from "react-native";

export const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 14
  },
  description: {
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 12
  }
})

export const Container = styled.Pressable`
  height: 38px;
  background-color: ${COLORS.grey_200};
  border-radius: 19px;
  margin: 3px 0;
  /* justify-content: center; */
  align-items: center;
  gap: 5px;
  padding: 0 7px;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 15px;
`;

export const Content = styled.View``;

export const Text = styled.Text`
  font-size: 15px;
`;

export const Button = styled(Animated.View)`
  background-color: ${COLORS.grey_800};
  height: 30px;
  width: 30px;
  border-radius: 15px;
`;