import styled, { css } from "styled-components/native";
import { COLORS, FONTS } from "@shared/theme";
import { StyleSheet } from "react-native";


export const additionalStyles = StyleSheet.create({
  lessonSujectContainerContentText: {
    fontFamily: FONTS.Roboto.Medium,
    color: COLORS.grey_970,
    fontSize: 14,
  },
  lessonSujectClassroomTimeText: {
    fontFamily: FONTS.Roboto.Medium,
    color: COLORS.grey_800,
    fontSize: 12,
  },
})

export const Container = styled.View``;

export const ListLessonsSubjectContainer = styled.View`

`;
export const ListLessonsSubject = styled.FlatList`
  gap: 12px;
`;

export const LessonSujectContainer = styled.Pressable<{ isPressed: boolean, onHover: boolean }>`
  padding: 8px;
  flex-direction: row;

  ${({ onHover, isPressed }) =>
    isPressed && css` background-color: ${COLORS.grey_200}; `
    || onHover && css` background-color: ${COLORS.grey_240}; `
  }
`;

export const LessonSujectIconContainer = styled.View`
  height: 38px;
  width: 38px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;
export const LessonSujectIconContainerLeft = styled(LessonSujectIconContainer)`

`;

export const LessonSujectContainerContent = styled.View``;

export const LessonSujectIconContainerRight = styled(LessonSujectIconContainer)`
  margin-left: auto;
  background-color: ${COLORS.grey_270};
`;

export const LessonSujectContainerContentText = styled.Text``;


export const LessonSujectContainerDescriptionContent = styled.View``;
export const LessonSujectClassroomTimeText = styled.Text``;

export const ListLessonsSubjectSeparator = styled.View`
  height: 1px;
  width: 80%;
  margin: 0 auto;
  background-color: ${COLORS.grey_240};
`;