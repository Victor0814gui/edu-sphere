import { useRef, useState, useEffect } from "react";
import { Animated, View } from "react-native";
import Video, { VideoProperties } from "react-native-video"
import {
  styles,
  Container,
  ContainerVideoPlayerControls,
  PlayerButton,
  PlayerButtonIcon,
} from "./styles";
import { TouchableHighlightProps } from "react-native/types";
import { House } from "phosphor-react-native"


const ButtonControlVideoPlayer = ({ icon: Icon, ...rest }: any & TouchableHighlightProps) => {
  const [onHover, setOnHover] = useState(false);

  const onMouseEnter = () => {
    setOnHover(true)
  }
  const onMouseLeave = () => {
    setOnHover(false)
  }

  return (
    <PlayerButton
      onHover={onHover}
      onPress={() => { }}
      {...rest}
      //@ts-ignore  
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Icon size={32} color="#f2f2f2" weight="fill" />
    </PlayerButton>
  )
}

export const VideoPlayer = (props: {
  messageVideoUrl: string
}) => {
  const [onHover, setOnHover] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPictureInPicture, setIsPictureInPicture] = useState(false);

  const videoRef = useRef<VideoProperties | null>(null);


  const playAndPauseVideoPlayer = () => {
    // videoRef.current?.paused
    setIsPlaying(!isPlaying)
  }

  const fullScreenVideoPlayer = () => {
    setIsFullScreen(!isFullScreen);
  }

  const pictureInPictureVideoPlayer = () => {
    setIsPictureInPicture(!isPictureInPicture);
  }

  useEffect(() => {
    setIsPlaying(true)
    return () => setIsPlaying(true)
  }, [])

  return (
    <Container
      onHover={onHover}
      //@ts-ignore  
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Video source={{ uri: props.messageVideoUrl }}
        onError={console.log}
        // ref={videoRef}
        paused={isPlaying}
        resizeMode="contain"
        style={styles.videoPlayer}
        controls={false}
        fullscreen={isFullScreen}
        onFullscreenPlayerDidDismiss={() => console.log("onFullscreenPlayerDidDismiss")}
        onFullscreenPlayerWillDismiss={() => console.log("onFullscreenPlayerWillDismiss")}
        pictureInPicture={isPictureInPicture}
        playInBackground={true}
      />
      {onHover &&
        <ContainerVideoPlayerControls>
          <ButtonControlVideoPlayer icon={House} onPress={fullScreenVideoPlayer} />
          <ButtonControlVideoPlayer icon={House} onPress={playAndPauseVideoPlayer} />
          <ButtonControlVideoPlayer icon={House} onPress={pictureInPictureVideoPlayer} />
        </ContainerVideoPlayerControls>
      }
    </Container>
  )
}