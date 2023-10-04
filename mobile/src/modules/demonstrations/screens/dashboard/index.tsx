import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { CardRoom } from "../../components/card-room";
import LottieView from "lottie-react-native";
import { COLORS } from "../../../../shared/theme";

import {
  fonts,
  Container,
  SubHeaderContent,
  SubHeaderContentLeftContent,
  ContentContainerListEmpty,
  ContentContainerListEmptyText,
  HeaderSectionTitle,
} from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import { errorConnectingToServerDataToast } from "../../../../shared/contexts/toast-notification/constants";
import { Transition } from "../../../../shared/components/transition";
import { baseUrl } from "../../../../shared/services/api";
import { useToastNotificationProvider } from "../../../../shared/contexts/toast-notification";
import { useOpenAndCloseNavbarOnKeyPressContextProvider } from "../../../../shared/contexts/open-and-close-navbar-on-key-press";
import { BadgeButton } from "../../components/badge-button";
import { useModalQueueContextProvider } from "../../../../shared/contexts/modal-queue";
import { Input } from "../../../rooms/screens/create-room/styles";

type CardType = {
  title: string;
  avatarUrl: string;
  nickname: string;
  tags: string[];
  id: string;
}

var myInit = { method: 'GET', }

export const Dashboard = () => {
  const [roomsData, setRoomsData] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  const { addToastNotifications } = useToastNotificationProvider();
  const { addModal } = useModalQueueContextProvider();
  const { onFocus } = useOpenAndCloseNavbarOnKeyPressContextProvider()

  const fetchRoomsData = async () => {
    try {
      const roomsDataResponse = await fetch(`${baseUrl}/rooms`, myInit);
      const response = await roomsDataResponse.json()
      const responseJson = await response[0].data
      console.log("Dashboard - [fetchRoomsData]")

      setRoomsData(responseJson);
    } catch (err) {
      addToastNotifications(errorConnectingToServerDataToast);
    }
  }

  const handlerCreateRoom = async () => {
    await addModal({
      title: "Criar nova sala",
      description: "Você não permissões para criar um nova sala, você pode contatar o gerente da sua instituição para habilitar você"
    })
  }

  useFocusEffect(() => {
    if (isLoading) {
      setIsLoading(false)
      fetchRoomsData();
    }
  })

  const renderItem = useCallback(({ item, index }: any) => (
    <CardRoom index={index} {...item} />
  ), [])

  return (
    <Transition>
      <Container>
        <SubHeaderContent>
          <Text style={fonts.TitleRoom}>Company heathy hub</Text>
          <BadgeButton text={"42 Salas"} />
          <SubHeaderContentLeftContent>
            <BadgeButton onPress={handlerCreateRoom} text={"Criar nova sala"} />
          </SubHeaderContentLeftContent>
        </SubHeaderContent>
        {!isLoading ? <FlatList
          data={roomsData}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderItem}
          ListEmptyComponent={
            <ContentContainerListEmpty>
              <ContentContainerListEmptyText style={fonts.contentContainerListEmptyText}>parece que não existem salas disponiveis no momento</ContentContainerListEmptyText>
              <LottieView
                autoPlay
                loop
                style={{ width: 220, height: 220 }} source={"Message"}
              />
            </ContentContainerListEmpty>
          }
        /> : <LottieView
          autoPlay
          loop={false}
          style={{ width: 220, height: 220 }} source={"Message"}
        />}
      </Container>
    </Transition>
  );
};