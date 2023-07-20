import { useState } from "react";
import { View } from "react-native";
import { Container } from "./styles";
import { ButtonBorder } from "../button-header";
import { Modal } from "../../../../shared/components/modal";
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
     {modalIsOpen && <Modal 
        title="asdçfkljald falkdfçlkaçlsdfçlafa df asd fasd f asdf"
        description="asdçfkljald falkdfçlkaçlsdfçlafa df asd fasd f asdf as df as df asdf a sdf as df asd f asd fa sdf as df asdflkjasdl fas df asdf asd f asdf asd fasdi fu asjdkf asdf asd fas dflkasd f ahsdfasdf asd f asdf"
      />}
    </Container>
  )
}