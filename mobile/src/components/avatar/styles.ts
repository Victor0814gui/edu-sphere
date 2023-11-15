import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";


const avatarSmallSize = 30;
const avatarMediumSize = 50;
const avatarBigSize = 80;

export const styles = StyleSheet.create({
  avatarSmall: {
    height: avatarSmallSize,
    width: avatarSmallSize,
    borderRadius: avatarSmallSize / 2
  },
  avatarMedium: {
    height: avatarMediumSize,
    width: avatarMediumSize,
    borderRadius: avatarMediumSize / 2
  },
  avatarBig: {
    height: avatarBigSize,
    width: avatarBigSize,
    borderRadius: avatarBigSize / 2
  },
})