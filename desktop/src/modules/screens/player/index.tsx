import { useRef, useState } from "react";
import Video, { VideoProperties } from "react-native-video";
import { Button, useWindowDimensions } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import {
  fonts,
  Container,
  ContainerRoomNotFound,
  TitleRoomNotFound,
  DescriptionRoomNotFound,
  ButtonRoomNotFound,
  ButtonRoomNotFoundText,
  Content,
  Controls,
} from './styles';
import { View } from "react-native";
import { Seekbar } from "../../components/seekbar";

export interface OnProgressData {
  currentTime: number;
  playableDuration: number;
  seekableDuration: number;
}


export function Player({ navigation: { navigate }, route }: any) {

  const {
    width,
    height,
  } = useWindowDimensions();

  if (!route.params.url) {
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

  const [umounted, setUmounted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [onLoad, setOnLoad] = useState({
    duration: 0,
  })
  const [onProgress, setOnProgress] = useState<OnProgressData>({
    currentTime: 0,
    playableDuration: 0,
    seekableDuration: 0,
  } as OnProgressData);
  const videoReference = useRef<VideoProperties>()

  useFocusEffect(() => {
    const enterScreen = async () => {
      // await fullscreen.addBackButton();
      setIsPlaying(true);
    }
    enterScreen();
    // fullscreen.disableExtend();
  })

  return (
    <Container>
      <Video
        style={{
          width,
          height: height
        }}
        //@ts-ignore
        ref={videoReference}
        //@ts-ignore
        onLoad={(e) => setOnLoad(e.nativeEvent)}
        controls={false}
        playInBackground={false}
        allowsExternalPlayback
        // onLoad={(e) => console.log(e)}
        paused={!isPlaying}
        resizeMode="contain"
        //@ts-ignore
        onProgress={(e) => setOnProgress(e.nativeEvent)}
        source={{
          uri: route.params.url
        }}
        currentTime={onProgress.currentTime}
        pictureInPicture
        muted={false}
      />
      <Content>
        <View style={{ paddingRight: 20, alignItems: "flex-end" }}>
          {/* <Card >
            <DescriptionLesson>O focus evento dispara quando uma tela entra em foco. Como é um evento,</DescriptionLesson>
          </Card> */}
        </View>
        {/* <DescriptionLesson>O focus evento dispara quando uma tela entra em foco. Como é um evento, seu ouvinte não será chamado se a tela já estiver focada quando você se inscreveu no evento. Isso também não fornece uma maneira de executar uma função de limpeza quando a tela fica sem foco. Você pode se inscrever no blur evento e lide com ele manualmente, mas pode ficar confuso. Você geralmente precisará lidar componentDidMount e</DescriptionLesson> */}
        <Controls>
          {isPlaying
            ? <Button
              title={"pause"}
              color={"red"}
              onPress={() => setIsPlaying(false)}
            />
            : <Button
              title={"play"}
              color={"red"}
              onPress={() => setIsPlaying(true)}
            />}
          <Button title="fullscreen" color={"red"} onPress={async () => { }} />
        </Controls>
        <Seekbar
          currentTime={onProgress.currentTime}
          duration={onLoad.duration}
        />
      </Content>
    </Container>
  );
}