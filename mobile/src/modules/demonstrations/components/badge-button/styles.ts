
import styled from "styled-components/native";
import { COLORS, FONTS } from "../../../../shared/theme";

import { StyleSheet } from "react-native";


export const fonts = StyleSheet.create({
  TitleRoomText: {
    color: COLORS.grey_180,
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 14,
  },
});

type AmountOfQuestionsProps = {
  color: string;
}

export const AmountOfQuestions = styled.TouchableOpacity<AmountOfQuestionsProps>`
  background-color: ${({ color }) => color};
  height: 32px;
  margin: 4px;
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  margin-left: 7px;
`;