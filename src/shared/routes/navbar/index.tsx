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

import Icon from "react-native-vector-icons/Feather";

import { 
  fonts,
  ButtonItemNavbar,
  Container,
  IconComponent,
  SectionProfileClient,
  ProfileIconImageSubstituteContainer,
  ProfileImage,
  CotenteTextProfile,
  ClientNameText,
  ClientEmailText,
  CustomerRoleBadge,
  CustomerRoleBadgeIcon,
} from "./styles";
import { useAuthContextProvider } from "../../contexts/auth";
import { IRoutes, UserRoutes } from "../user/routes";


type CustomNavbarProps = {
  navigation: DrawerNavigationHelpers;
  state: DrawerNavigationState<ParamListBase>
}

type ItemNavbar = {
  isActive:boolean;
  routeName: string;
  iconName?: string;
}


const ItemNavbar = ({iconName,routeName,isActive}:ItemNavbar) => {
  const  [ onHover,setOnHover ] = useState(false);
  return(
    <Container
      //@ts-ignore
      onMouseEnter={() => setOnHover(true)}
      onMou seLeave={() => setOnHover(false)}
      isActive={isActive}
      onHover={onHover}
    >
      <Icon
        style={{
          marginRight: 4,
        }}
        name={iconName as any}
        color={!isActive ? COLORS.grey_970 : COLORS.grey_180}
        size={20}
      />
      <Text style={[fonts.containerNavbarText,!isActive && {color:COLORS.grey_970}]}>{routeName}</Text>
    </Container>
  )
}


type RenderItemType = {
  item: IRoutes;
  index: number
}


const ProfileIconImageSubstitute = () => (
  <ProfileIconImageSubstituteContainer>
    <Icon name="user" size={20}/>
  </ProfileIconImageSubstituteContainer>
)


export const CustomNavbar = ({navigation:_,state}:CustomNavbarProps) => {
  const navigation = useNavigation();
  const { user } = useAuthContextProvider()

  const RenderItem = ({ item:{ name,key,icon }, index: i}:RenderItemType) => (
    <ButtonItemNavbar key={i} onPress={() => navigation.navigate(key as any)}>
      <ItemNavbar  isActive={state.index === i} routeName={name} iconName={icon}/>
    </ButtonItemNavbar>
  )

  return (
    <View style={{flex: 1}}>
      <SectionProfileClient>
        {user?.avatarUrl 
          ? <ProfileImage source={{uri: user?.avatarUrl}}/>
          : <ProfileIconImageSubstitute/>
        }
        <CotenteTextProfile>
          <ClientNameText style={fonts.clientNameText}>{user?.birthday}</ClientNameText>
        </CotenteTextProfile>
        <CustomerRoleBadge>
          <CustomerRoleBadgeIcon source={require("../../assets/icons/admin.svg")}/>
        </CustomerRoleBadge>
      </SectionProfileClient>
      <FlatList
        data={UserRoutes}
        renderItem={RenderItem}
        keyExtractor={(_,index) => `${index}`}
      />
      <ButtonItemNavbar onPress={() => navigation.navigate("profile")}>
        <ItemNavbar  isActive={state.index === 2} routeName={"configurações"} iconName={"settings"}/>
      </ButtonItemNavbar>
    </View>
  );
}

