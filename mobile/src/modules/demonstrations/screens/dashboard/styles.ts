import styled from "styled-components/native";
import { FONTS, COLORS } from "../../../../shared/theme";
import { StyleSheet, Platform, Animated, Pressable, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler"

const mobile = Platform.OS === "android";

export const fonts = StyleSheet.create({
  TitleRoom: {
    color: COLORS.white,
    fontFamily: FONTS.Poppins.Bold,
    fontSize: 24,
  },
  TitleRoomText: {
    color: COLORS.grey_180,
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 14,
  },
  contentContainerListEmptyText: {
    fontSize: 16,
    fontFamily: FONTS.Poppins.Medium,
    marginVertical: 9,
  },
  headerSectionTitle: {
    fontSize: 18,
    fontFamily: FONTS.Roboto.Medium,
    marginVertical: 9,
  }
});

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.grey_180};
`;

export const SubHeaderContent = styled.View`
  flex-direction: row;
  margin-left: 4px;
  align-items: center;
  margin-bottom: 21px;
  margin-top: 41px;
`;

export const SubHeaderContentLeftContent = styled.View`
  margin-left: auto;
  flex-direction: row;
`;


export const ContentContainerListEmpty = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  /* background-color: ${COLORS.red_500}; */
`;

export const ContentContainerListEmptyText = styled.Text``;


export const ContainerSectionCardRoom = styled.View`
  position: relative;
`;

export const HeaderSectionTitle = styled.Text`
  margin-left: 21px;
`;

export const ContainerUsersEvents = styled.View``;

export const ButtonRoomControlListContainer = styled(Animated.View)`
  height: 40px;
  width: 40px;
  border-radius: 18px;
  background-color: ${COLORS.grey_240};
  position: absolute;
  top: 50%;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonRoomControlList = styled(mobile ? RectButton : Pressable)``;

export const ButtonRoomIcon = styled.Image.attrs(props => ({ resizeMode: "contain" }))`
  width: 24px;
  height: 24px;
`;