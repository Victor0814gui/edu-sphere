import { StyleSheet } from "react-native";
import styled, { css } from "styled-components/native";
//@ts-ignore
import AdminIconSvg from "@shared/assets/icons/admin.svg"
import { COLORS, FONTS } from "@shared/theme";


export const fonts = StyleSheet.create({
  clientNameText: {
    fontFamily: FONTS.Poppins.Medium,
  },
  clientEmailText: {
    fontFamily: FONTS.Roboto.Medium,
  },
  containerNavbarText: {
    fontFamily: FONTS.Roboto.Black,
    color: COLORS.green_500,
    marginLeft: 7,
  },
})



export const Container = styled.Pressable<{ isActive: boolean, onHover: boolean }>`
  height: 44px;
  border-radius: 22px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  align-self: stretch;
  /* padding: 0 26px; */
  background-color: ${({ isActive }) => isActive ? COLORS.green_500 : 'transparent'};
  ${({ onHover }) => onHover && css`
    transform: scale(0.98,0.98);
  `}
  margin: 5px auto;
`;


export const Label = styled.Text`
  font-size: 16px;
`;