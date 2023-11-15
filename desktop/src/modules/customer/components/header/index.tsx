import { useState } from "react";
import { View } from "react-native";
import { Container } from "./styles";
import { ButtonBorder } from "../button-header";
import { Modal } from "@shared/components/modal";
import { modalType } from "@shared/types"
import { useModalQueueContextProvider } from "@shared/contexts/modal-queue";
import { useToastNotificationProvider } from "@shared/contexts/toast-notification";

type modalContentType = {
  title: string;
  description: string;
  type: modalType;
}

const modalContent: modalContentType = {
  title: "tem certeza 🤔?",
  description: "Tem certeza que deseja encerrar essa sala? Ela não podera ser reaberta novamente depois de fechada",
  type: "warning",
}

export const Header = (props: {
  roomId: string,
}) => {

  const { addModal } = useModalQueueContextProvider();
  const { addToastNotifications } = useToastNotificationProvider();

  return (
    <Container>
      <View style={{ marginLeft: "auto" }}>
        <ButtonBorder
          onPress={() => addToastNotifications({
            title: "codigo copiado",
            description: "codigo copiado com sucesso para a area de tranferência",
            type: "success",
          })}
          label={props.roomId || "#AHAPQNASDJ"}
          borderActive
        />
      </View>
      <ButtonBorder
        onPress={() => addModal({
          title: "Sem autorização!",
          description: "Você não tem permissão para apagar o conteudo da sala, somente o autor da sala ou o administrador podem remover essa sala.",
        })}
        label="Encerrar sala"
      />
    </Container>
  )
}