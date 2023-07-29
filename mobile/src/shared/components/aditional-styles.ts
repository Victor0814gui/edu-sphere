import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "@shared/theme";

export const aditionalStyles = StyleSheet.create({
  containerTitleFont: {
    fontFamily: FONTS.Roboto.Medium,
  },
  containerDescription: {
    fontFamily: FONTS.Roboto.Regular,
  },
  modalTitle: {
    fontSize: 16,
    fontFamily: FONTS.Roboto.Medium,
    color: COLORS.grey_800,
  },
  modalDescription: {
    fontSize: 14,
    fontFamily: FONTS.Roboto.Regular,
    color: COLORS.grey_800,
  },
  containerButtonCancelText: {
    fontFamily: FONTS.Roboto.Medium,
    color: COLORS.grey_800,
  },
  containerButtonAcceptText: {
    color: COLORS.grey_200,
    fontFamily: FONTS.Roboto.Medium,
  },
});