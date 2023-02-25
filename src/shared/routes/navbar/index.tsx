import { memo,useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import { home } from "../../assets/icons"
import { COLORS, FONTS } from '../../theme';

import { 
  fonts,
  ButtonItemNavbar,
  Container,
  Icon,
  SectionProfileClient,
  ProfileImage,
  CotenteTextProfile,
  ClientNameText,
  ClientEmailText, 
  CustomerRoleBadge,
  CustomerRoleBadgeIcon,
} from "./styles";
import { useAuthContextProvider } from "../../contexts/auth";


type CustomNavbarProps = {
  navigation: DrawerNavigationHelpers;
  state: DrawerNavigationState<ParamListBase>
}


const ItemNavbar = ({routeName,isActive}:{isActive:boolean,routeName: string}) => {
  const  [ onHover,setOnHover ] = useState(false);
  return(
    <Container
      //@ts-ignore
      onMouseEnter={() => setOnHover(true)}
      onMou seLeave={() => setOnHover(false)}
      isActive={isActive}
      onHover={onHover}
    >
      <Icon source={home}/>
      <Text style={[fonts.containerNavbarText,!isActive && {color:COLORS.grey_970}]}>{routeName}</Text>
    </Container>
  )
}


export const CustomNavbar = ({navigation:_,state}:CustomNavbarProps) => {
  const navigation = useNavigation();
  const { user } = useAuthContextProvider()
  return (
    <View style={{flex: 1}}>
      <SectionProfileClient>
        <ProfileImage source={{uri: user?.avatarUrl ? user?.avatarUrl : "https://avatars.githubusercontent.com/u/92493696?v=4"}}/>
        <CotenteTextProfile>
          <ClientNameText style={fonts.clientNameText}>Victor Guilherme {"\n"} Willian Roinha</ClientNameText>
        </CotenteTextProfile>
        <CustomerRoleBadge>
          <CustomerRoleBadgeIcon source={require("../../assets/icons/admin.svg")}/>
        </CustomerRoleBadge>
      </SectionProfileClient>
      {state.routes.map(({name},i) => (
        <ButtonItemNavbar key={i} onPress={() => navigation.navigate(name as any)}>
          <ItemNavbar  isActive={state.index === i} routeName={name}/>
        </ButtonItemNavbar>
      ))}
    </View>
  );
}

