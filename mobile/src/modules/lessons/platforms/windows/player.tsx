import { useEffect, useLayoutEffect } from "react";
import Video from "react-native-video";
import { Button, useWindowDimensions } from "react-native";
import { useNavigation,useRoute } from "@react-navigation/native";
import { fullscreen } from "react-native-custom-window";
import { 
  fonts,
  Container,
  ContainerRoomNotFound,
  TitleRoomNotFound,
  DescriptionRoomNotFound,
  ButtonRoomNotFound,
  ButtonRoomNotFoundText,
  Content,
} from './styles';

export interface OnProgressData {
  currentTime: number;
  playableDuration: number;
  seekableDuration: number;
}


export function PlayerWindows() {
  const route  = useRoute()
  const { navigate,goBack } = useNavigation();
  
  
  
  if(!route.params){
    return (
      <ContainerRoomNotFound>
        <TitleRoomNotFound style={fonts.titleRoomNotFound}>Ops,video não encontrado</TitleRoomNotFound>
        <DescriptionRoomNotFound style={fonts.descriptionRoomNotFound}>parece que o você está buscando não existe, ou não está disponivel</DescriptionRoomNotFound>
        <ButtonRoomNotFound onPress={() => navigate("dashboard")}>
          <ButtonRoomNotFoundText style={fonts.buttonRoomNotFoundText}>Home</ButtonRoomNotFoundText>
        </ButtonRoomNotFound>
        {/* <LottieView style={{width: 400,height:400}}  source={"HamburgerArrow"} /> */}
      </ContainerRoomNotFound>
    )
  }

  const { url } = route.params as {url: string};

  if(!url){
    navigate("dashboard");
  }

  const {
    width,
    height,
  } = useWindowDimensions();

  useLayoutEffect(() => {
    fullscreen.addBackButton();
    fullscreen.disableExtend();
  },[])

  return (
    <Container>
      <Video
        style={{
          width,
          height:height
        }}
        controls={false}
        playInBackground={true}
        allowsExternalPlayback
        onLoad={(e) => console.log(e)}
        paused={true}
        resizeMode="contain"
        onProgress={(e) => console.log(e.nativeEvent)}
        source={{
          uri: url
        }}
        muted={false}

      />
    <Content>
    <Button title="fullscreen" color={"red"} onPress={() => fullscreen.full()}/>
    </Content>
    </Container>
  );
}