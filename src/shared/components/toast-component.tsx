import React from 'react';
import { 
  ListToastNotifications,
  Container,
  ContentToast,
  ContainerTitle,
  ContainerDescription,
} from './styles'; 
import { View,StyleSheet, Button } from 'react-native';

import { COLORS,FONTS } from "../theme";
import { useToastNotificaitonProvider,ToastContentType } from '../../shared/contexts/toast-notification';
import { Flyout, Platform } from 'react-native-windows';
import { TouchableHighlight } from 'react-native-gesture-handler';


export function ToastComponent() {
  const { toastNotifications,removeToastNotication } = useToastNotificaitonProvider();

  return (
    <Container>
      <ListToastNotifications<React.ElementType>
        data={toastNotifications}
        renderItem={({item}:{item:ToastContentType}) => (
          <ContentToast>
            <View>
              <ContainerTitle style={styles.containerTitleFont}>{item.title}</ContainerTitle>
              <ContainerDescription style={styles.containerDescription}>{item.description}</ContainerDescription>
              <Button onPress={() => removeToastNotication(item.id!)} title="rasdfasdfasdfsdfemove" />
            </View>
          </ContentToast>
        )}
        keyExtractor={({id}:{id: string}) => id}
      />
    </Container>
  );
}


const styles = StyleSheet.create({
  containerTitleFont:{
    fontFamily: FONTS.Roboto.Medium,
  },
  containerDescription: {
    fontFamily: FONTS.Roboto.Regular,
  }
});