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
  margin-bottom: 14px;

`;

export const ContainerDescription = styled.Text`
  font-size: 14px;
  width: 100%;
  max-width: 340px;
`;

export const ContainerButtons = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 42px;
`;

const ContainerButtonBase = styled.TouchableHighlight`
  min-width: 100px;
  border-radius: 21px;
  height: 42px;
  align-items: center;
  justify-content: center;
`;

export const ContainerButtonCancel = styled(ContainerButtonBase)`
`;

export const ContainerButtonAccept = styled(ContainerButtonBase)<{ pressed: boolean, onHover: boolean }>`

  background-color: ${({ onHover,pressed }) => (pressed && COLORS.red_500) || (onHover ? COLORS.red_530 : COLORS.red_580)};
`;