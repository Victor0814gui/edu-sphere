import styled from "styled-components/native";
import { COLORS, FONTS } from "../../../../shared/theme";
import { PlatformColor } from "react-native";

export const ContainerButton = styled.TouchableHighlight<{onHover:boolean}>`
  width: 100%;
  height: 42px;
  margin: 4px 0;
  border-radius: 12px;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  background-color: ${({onHover}) => onHover ? COLORS.green_390 : COLORS.green_500} ;
`;

export const ContainerButtonText = styled.Text`
  font-size: 16px;
  color: ${COLORS.grey_120};
`;