import { useState } from "react";
import { View } from "react-native";
import { Container } from "./styles";
import { ButtonBorder } from "../button-header";
import { Modal } from "../../../../shared/components/modal-component.windows";
import { modalType } from "../../../../shared/types"

type modalContentType = {
  title: string;
  description: string;
  type: modalType;
}

const modalContent: modalContentType = {
  title: "tem certeza 🤔?",
  description: "Tem certeza que deseja encerrar essa sala? Ela não podera ser reaberta novamente depois de fechada",
  type:"warning",
}

export const Header = (props:{
  roomId: string,
}) => {

  const [ modalIsOpen,setModalIsOpen ] = useState(false);

  return (
    <Container>
      <View style={{marginLeft: "auto"}}>
        <ButtonBorder label={props.roomId || "#AHAPQNASDJ"} borderActive />
      </View>
      <ButtonBorder onPress={() => setModalIsOpen(!modalIsOpen)} label="Encerrar sala"/>
      <Modal props={{
        ...modalContent,
        modalIsOpen,
      }} />
    </Container>
  )
}