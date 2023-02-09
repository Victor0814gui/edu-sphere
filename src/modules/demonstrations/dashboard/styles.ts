import styled from "styled-components/native";
import { FONTS,COLORS } from "../../../shared/theme";
import { StyleSheet } from "react-native";

export const fonts = StyleSheet.create({
  TitleRoom:{
    color: COLORS.white,
    fontFamily: FONTS.Poppins.Bold,
    fontSize: 24,
  },
  TitleRoomText:{
    color: COLORS.grey_180,
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 14,
  },
  headerSectionTitle:{
    fontSize: 18,
    fontFamily: FONTS.Roboto.Medium,
    marginVertical: 9,
  }
});

export const Container = styled.View`
  flex: 1;
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

export const ContainerSectionCardRoom = styled.View`
  position: relative;
`;

export const HeaderSectionTitle = styled.Text`
  margin-left: 21px;
`;

const ButtonRoomBase = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  border-radius: 18px;
  background-color: ${COLORS.grey_240};
  position: absolute;
  top: 50%;
  z-index: 1;
`;

export const ButtonBackRoom = styled(ButtonRoomBase)`

`;

export const ButtonNextRoom = styled(ButtonRoomBase)`
  right: 0;
`;
