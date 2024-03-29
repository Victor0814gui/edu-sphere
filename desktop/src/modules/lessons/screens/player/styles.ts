import styled from "styled-components/native";
import { COLORS, FONTS } from "@shared/theme";
import { StyleSheet } from "react-native";

export const fonts = StyleSheet.create({
  titleRoom: {
    color: COLORS.white,
    fontFamily: FONTS.Poppins.Bold,
    fontSize: 24,
  },
  titleRoomText: {
    color: COLORS.grey_180,
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 14,
  },
  titleRoomNotFound: {
    fontFamily: FONTS.Roboto.Medium,
  },
  descriptionRoomNotFound: {
    fontFamily: FONTS.Roboto.Medium,
  },
  buttonRoomNotFoundText: {
    fontFamily: FONTS.Roboto.Medium,
  },
});


export const Container = styled.View`
  flex: 1;
`;


export const ContainerRoomNotFound = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const TitleRoomNotFound = styled.Text`
  color: ${COLORS.grey_970};
  font-size: 18px;
`;

export const DescriptionRoomNotFound = styled.Text`
  color: ${COLORS.grey_680};
  max-width: 480px;
  text-align: center;
  margin: 12px 0;
`;

export const ButtonRoomNotFound = styled.TouchableHighlight`
  background-color: ${COLORS.green_500};
  border-radius: 21px;
  padding: 12px 16px;
  min-width: 130px;
`;
export const ButtonRoomNotFoundText = styled.Text`
  color: ${COLORS.grey_180};
  align-self: center;
`;


export const Content = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding-top: 41px;
  justify-content: flex-end;
  padding-bottom: 40px;
`;

export const Card = styled.View`
  height: 100px;
  width: 300px;
  border-radius: 21px;
  opacity: 0.6;
  background-color: ${COLORS.grey_200};
  margin: 7px 0;
`;

export const DescriptionLesson = styled.Text`
  font-size: 16px;
  width: 100%;
  padding: 21px;
`;

export const Controls = styled.View`
  flex-direction: row;
  align-items: center
`;
