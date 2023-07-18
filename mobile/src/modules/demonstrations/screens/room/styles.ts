import styled from "styled-components/native";
import { FONTS,COLORS } from "../../../../shared/theme";
import { StyleSheet } from "react-native";

export const fonts = StyleSheet.create({
  titleRoom:{
    color: COLORS.white,
    fontFamily: FONTS.Poppins.Bold,
    fontSize: 24,
  },
  titleRoomText:{
    color: COLORS.grey_180,
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 14,
  },
  titleRoomNotFound:{
    fontFamily: FONTS.Roboto.Medium,
  },
  descriptionRoomNotFound:{
    fontFamily: FONTS.Roboto.Medium,
  },
  buttonRoomNotFoundText:{
    fontFamily: FONTS.Roboto.Medium,
  },
});

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