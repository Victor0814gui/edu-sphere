import styled from "styled-components/native";
import { COLORS, FONTS } from "../../../shared/theme";
import { Button as ButtonPattern } from "../components/button";

const selectAvatarImageAttributes = (props: any) => ({resizeMode: "contain"})

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SectionSelectAvatar = styled.View`
  width: 100%;
  margin: 20px;
`;

export const SectionSelectAvatarTitle = styled.Text`
  font-size: 25px;
  align-self: center;
  color: ${COLORS.grey_680};
`;

export const SelectAvatarList = styled.FlatList`
  margin: 31px auto;
  border-radius: 100px;
  max-width: 800px;
  width: 80%;
`;

export const SelectAvatarImage = styled.Image.attrs(selectAvatarImageAttributes)<{onHover: boolean}>`
  width: 110px;
  height: 110px;
  margin: 0 7px;
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