import React,{ useState } from 'react';
import { 
  Container,
  ListToastNotifications,
  ContainerButtons,
  ContainerButtonCancel,
  ContainerButtonAccept,
} from './styles'; 
import { 
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

import { COLORS,FONTS } from "../theme";
import { useToastNotificaitonProvider,ToastContentType } from '../../shared/contexts/toast-notification';
import { Flyout, useWindowDimensions } from 'react-native-windows';


export function ToastComponent() {
  const { toastNotifications } = useToastNotificaitonProvider();
  const { width,height } = useWindowDimensions()
  const [ onHover,setOnHover ] = useState(false);
  const [ pressed,setPressed ] = useState(false);
  const [ flyoutIsDimissible,setFlyoutIsDimissible ] = useState(true);

  if(!toastNotifications){
    return <View/>
  }

  const renderItem = ({item}:{item:ToastContentType}) => (
    <Flyout
      isOpen={flyoutIsDimissible}
      onDismiss={() => setFlyoutIsDimissible(false)}
      horizontalOffset={width/2}
      verticalOffset={height/2}
    >
      <View style={{
        backgroundColor: COLORS.grey_270,
        padding: 12,
        maxWidth: 480,
        width: "100%",
      }}> 
        <Text style={styles.modalTitle}>{item.title}</Text>
        <Text style={styles.modalDescription}>{item.description}</Text>
        <ContainerButtons>
          <ContainerButtonCancel
            onPress={() => setFlyoutIsDimissible(false)}
            activeOpacity={0.2}
            underlayColor={COLORS.green_390}>
            <Text style={styles.containerButtonCancelText}>Cancelar</Text>
          </ContainerButtonCancel>
          <ContainerButtonAccept
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            onHover={onHover}
            pressed={pressed}
            underlayColor={"transparent"}
            onPress={() => {}}
            activeOpacity={0.2}
            //@ts-ignore
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}>
            <Text style={styles.containerButtonAcceptText}>Encerrar</Text>
          </ContainerButtonAccept>
        </ContainerButtons>
      </View>
    </Flyout>
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


const styles = StyleSheet.create({
  containerTitleFont:{
    fontFamily: FONTS.Roboto.Medium,
  },
  containerDescription: {
    fontFamily: FONTS.Roboto.Regular,
  },
  modalTitle:{
    fontSize: 16,
    fontFamily: FONTS.Roboto.Medium,
  },
  modalDescription:{
    fontSize: 14,
    fontFamily: FONTS.Roboto.Regular,
    color: COLORS.grey_800,
    marginTop: 31,
  },
  containerButtonCancelText:{
    fontFamily: FONTS.Roboto.Medium,
    color: COLORS.grey_800,
  },
  containerButtonAcceptText:{
    color: COLORS.grey_200,
    fontFamily: FONTS.Roboto.Medium,
  },
});