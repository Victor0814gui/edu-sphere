import styled, { css } from "styled-components/native";
import { COLORS } from "@shared/theme";


export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 21px;
`;

export const ItemStep = styled.View<{ onHover: boolean, active: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border-width: 3px;
  justify-content: center;
  align-items: center;

  ${({ active, onHover }) =>
    onHover || active ? css`
      border-color: ${COLORS.green_500};
    `
      : css`
      border-color: ${COLORS.grey_400};
    `
  }
`;

export const ProgressBar = styled.View<{ active: boolean }>`
  height: 3px;
  width: 30px;
  background-color: ${({ active }) => active ? COLORS.green_500 : COLORS.grey_400};
`;