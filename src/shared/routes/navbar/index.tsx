import { memo,useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
import { COLORS, FONTS } from '../../theme';

import { 
  fonts,
  ButtonItemNavbar,
  Container,
  SectionProfileClient,
  ProfileImage,
  CotenteTextProfile,
  ClientNameText,
  ClientEmailText, 
  CustomerRoleBadge,
  CustomerRoleBadgeIcon,
} from "./styles";


type CustomNavbarProps = {
  navigation: DrawerNavigationHelpers;
  state: DrawerNavigationState<ParamListBase>
}

export const CustomNavbar = ({navigation,state}:CustomNavbarProps) => {
  return (
    <View style={{flex: 1}}>
      <SectionProfileClient>
        <ProfileImage
          source={{uri:"https://avatars.githubusercontent.com/u/92493696?v=4"}}
        />
        <CotenteTextProfile>
          <ClientNameText style={fonts.clientNameText}>Victor Guilherme {"\n"} Willian Roinha</ClientNameText>
        </CotenteTextProfile>
        <CustomerRoleBadge>
          <CustomerRoleBadgeIcon source={require("../../assets/icons/admin.svg")}/>
        </CustomerRoleBadge>
      </SectionProfileClient>
      {state.routes.map(({name},i) => (
        <ButtonItemNavbar key={i} onPress={() => navigation.navigate(name)}>
          <ItemNavbar  isActive={state.index === i} routeName={name}/>
        </ButtonItemNavbar>
      ))}
    </View>
  );
}


function ItemNavbar({routeName,isActive}:{isActive:boolean,routeName: string}){
  const  [ onHover,setOnHover ] = useState(false);
  return(
    <Container
      //@ts-ignore
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      isActive={isActive}
      onHover={onHover}
    >
      <Text style={[fonts.containerNavbarText,!isActive && {color:COLORS.grey_970}]}>{routeName}</Text>
    </Container>
  )
}
