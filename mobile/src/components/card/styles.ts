import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../theme";


export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width - 32,
    // alignItems: 'center',
    // justifyContent: "flex-start",
    padding: 16,
    backgroundColor: COLORS.grey_240,
    marginVertical: 4,
    gap: 12,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "row",
    gap: 12,
  },
  nickname: {
    color: COLORS.grey_800,
  },
  section: {
    gap: 12,
  },
  title: {
    color: COLORS.grey_800,
  },
  description: {
    color: COLORS.grey_800,
  },
  footer: {},
})