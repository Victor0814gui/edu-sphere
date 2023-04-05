import styled from "styled-components/native"
import { COLORS } from "../../../../shared/theme";
import { Animated,Dimensions } from "react-native";


export const Container  = styled.View`
  flex: 1;
`;


export const Box = styled.View`
  height: 230px;
  width: 230px;
  border-radius: 28px;
  background-color: ${COLORS.green_500};
`;

export const Circle = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${COLORS.red_500};
  position: absolute;
`;