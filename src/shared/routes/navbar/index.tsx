import { useState } from "react";
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
import { COLORS } from '../../theme';

import Icon from "react-native-vector-icons/Feather";

import {
  fonts,
  ButtonItemNavbar,
  Container,
  SectionProfileClient,
  ProfileIconImageSubstituteContainer,
  ProfileImage,
  CotenteTextProfile,
  ClientNameText,
  CustomerRoleBadge,
  CustomerRoleBadgeIcon,
} from "./styles";
import { useAuthContextProvider } from "../../contexts/auth";
import { IRoutes, UserRoutes } from "../user/routes";
import { Gear, User } from "phosphor-react-native";


type CustomNavbarProps = {
  navigation: DrawerNavigationHelpers;
  state: DrawerNavigationState<ParamListBase>
}

type ItemNavbar = {
  isActive: boolean;
  routeName: string;
  icon: React.ElementType;
}


const ItemNavbar = ({ icon: Icon, routeName, isActive }: ItemNavbar) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <Container
      //@ts-ignore
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      isActive={isActive}
      onHover={onHover}
    >
      <Icon size={24} color={isActive ? COLORS.grey_240 : COLORS.white} weight="duotone" />
      <Text style={[fonts.containerNavbarText, !isActive && { color: COLORS.grey_970 }]}>{routeName}</Text>
    </Container>
  )
}


type RenderItemType = {
  item: IRoutes;
  index: number
}


const ProfileIconImageSubstitute = () => (
  <ProfileIconImageSubstituteContainer>
    <User size={24} color="#f2f2f2" weight="duotone" />
  </ProfileIconImageSubstituteContainer>
)


export const CustomNavbar = ({ navigation, state }: CustomNavbarProps) => {
  const { user } = useAuthContextProvider()

  const RenderItem = ({ item: { name, key, icon }, index: i }: RenderItemType) => (
    <ButtonItemNavbar key={i} onPress={() => navigation.navigate(key as any)}>
      <ItemNavbar
        isActive={state.index === i}
        routeName={name}
        icon={icon}
      />
    </ButtonItemNavbar>
  )

  console.log("update")

  const onPress = async () => {
    navigation.navigate("profile")
  }

  return (
    <View style={{ flex: 1 }}>
      <SectionProfileClient>
        {!user?.avatarUrl
          ? <ProfileImage source={{ uri: user?.avatarUrl }} />
          : <ProfileIconImageSubstitute />
        }
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
        renderItem={RenderItem}
        keyExtractor={(_, index) => `${index}`}
      />
      <ButtonItemNavbar onPress={onPress}>
        <ItemNavbar isActive={state.index === 2} routeName={"configurações"} icon={Gear} />
      </ButtonItemNavbar>
    </View>
  );
}

