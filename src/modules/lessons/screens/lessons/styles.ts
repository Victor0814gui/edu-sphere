import styled from "styled-components/native"
import { COLORS, FONTS } from "../../../../shared/theme";
import { Animated,Dimensions,StyleSheet } from "react-native";

export const additionalStyles = StyleSheet.create({
  sectionHeaderContainerLeftText:{
    fontFamily: FONTS.Poppins.Medium,
    fontSize: 21,
  },
  subjectContainerContentTitle:{
    fontFamily: FONTS.Poppins.Medium,
    color: COLORS.grey_970,
    fontSize: 14
  },
  subjectContainerContentDescription:{
    fontFamily: FONTS.Poppins.Ligth,
    color: COLORS.grey_800,
    fontSize: 12
  },
})

export const Container  = styled.ScrollView`
  flex: 1;
  `;

export const BackgroundImageContainer = styled.View`
  margin-top: 43px;
  height: 330px;
  border-radius: 21px;
  width: 100%;
  background-color: ${COLORS.grey_270};
  align-items: flex-end;
  justify-content: flex-start;
  padding: 21px;
  flex-direction: row;
  gap: 12px;
`;

export const Button = styled.View`
  height: 42px;
  padding: 0 32px;
  background-color: ${COLORS.green_500};
  width: 200px;
  border-radius: 21px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${COLORS.grey_270};
`;

export const BackgroundImageContent = styled.View`
  margin: 0 auto;
  background-color: ${COLORS.grey_270};
  height: 200px;
  width: 100%;
`;

export const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const SectionHeaderContainer = styled.View`
  padding: 21px 0;
  flex-direction: row;

`;

export const SectionHeaderContainerLeftText = styled.Text`

`;

export const ListSubjectsContainer = styled.View`
  width: 100%;
  background-color: ${COLORS.grey_180};
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 21px;
  justify-content: center;
`;

