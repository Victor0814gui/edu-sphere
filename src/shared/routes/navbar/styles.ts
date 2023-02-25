import { StyleSheet } from "react-native";
import styled,{css} from "styled-components/native";
import { COLORS, FONTS } from "../../theme";


export const fonts = StyleSheet.create({
  clientNameText:{
    fontFamily: FONTS.Poppins.Medium,
  },
  clientEmailText:{
    fontFamily: FONTS.Roboto.Medium,
  },
  containerNavbarText:{
    fontFamily: FONTS.Roboto.Medium,
    color: COLORS.grey_180,
  },
})


export const ButtonItemNavbar = styled.TouchableOpacity`

`;

export const Container = styled.View<{isActive: boolean,onHover:boolean}>`
  height: 44px;
  width: 80%;
  border-radius: 22px;
  flex-direction: row;
  align-items: center;
  padding: 0 26px;
  background-color: ${({isActive}) => isActive ? COLORS.green_500 : 'transparent'};
  ${({onHover}) => onHover && css`
    transform: scale(0.98,0.98);
  `}
  margin: 5px auto;
`;

export const Icon = styled.Image.attrs((props) => ({
  resizeMode: "contain",
}))`
  width: 25px;
  height: 25px;
`;

export const SectionProfileClient = styled.View`
  padding: 21px 8px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-evenly;
`;

export const ProfileImage = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
`;

export const CotenteTextProfile = styled.View`
`;

export const ClientNameText = styled.Text``;

export const ClientEmailText = styled.Text``;

export const CustomerRoleBadge = styled.View`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${COLORS.green_500};
  border-radius: 18px;
`;

export const CustomerRoleBadgeIcon = styled.Image``;

