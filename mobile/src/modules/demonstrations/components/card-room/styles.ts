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

export const Container = styled.Pressable<{pressed: boolean,hover:boolean}>`
  background-color: ${({pressed,hover}) => pressed 
  ?  COLORS.grey_180 
  : hover ? COLORS.grey_240 : COLORS.grey_200};
  border-radius: 8px;
  margin: 5px 10px;
  padding: 12px;
`;

export const ContainerContent = styled.View`
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

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
  margin-top: 12px;
  align-items: center;
`;

export const Duration = styled.Text`
  margin-right: 10px;
`;

export const Author = styled.Text`
  margin-right: 10px;
`;

export const Difficulty = styled.Text`
  margin-right: 10px;
`;

export const Tag = styled.View`
  padding: 7px 12px;
  background-color: ${COLORS.grey_240};
  border-radius: 4px;
  margin-left: auto;
`;

export const TagText = styled.Text``;
