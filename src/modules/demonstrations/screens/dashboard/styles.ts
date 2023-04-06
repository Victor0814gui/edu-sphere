import styled from "styled-components/native";
import { FONTS,COLORS } from "../../../../shared/theme";
import { StyleSheet,Platform,Animated,Pressable,TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler"

const mobile = Platform.OS === "android";

export const fonts = StyleSheet.create({
  TitleRoom:{
    color: COLORS.white,
    fontFamily: FONTS.Poppins.Bold,
    fontSize: 24,
  },
  TitleRoomText:{
    color: COLORS.grey_180,
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 14,
  },
  headerSectionTitle:{
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
  align-items: center;
  margin-bottom: 21px;
`;

export const AmountOfQuestions = styled((mobile ? RectButton : TouchableOpacity))`
  background-color: ${COLORS.green_500};
  height: 32px;
  margin: 4px;
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 7px;
  margin-left: 12px;
`;

export const ContentContainerListEmpty = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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

export const ButtonRoomIcon = styled.Image.attrs(props => ({
  resizeMode: "contain"
}))`
  width: 24px;
  height: 24px;
`;