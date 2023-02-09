import React,{ Ref, useEffect, useState } from 'react';
import { 
  ContainerButtons,
  ContainerButtonCancel,
  ContainerButtonAccept,
} from './styles'; 
import { 
  View,
  StyleSheet,
  Text,
} from 'react-native';

import { COLORS,FONTS } from "../theme";
import { Flyout, useWindowDimensions } from 'react-native-windows';
import { ModalContentType } from '../types';

type ModalProps = ModalContentType & {
  modalIsOpen?: boolean;
}

const ModalButton = (props:{
  setModalIsDimissible: (state: boolean) => void
}) => {  
  const [ onHover,setOnHover ] = useState(false);
  const [ pressed,setPressed ] = useState(false);

  return (
    <ContainerButtons>
      <ContainerButtonCancel
        onPress={() => props.setModalIsDimissible(false)}
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
  )
}

export function Modal(
  {props}:{props: ModalProps},
) {
  const [ modalIsDimissible,setModalIsDimissible ] = useState(false);
  const { width,height } = useWindowDimensions()

  const ModalComponent = ({item}:{item:ModalContentType}) => (
    <Flyout
      isOpen={modalIsDimissible}
      onDismiss={() => setModalIsDimissible(false)}
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
        <ModalButton setModalIsDimissible={setModalIsDimissible} />
      </View>
    </Flyout>
  )

  useEffect(() => {
    if(props.modalIsOpen !== undefined){
      setModalIsDimissible(props.modalIsOpen!);
    }
  },[props.modalIsOpen])

  return (
    props.modalIsOpen 
    ?<ModalComponent item={props!}/>
    : <View/>
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