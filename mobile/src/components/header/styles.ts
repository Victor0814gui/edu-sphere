import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";



export const styles = StyleSheet.create({
  container: {
    height: 78,
    paddingVertical: 12,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    gap: 16,
  },
  actions: {
    flexDirection: "row",
    marginLeft: "auto",
  },
})