import React,{ useState,useEffect,useRef } from 'react';
import { 
  View,
  Text,
  Animated,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { 
  useToastNotificaitonProvider,
  ToastContentType,
} from '../../shared/contexts/toast-notification';
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS,FONTS } from "../theme";
import { 
  aditionalStyles,
  Container,
  ListToastNotifications,
  ContainerButtons,
  ContainerButtonCancel,
  ContainerButtonAccept,
} from './styles'; 

export const ToastItem = ({
  title,
  description,
  id,
  position,
  type,
}:ToastContentType) => {
  const animateEnterAndLeaveToastItem = useRef(new Animated.Value(-20)).current
  const { removeToastNotication } = useToastNotificaitonProvider();

  const animateEnterToastItem = () => {
    setTimeout(() => {
      animateLeaveToastItem()
    },3000)
    Animated.spring(animateEnterAndLeaveToastItem,{
      toValue: 20,
      useNativeDriver: true,
    }).start();
  }

  const animateLeaveToastItem = () => {
    Animated.spring(animateEnterAndLeaveToastItem,{
      toValue: 480,
      useNativeDriver: true,
    }).start(({finished}) => {
      if(finished){
        removeToastNotication(id!)
      }
    })
  }

  useEffect(() => {
    animateEnterToastItem()
  },[])

  return (
    <Animated.View style={{
      backgroundColor: COLORS.grey_270,
      padding: 12,
      maxWidth: 480,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      transform:[{translateX:animateEnterAndLeaveToastItem}]
    }}> 
      <View>
        <Text style={aditionalStyles.modalTitle}>{title}</Text>
        <Text style={aditionalStyles.modalDescription}>{description}</Text>
      </View>
      <Pressable onPress={animateLeaveToastItem}>
        <Icon
          name="highlight-remove"  
          size={25}
          color={COLORS.orange_400}
        />
      </Pressable>
    </Animated.View>
  )
}

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
    <ToastItem {...item} />
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