import styled,{ css } from "styled-components/native";
import { StyleSheet } from "react-native";
import { COLORS,FONTS } from "../../../../shared/theme";


export const styles = StyleSheet.create({
  errorMessageContainerText:{
    fontFamily: FONTS.Poppins.Ligth,
  },
});



export const ErrorMessageContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ErrorMessageContainerText = styled.Text`
  color: ${COLORS.orange_400};
  margin-left: 3px;
`;
