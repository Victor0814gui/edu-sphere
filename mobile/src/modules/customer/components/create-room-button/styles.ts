import styled from "styled-components/native";
import { COLORS } from "@shared/theme";


const buttonSize = 62;
export const Container = styled.Pressable`
  position: absolute;
  height: ${buttonSize}px;
  width: ${buttonSize}px;
  border-radius: ${buttonSize / 2}px;
  background-color: ${COLORS.green_500};
  align-items: center;
  justify-content: center;
  bottom: 100px;
  right: 100px;
`;