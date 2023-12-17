import styled from "styled-components/native";
import { COLORS, FONTS } from "@shared/theme";
import { StyleSheet, Animated } from "react-native";

export const aditionalStyles = StyleSheet.create({
  switchText: {
    fontFamily: FONTS.Poppins.Medium,
  },
  buttonSingnOutText: {
    fontFamily: FONTS.Poppins.Medium,
  },
  optionsDescriptionText: {
    lineHeight: 15,
    fontFamily: FONTS.Poppins.Medium,
  },
})

export const Container = styled.View`
  flex: 1;
  padding: 12px;
`;


export const SectionSwitch = styled.TouchableOpacity<{ onMouse: boolean }>`
  flex-direction: row;
  max-width: 900px;
  width: 100%;
  padding: 12px;
  margin: 10px auto 0;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ onMouse }) => onMouse ? COLORS.grey_240 : COLORS.grey_200};
`;

export const ContainerOnMouseHover = styled.View`
`;

export const TextContainer = styled.Text`
  color: ${COLORS.grey_800};
  justify-content: center;
`;

export const ButtonSingnOut = styled.View<{ pressed: boolean }>`
  height: 40px;
  padding: 0 12px;
  border-radius: 20px;
  border-color: ${COLORS.red_500};
  background-color: ${({ pressed }) => pressed ? COLORS.red_500 : "transparent"};
  
  border-width: 2px;
  margin-left: auto;
  align-items: center;
  justify-content: center;
`;

export const ButtonSingnOutText = styled.Text<{ pressed: boolean }>`
  color: ${({ pressed }) => pressed ? COLORS.white : COLORS.red_500};
`;

export const SwitchText = styled.Text`
`;

export const OptionsDescription = styled.View`
  max-width: 900px;
  width: 100%;
  padding: 12px;
  /* margin: 5px auto; */
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.grey_200};
  border-top-width: 2px;
  border-color: ${COLORS.grey_180};
`;

export const OptionsDescriptionText = styled.Text``;