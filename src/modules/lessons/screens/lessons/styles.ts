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
 
`;

export const BackgroundImageContent = styled.View`
  margin: 0 auto;
  background-color: ${COLORS.grey_270};
  height: 200px;
  width: 80%;
  border-radius: 21px;
`;

export const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const SectionHeaderContainer = styled.View`
  width: 80%;
  margin: 0 auto;
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

