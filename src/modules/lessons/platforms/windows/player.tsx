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

  useEffect(() => {
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
        // ref={videoRef}
        controls={false}
        playInBackground={true}
        // paused={paused}
        allowsExternalPlayback
        onLoad={(e) => console.log(e)}
        paused={true}
        resizeMode="contain"
        // fullscreen={fullscreen}
        // onVideoLoad={(e) => console.log(e)}
        // onSeek={(e) => console.log(e)}
        onProgress={(e) => console.log(e.nativeEvent)}
        // onLoad={(e) => console.log(e)}
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