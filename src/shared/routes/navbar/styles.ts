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

export const IconComponent = styled.Image.attrs((props) => ({
  resizeMode: "contain",
}))`
  width: 25px;
  height: 25px;
`;

export const SectionProfileClient = styled.View`
  padding: 12px 8px;
  margin-top: 11px;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  /* justify-content: space-between; */
  margin-bottom: 10px;
`;

export const ProfileIconImageSubstituteContainer = styled.View`
 width: 46px;
  height: 46px;
  border-radius: 23px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.grey_240};
  margin-right: 4px;
`;

export const ProfileImage = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
`;

export const CotenteTextProfile = styled.View`
  margin-left: 10px;
  /* background-color: ${COLORS.green_400}; */
`;

export const ClientNameText = styled.Text`
  max-width: 80%;
`;

export const ClientEmailText = styled.Text`
  font-size: 12px;
`;

export const CustomerRoleBadge = styled.View`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${COLORS.green_500};
  border-radius: 18px;
  /* margin-left: auto; */
`;

export const CustomerRoleBadgeIcon = styled.Image``;

