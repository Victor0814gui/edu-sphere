import React, { useEffect, useState } from "react";
import { Text, SectionList, FlatList } from "react-native";
import { CardRoom } from "../../components/card-room";
import { api, baseUrl } from "@shared/services/api";
import { useToastNotificaitonProvider } from "@shared/contexts/toast-notification";
import { useOpenAndCloseNavbarOnKeyPressContextProvider } from "@shared/contexts/open-and-close-navbar-on-key-press";

import LottieView from "lottie-react-native";
import { errorConnectingToServerDataToast } from "@shared/contexts/toast-notification/constants";
import { ScreenAnimationWrapper } from "@modules/demonstrations/components/screen-wrapper-animation";

import {
  fonts,
  Container,
  SubHeaderContent,
  AmountOfQuestions,
  ContentContainerListEmpty,
  ContentContainerListEmptyText,
  HeaderSectionTitle,
} from "./styles";

type CardType = {
  title: string;
  avatarUrl: string;
  nickname: string;
  tags: string[];
  id: string;
}

type CardSectionType = {
  title: string;
  data: CardType[];
}

var myInit = { method: 'GET', }

export const Dashboard = () => {
  const [roomsData, setRoomsData] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { addToastNotifications } = useToastNotificaitonProvider();
  const { onFocus } = useOpenAndCloseNavbarOnKeyPressContextProvider()

  const fetchRoomsData = async () => {
    try {
      const roomsDataResponse = await fetch(`${baseUrl}/rooms`, myInit);
      console.log("Dashboard.fetchRoomsData")
      const response = await roomsDataResponse.json()
      const responseJson = await response[0].data
      console.log(responseJson)
      console.log("Dashboard.fetchRoomsData", "end")

      setRoomsData(responseJson);
    } catch (err) {
      addToastNotifications(errorConnectingToServerDataToast);
    }
  }

  console.log("Dashboard.fetchRoomsData")


  useEffect(() => {
    setIsLoading(true)
    if (!isLoading) {
      fetchRoomsData();
    }
  })

  return (
    <ScreenAnimationWrapper>
      <Container>
        <SubHeaderContent>
          <Text style={fonts.TitleRoom}>Sala React Q&A</Text>
          <AmountOfQuestions onPress={onFocus}>
            <Text style={fonts.TitleRoomText}>42 perguntas</Text>
          </AmountOfQuestions>
        </SubHeaderContent>
        {isLoading ? <FlatList
          data={roomsData}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item, index }) => <CardRoom index={index} {...item} />}
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
    </ScreenAnimationWrapper>
  );
};