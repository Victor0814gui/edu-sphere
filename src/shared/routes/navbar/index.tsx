import { useState } from "react";
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import { home } from "../../assets/icons"
import { COLORS } from '../../theme';

import { 
  fonts,
  ButtonItemNavbar,
  Container,
  Icon,
  SectionProfileClient,
  ProfileImage,
  CotenteTextProfile,
  ClientNameText,
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


type RenderItemType = {
  item:{
    name: string;
  },
  index: number
}


export const CustomNavbar = ({navigation:_,state}:CustomNavbarProps) => {
  const navigation = useNavigation();
  const { user } = useAuthContextProvider()

  const renderItem = ({ item:{ name }, index: i}:RenderItemType) => (
    <ButtonItemNavbar key={i} onPress={() => navigation.navigate(name as any)}>
      <ItemNavbar  isActive={state.index === i} routeName={name}/>
    </ButtonItemNavbar>
  )

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
      <FlatList
        data={state.routes}
        renderItem={renderItem}
        keyExtractor={(_,index) => `${index}`}
      />
    </View>
  );
}

