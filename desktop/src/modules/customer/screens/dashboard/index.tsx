import React, { useEffect, useState, useCallback } from "react";
import { Text, FlatList } from "react-native";
import { CardRoom } from "@customer/components/card-room";
import LottieView from "lottie-react-native";
import { FONTS } from "@shared/theme";
import { useFocusEffect } from "@react-navigation/native";
import { errorConnectingToServerDataToast } from "@shared/contexts/toast-notification/constants";
import { Transition } from "@shared/components/transition";
import { baseUrl } from "@shared/services/api";
import { useToastNotificationProvider } from "@shared/contexts/toast-notification";
import { BadgeButton } from "@customer/components/badge-button";
import { useModalQueueContextProvider } from "@shared/contexts/modal-queue";
import { socket } from "@shared/services/socket-io";
import { CreateRoomButton } from "@customer/components/create-room-button";

import {
  fonts,
  Container,
  Search,
  SubHeaderContent,
  SubHeaderContentLeftContent,
  ContentContainerListEmpty,
  ContentContainerListEmptyText,
} from "./styles";
import { Modal } from "../../components/modal";

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
  const [isConnected, setIsConnected] = useState(false);

  const { addToastNotifications } = useToastNotificationProvider();
  const { addModal } = useModalQueueContextProvider();

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

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.emit('room:list', (data: CardType[]) => {
      if (data.length > 0) {
        setRoomsData(data);
      }
    });

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('room:list', (data) => {
        console.log(data)
      });
    };
  }, []);

  const renderItem = useCallback(({ item, index }: any) => (
    <CardRoom index={index} {...item} />
  ), [])

  const keyExtractor = (item: any, index: number) => `${index}`;


  const ListEmptyComponent = useCallback(() => (
    <ContentContainerListEmpty>
      <ContentContainerListEmptyText style={fonts.contentContainerListEmptyText}>parece que não existem salas disponiveis no momento</ContentContainerListEmptyText>
      <LottieView
        autoPlay
        loop
        style={{ width: 220, height: 220 }}
        source={"Message"}
      />
    </ContentContainerListEmpty>
  ), [])

  return (
    <Transition>
      <Container>
        <Search
          placeholder="Digite o codigo da sala"
          style={{ fontFamily: FONTS.Poppins.Medium }}
        />
        <Text>connected: {isConnected ? "true" : "false"}</Text>
        <SubHeaderContent>
          <Text style={fonts.TitleRoom}>Company heathy hub</Text>
          <BadgeButton text={"2 Salas"} />
          <SubHeaderContentLeftContent>
          </SubHeaderContentLeftContent>
        </SubHeaderContent>
        {!isLoading ? <FlatList
          data={roomsData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListEmptyComponent={ListEmptyComponent}
        /> : <LottieView
          autoPlay
          loop={false}
          style={{ width: 220, height: 220 }} source={"Message"}
        />}
        <CreateRoomButton />
        {/* <Modal
          title={"Criar sala"}
          description={"Para criar uma sala você deve ter permissões"}
        /> */}
      </Container>
    </Transition>
  );
};