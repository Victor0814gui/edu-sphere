import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  input: {
    height: 42,
    backgroundColor: COLORS.grey_240,
    marginBottom: 10,
    borderRadius: 21,
    paddingHorizontal: 12,
    color: COLORS.grey_800,
    fontFamily: FONTS.Poppins.Medium,
  },
  item: {
    gap: 12,
    marginHorizontal: 7,
    alignItems: "center",
    backgroundColor: COLORS.grey_240,
    padding: 5,
  }
})