import styled,{ css } from "styled-components/native";
import { COLORS,FONTS } from "../../../../shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  questionContentText:{
    fontSize: 16,
    fontFamily: FONTS.Roboto.Regular,
  },
  questionUserNameProfile:{
    fontFamily: FONTS.Roboto.Regular,
    fontSize: 14,
    color: COLORS.grey_680,
  },
});

export const ContainerQuestion = styled.View`
  min-height: 142px;
  width: 100%;
  border-radius: 8px;
  background-color: ${COLORS.grey_240};
  margin: 5px 0;
  padding: 21px;
`;

export const ContentAuthorInformationAndEditOption  = styled.View`
  margin-top: auto;
  justify-content: space-between;
  flex-direction: row;
`;

export const SectionContent  = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CircleIconProfile = styled.Image.attrs((props) => ({
  resizeMode:"cover",
}))`
  width: 38px;
  height: 38px;
  border-radius: 19px;
  background-color: ${COLORS.green_500};
  margin-right: 4px;
`;


export const ButtonIconContainer = styled.TouchableHighlight<{onHover: boolean}>`
  width: 32px;
  height: 32px;
  ${({onHover}) => onHover && css`
    background-color: ${COLORS.grey_400}
  `};
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
`;

export const VisualizationIcons = styled.Image`
  height: 24px;
  width: 24px;
`;
