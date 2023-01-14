import styled from "styled-components/native";
import { COLORS } from "../theme";
import { FlatList } from "react-native";

import  { ToastContentType } from "../contexts/toast-notification";

export const Container = styled.View`
  position: absolute;
  margin: 12px;
  right: 0;
`;

export const ListToastNotifications = styled(FlatList as new () => FlatList<ToastContentType>)``;

export const ContentToast = styled.View`
  background-color: ${COLORS.grey_240};
  padding: 12px;
  margin-top: 5px;
  flex-direction: row;
`;

export const ContainerTitle = styled.Text`
  font-size: 16px;
  width: 100%;
  max-width: 340px;
`;

export const ContainerDescription = styled.Text`
  font-size: 14px;
  width: 100%;
  max-width: 340px;
`;
