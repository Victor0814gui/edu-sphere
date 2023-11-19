import { DefaultTheme, Theme } from '@react-navigation/native';
import { COLORS } from "../theme";



export const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.grey_200,
  },
};