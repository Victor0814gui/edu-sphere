import { useCallback, useContext } from "react";
import {
  View,
  FlatList,
} from 'react-native';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';


import {
  fonts,
  ContainerWrapper,
  SectionProfileClient,
  CotenteTextProfile,
  ClientNameText,
  CustomerRoleBadge,
  CustomerRoleBadgeIcon,
  Content,
  Heading,
} from "./styles";
import { ContextAuthContext, useAuthContextProvider } from "@shared/contexts/auth";
import { IRoutes, UserRoutes } from "@shared/routes/user/routes";
import { Avatar } from "../avatar";
import { ItemNavbar } from "./item";
import { ItemRoom } from "./item-rooms";



type CustomNavbarProps = {
  navigation: DrawerNavigationHelpers;
  state: DrawerNavigationState<ParamListBase>
  user: any
}


type RenderItemType = {
  item: IRoutes;
  index: number;
}


export const CustomNavbar = ({ navigation, state, user }: CustomNavbarProps) => {


  const renderItemOnPress = useCallback((key: any) => navigation.navigate(key as any), [])
  const keyExtractor = useCallback((_: any, index: number) => `${index}`, [])


  const renderItem = useCallback(({
    item: { name, key, icon },
    index: i
  }: RenderItemType) => (
    <ItemNavbar
      onPress={() => renderItemOnPress(key)}
      isActive={state.index === i}
      routeName={name}
      icon={icon}
    />
  ), [])


  const renderItemRooms = useCallback((props: any) => (
    <ItemRoom {...props} />
  ), [])


  return (
    <ContainerWrapper>
      <SectionProfileClient>
        <Avatar avatarUrl={user?.avatarUrl} />
        <CotenteTextProfile>
          <ClientNameText
            textBreakStrategy="simple"
            numberOfLines={2}
            ellipsizeMode="clip"
            style={fonts.clientNameText}
          >Victor Guilherme Coimbra Rocha</ClientNameText>
        </CotenteTextProfile>
        <CustomerRoleBadge>
          <CustomerRoleBadgeIcon />
        </CustomerRoleBadge>
      </SectionProfileClient>
      <FlatList
        data={UserRoutes}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={{
          flexGrow: 0,
        }}
      />
      <Content>
        <Heading style={fonts.heading}>Rooms</Heading>
        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6, 7]}
          renderItem={renderItemRooms}
          keyExtractor={keyExtractor}
          style={{
            flexGrow: 0,
          }}
        />
      </Content>
    </ContainerWrapper>
  );
}

