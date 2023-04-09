import styled,{ css } from "styled-components/native";
import { COLORS, FONTS } from "../../../../shared/theme";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  logo:{
    marginBottom: 58,
  },
  text:{
    fontFamily: FONTS.Poppins.Medium,
  },
  errorMessageContainerText:{
    fontFamily: FONTS.Poppins.Ligth,
  },
  button:{ 
    marginTop: 12,
    minWidth: "100%"
  }
});

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  max-width: 380px;
`;

export const RedirectCreateAcountText = styled.Text`
  font-size: 16px;
  color: ${COLORS.grey_800};
  margin-top: 14px;
`;