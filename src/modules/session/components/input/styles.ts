import styled from "styled-components/native";
import { COLORS, FONTS } from "../../../../shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textInput:{
    fontFamily: FONTS.Poppins.Medium,
  },
});

export const InputContainerAndLabel = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

export const InputLabelText = styled.Text`
  font-size: 16px;
  margin-top: 7px;
`;

export const ContainerStyleTextInput = styled.View<{onHover: boolean}>`
  border-width: 2px;
  border-color: ${({onHover}) => onHover ? COLORS.green_500 : COLORS.grey_270};
  height: 48px;
  border-radius: 41px;
  width: 100%;
  min-width: 320px;
  margin-top: 7px;
  flex-direction: row;
  background-color: ${COLORS.grey_270};
`;

export const IconContainer = styled.View`
  height: 48px;
  width: 48px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  border-radius: 12px;
  font-size: 16px;
  border-color: ${COLORS.grey_270};
  background-color: ${COLORS.grey_270};
`;