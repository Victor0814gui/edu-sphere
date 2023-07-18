import styled from "styled-components/native";
import { StyleSheet,Animated } from "react-native";
import { COLORS } from "../../../../shared/theme";



export const styles = StyleSheet.create({
  videoPlayer:{
    width: 230,
    height: 230,
    marginVertical: 12,
    borderRadius: 12,
  }
});

export const Container = styled.View<{onHover: boolean}>`
  position: relative;
  /* background-color: ${({onHover}) => onHover ? "#ffffffff" : "transparent"}; */
  z-index: 1;
  justify-content: center;
  align-items: center;
  margin: 7px 0;
  width: 230px;
  height: 230px;
`;

export const ContainerVideoPlayerControls = styled.View`
  position: absolute;
  flex-direction: row;
`;

export const PlayerButton = styled.TouchableHighlight<{onHover: boolean}>`
  width: 35px;
  height: 35px;
  background-color: ${({onHover}) => onHover ? COLORS.grey_200 : COLORS.grey_400};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

export const PlayerButtonIcon = styled.Image.attrs((props) => ({
  resizeMode: "contain",
}))`
  width: 25px;
  height: 25px;
`;