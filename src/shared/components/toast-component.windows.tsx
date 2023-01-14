import React from 'react';
import { 
  ListToastNotifications,
  Container,
  ContentToast,
  ContainerTitle,
  ContainerDescription,
} from './styles'; 
import { 
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

import { COLORS,FONTS } from "../theme";
import { useToastNotificaitonProvider,ToastContentType } from '../../shared/contexts/toast-notification';
import { Flyout } from 'react-native-windows';


export function ToastComponent() {
  const { toastNotifications,removeToastNotication } = useToastNotificaitonProvider();

  if(!toastNotifications){
    return <View/>
  }

  // if(Platform.OS === "windows"){
  //   return (
  //     <Flyout
  //       isOpen={showFlyout1}
  //       onDismiss={() => {
  //         setShowFlyout1(false);
  //       }}
  //       horizontalOffset={120}
  //       verticalOffset={height - 35}
  //     >
  //       <View style={{
  //         backgroundColor: COLORS.grey_270,
  //         padding: 12,
  //         flexDirection: "row",
  //       }}> 
  //         <SwitchText>This is a flyout.</SwitchText>
  //         <TouchableHighlight
  //           onPress={() => {
  //             setShowFlyout1(false);
  //           }}
  //           activeOpacity={0.2}
  //           underlayColor={"blue"}>
  //           <SwitchText>Close Flyout</SwitchText>
  //         </TouchableHighlight>
  //       </View>
  //     </Flyout>
  //   )
  // }
  return (
    <Container>
      <ListToastNotifications<React.ElementType>
        data={toastNotifications}
        renderItem={({item}:{item:ToastContentType}) => (
        <Flyout
          isOpen={true}
          onDismiss={() => {
          }}
          horizontalOffset={120}
          verticalOffset={140}
        >
          <View style={{
            backgroundColor: COLORS.grey_270,
            padding: 12,
            flexDirection: "row",
          }}> 
            <Text>This is a flyout.</Text>
            <TouchableHighlight
              onPress={() => {
              }}
              activeOpacity={0.2}
              underlayColor={"blue"}>
              <Text>Close Flyout</Text>
            </TouchableHighlight>
          </View>
 </Flyout>
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