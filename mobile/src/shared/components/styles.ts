import styled from "styled-components/native";
import { COLORS, FONTS } from "../theme";
import { FlatList, StyleSheet } from "react-native";
import { ToastContentType } from "../contexts/toast-notification";

type IndicatorTypeToastProps = {
  type: 'default' | 'warning' | 'error' | 'success';
}
const ToastType = {
  warning: COLORS.orange_400,
  error: COLORS.red_530,
  success: COLORS.green_500,
  default: COLORS.grey_800
}

export const Container = styled.View`
  position: absolute;
  z-index: 1;
  margin: 12px;
  right: 5%;
  top: 5%;
`;

export const ListToastNotifications = styled(FlatList as new () => FlatList<ToastContentType>)``;

export const ContentToast = styled.View`
  background-color: ${COLORS.grey_240};
  padding: 12px;
  margin-top: 5px;
  flex-direction: row;
`;
export const IndicatorTypeToast = styled.View<IndicatorTypeToastProps>`
  height: 100%;
  width: 4px;
  background-color: ${({ type }) => ToastType[type]};
  margin-right: 7px;
  border-radius: 2px;
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

export const ContainerButtonAccept = styled(ContainerButtonBase) <{ pressed: boolean, onHover: boolean }>`

  background-color: ${({ onHover, pressed }) => (pressed && COLORS.red_500) || (onHover ? COLORS.red_530 : COLORS.red_580)};
`;


export const ToastRemoveButton = styled.TouchableHighlight`
  height: 36px;
  width: 36px;
  align-items: center;
  justify-content: center;
`;