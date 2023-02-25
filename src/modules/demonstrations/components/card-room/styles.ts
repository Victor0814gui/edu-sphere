import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { COLORS, FONTS } from "../../../../shared/theme";

export const font = StyleSheet.create({
  title:{
    fontFamily: `${FONTS.Roboto.Medium}`,
    lineHeight: 16,
    fontSize: 14,
  },
  tagText:{
    fontFamily: `${FONTS.Roboto.Medium}`,
  },
  nickName:{
    fontFamily: `${FONTS.Roboto.Medium}`,
    fontSize: 14,
    color: COLORS.grey_480,
  },
  progressIndicator:{
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "50%",
  },
})

export const Container = styled.Pressable`
  max-width: 340px;
  background-color: ${COLORS.grey_200};
  border-radius: 8px;
  margin: 0 5px;
  padding: 12px;
`;

export const ContainerContent = styled.View<{pressed: boolean}>`
  opacity: ${({pressed}) => pressed ? 0.7 : 1};
`;

export const Title = styled.Text`
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProfileAvatar = styled.Image`
  width: 27px;
  height: 27px;
  border-radius: 14px;
  margin-right: 8px;
`;
export const NickName = styled.Text``;

export const ContainerTags = styled.View`
  margin-left: auto;
  flex-direction: row;
  gap: 12px;

`;

export const TagText = styled.Text`
  color: ${COLORS.green_500};
  margin: 0 2px;
`;