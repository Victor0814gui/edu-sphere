import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";



export const styles = StyleSheet.create({
  heading: {
    color: COLORS.grey_800,
    fontFamily: FONTS.Roboto.Medium,
  },
  roboto: {
    fontFamily: FONTS.Roboto.Medium,
  },
  poppins: {
    fontFamily: FONTS.Poppins.Medium,
  },
  small: {
    fontSize: 12,
  },
  medium: {
    fontSize: 16,
  },
  big: {
    fontSize: 22,
  },
})