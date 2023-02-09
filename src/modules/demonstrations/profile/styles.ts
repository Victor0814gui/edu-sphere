import styled from "styled-components/native";
import { COLORS,FONTS } from "../../../shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  switchText:{
    fontFamily: FONTS.Poppins.Medium,
  },
  optionsDescriptionText:{
    lineHeight: 15,
    fontFamily: FONTS.Poppins.Medium,
  },
})

export const Container = styled.View`
  flex: 1;
  padding: 12px;
`;


export const SectionSwitch = styled.TouchableHighlight<{onMouse:boolean}>`
  flex-direction: row;
  max-width: 900px;
  width: 100%;
  padding: 12px;
  margin: 5px auto;
  align-items: center;
  justify-content: space-between;
  background-color: ${({onMouse}) => onMouse ? COLORS.grey_240 : COLORS.grey_200};
`;

export const ContainerOnMouseHover = styled.View`
`;

export const TextContainer = styled.Text`
  color: ${COLORS.grey_800};
  justify-content: center;
`;

export const SwitchText = styled.Text`
`;

export const OptionsDescription = styled.View`
  max-width: 900px;
  width: 100%;
  padding: 12px;
  margin: 5px auto;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.grey_200};
`;

export const OptionsDescriptionText = styled.Text``;