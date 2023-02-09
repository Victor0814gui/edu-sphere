import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { COLORS,FONTS } from "../../../../shared/theme";

export const font = StyleSheet.create({
  buttonText:{
    fontFamily: FONTS.Roboto.Medium,
  }
})

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  height: 42px;
  margin-bottom: 21px;
`;

export const ViewContainerOnHover = styled.View``;

export const Button = styled.TouchableOpacity`
  border-width: 2px;
  border-color: ${COLORS.green_500};
  height: 40px;
  margin: 4px;
  border-radius: 20px;
  flex-direction: row;
  margin-bottom: 21px;
`;

export const ButtonCopyRoomCode = styled(Button)<{onHover: boolean}>`
  margin-left: auto;
  align-items: center;
  border-color: ${({onHover}) => onHover ? COLORS.green_400 : COLORS.green_500};
`;

export const CircleIconCopy = styled.View<{onHover: boolean}>`
  width: 38px;
  height: 38px;
  border-radius: 19px;
  background-color: ${({onHover}) => onHover ? COLORS.green_400 : COLORS.green_500};
  align-items: center;
  justify-content: center;
`;

export const CircleIconImage = styled.Image`
  height: 25px;
  width: 25px;
`;

export const ButtonCopyRoomCodeText = styled.Text<{onHover: boolean}>`
  color: ${({onHover}) => onHover ? COLORS.green_400 : COLORS.green_500};
  margin: 0 16px;
`;