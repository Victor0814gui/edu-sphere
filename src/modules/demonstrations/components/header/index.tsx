import { useState } from "react";
import { View,StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../../shared/theme";
import IconsHome from "../../assets/icons/copy.svg"
import {
  Container,
  ViewContainerOnHover,
  ButtonCopyRoomCode,
  CircleIconCopy,
  CircleIconImage,
  ButtonCopyRoomCodeText,
} from "./styles";

export function Header(){

  return (
    <Container>
      <View style={{marginLeft: "auto"}}>
        <ButtonBoder label="#AHAPQNASDJ" borderActive />
      </View>
      <ButtonBoder label="Encerrar sala"/>
    </Container>
  )
}

function ButtonBoder({label,borderActive = false}:{label: string,borderActive?: boolean}){
  const [ onHover,setOnHover ] = useState(false);
  return(
    <ViewContainerOnHover onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
      <ButtonCopyRoomCode onHover={onHover}>
        {borderActive &&
          <CircleIconCopy onHover={onHover}>
            <CircleIconImage  source={IconsHome} />
          </CircleIconCopy>
        }
        <ButtonCopyRoomCodeText onHover={onHover} style={font.buttonText}>{label}</ButtonCopyRoomCodeText>
      </ButtonCopyRoomCode>
    </ViewContainerOnHover>
  )
}

const font = StyleSheet.create({
  buttonText:{
    fontFamily: FONTS.Roboto.Medium,
  }
})