import React from 'react';
import { 
  ListToastNotifications,
  Container,
  ContentToast,
  IndicatorTypeToast,
  ContainerTitle,
  ContainerDescription,
} from './styles'; 
import { View,StyleSheet, Button } from 'react-native';

import { COLORS,FONTS } from "../theme";
import { useToastNotificaitonProvider,ToastContentType } from '../../shared/contexts/toast-notification';


export function ToastComponent() {
  const { toastNotifications,removeToastNotication } = useToastNotificaitonProvider();

  const renderItem = ({item}:{item:ToastContentType}) => (
    <ContentToast>
      <IndicatorTypeToast/>
      <View>
        <ContainerTitle style={aditionalStyles.containerTitleFont}>{item.title}</ContainerTitle>
        <ContainerDescription style={aditionalStyles.containerDescription}>{item.description}</ContainerDescription>
        <Button onPress={() => removeToastNotication(item.id!)} title="rasdfasdfasdfsdfemove" />
      </View>
    </ContentToast>
  )
  
  return (
    <Container>
      <ListToastNotifications<React.ElementType>
        data={toastNotifications}
        renderItem={renderItem}
        keyExtractor={({id}:{id: string}) => id}
      />
    </Container>
  );
}


const aditionalStyles = StyleSheet.create({
  containerTitleFont:{
    fontFamily: FONTS.Roboto.Medium,
  },
  containerDescription: {
    fontFamily: FONTS.Roboto.Regular,
  }
});