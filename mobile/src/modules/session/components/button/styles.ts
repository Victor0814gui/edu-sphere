import styled from "styled-components/native";
import { COLORS, FONTS } from "../../../../shared/theme";
import { Platform,TouchableHighlight } from "react-native";
import { RectButton } from "react-native-gesture-handler";
const mobile = Platform.OS === "android";


export const ContainerButton = styled(mobile ? RectButton : TouchableHighlight)<{onHover:boolean}>`
  width: 100%;
  height: 42px;
  margin: 4px 0;
  border-radius: 21px;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  background-color: ${({onHover}) => onHover ? COLORS.green_390 : COLORS.green_500} ;
`;

export const ContainerButtonText = styled.Text`
  font-size: 16px;
  color: ${COLORS.grey_120};
`;