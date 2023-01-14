import styled from "styled-components/native";
import { FONTS,COLORS } from "../../../shared/theme";
import { StyleSheet } from "react-native";


export const Container = styled.View`
  flex: 1;
  padding: 21px;
  background-color: ${COLORS.grey_180};
`;

export const SubHeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 21px;
`;

export const AmountOfQuestions = styled.TouchableOpacity`
  background-color: ${COLORS.green_500};
  height: 32px;
  margin: 4px;
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 7px;
  margin-left: 12px;
`;

export const ListQuestions = styled.FlatList`
  border-radius: 8px;
  max-width: 900px;
  margin: 5px auto;
`;
