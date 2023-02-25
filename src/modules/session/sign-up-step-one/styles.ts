import styled from "styled-components/native";
import { COLORS, FONTS } from "../../../shared/theme";
import { Button as ButtonPattern } from "../components/button";


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  max-width: 380px;
`;

export const SectionButtonForm = styled.View`
  flex-direction: row;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  justify-content: center;
`;

export const ButtonGoBackText = styled.Text`
  color: ${COLORS.grey_680};
`;

export const Button = styled(ButtonPattern)`
  width: 50%; 
`;