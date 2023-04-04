import { useRef,useEffect, useState } from "react";
import Video from "react-native-video";
import { Pressable,View, Animated,useWindowDimensions } from "react-native";
import { 
  Container,
  VideoContainerControls,
  DescriptionContainer,
  Description,
  Controls,
  aditionalStyles,
} from '../styles';
import Icon from "react-native-vector-icons/Feather"
import { COLORS } from "../../../../shared/theme";
import { ProgressView } from "@react-native-community/progress-view";
import { styles } from "../../../session/sign-up-step-two/styles";

export interface OnProgressData {
  currentTime: number;
  playableDuration: number;
  seekableDuration: number;
}


export function PlayerMobile() {
  const {
    width,
    height,
  } = useWindowDimensions();
  const viewRef = useRef<View>(null);
  const [ paused,setPaused ] = useState(true);
  const [ fullscreen,setFullscreen ] = useState(false);
  const videoRef = useRef<Video>(null);
  const animatedView = useRef(new Animated.Value(-40)).current;
  
  const bigScale = () => {
    Animated.spring(animatedView,{
      toValue: 300,
      useNativeDriver: true,
    }).start()
  }

  const nomalScale = () => {
    Animated.spring(animatedView,{
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }

  const smallScale = () => {
    Animated.spring(animatedView,{
      toValue: -120,
      useNativeDriver: true,
    }).start();
  }

  const onKeyDown = ({nativeEvent}) => {
    console.log(nativeEvent.key)
    
    if(nativeEvent.key === "Control"){
      bigScale()
    }
    if(nativeEvent.key === "F"){
      nomalScale()
    }
    if(nativeEvent.key === " "){
      setPaused(!paused)
    }
    if(nativeEvent.key === "O"){
      console.log("fullscreen")
      setFullscreen(true)
    }

    if(nativeEvent.key === "Escape"){
      setFullscreen(false)
    }
  }

  const handleControlsWrapper = () => {
    // setPaused(!paused) 
    viewRef?.current?.focus?.()
  }

  useEffect(() => {
    viewRef?.current?.focus?.();
  }, []);

  return (
    <Container
      ref={viewRef}
      // style={{flex: 1}}
      onMagicTap={() => viewRef?.current?.focus?.()}
      focusable={true}
      enableFocusRing={true}
      onTouchEndCapture={(e) => console.log(e)}
      validKeysDown={['Enter', 'Esc', 'rightArrow']}
      onKeyDown={onKeyDown}
    >
      <Video
        style={{
          width,
          height
        }}
        ref={videoRef}
        controls={false}
        playInBackground={true}
        paused={paused}
        allowsExternalPlayback
        fullscreen={fullscreen}
        onVideoLoad={(e) => console.log(e)}
        onSeek={(e) => console.log(e)}
        onProgress={(e) => console.log(e.nativeEvent)}
        onLoad={(e) => console.log(e)}
        source={{
          uri:"https://rr4---sn-gpv7yn7e.googlevideo.com/videoplayback?expire=1680661208&ei=eIYsZJ3fC8eYyAWe_aSQDQ&ip=37.212.2.164&id=o-ABLNIJqgZb_QQMVnem0SX11sauwujA9LIS8IDNi3gVfu&itag=22&source=youtube&requiressl=yes&spc=99c5CXkPFNHIbvf23c8VCqZITFrtlu1qE3kVcIuBxkb-MhHmCA&vprv=1&mime=video%2Fmp4&ns=lAU44GSLcEfmX9vewmFKHIgM&cnr=14&ratebypass=yes&dur=11255.385&lmt=1663598279578994&fexp=24007246&c=WEB&txp=5532434&n=EFMmFdZ9AtB-xQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALUD3qh1W6NOZ6aqfydNRkD4edlSGXXWEj6zItSYIJLOAiAte4Xdelny9jqSwfQnDhyOLP3fiD9lSV9XZP2SIaX72w%3D%3D&title=Minecraft%20Survival%20-%20Relaxing%20Longplay%2C%20Mountain%20Tunnel%20(No%20Commentary)%201.18%20(%2321)&rm=sn-cxauxaxjvh-hn9es76,sn-f5fel7z&req_id=414853e2a7aa3ee&cmsv=e&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=6G&mip=189.83.156.19&mm=30&mn=sn-gpv7yn7e&ms=nxu&mt=1680639061&mv=u&mvi=4&pl=23&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhANPpRnR7yCpNbtEZ9tr5P-G2RIaUvnyk5oGYQ-J9WHXEAiEA_yF01ziZ6ZzefJZrLr8uSCCsdH5B-q9z6KkVFcu2aLQ%3D"
        }}
        muted={false}

      />
      <VideoContainerControls onPress={handleControlsWrapper}>
        <DescriptionContainer>
          {/* <Description style={aditionalStyles.description}>
            No trailer, é possível ver um paralelo com o filme 2001 — um clássico dos cinemas que tenta trazer uma explicação para a evolução da humanidade. Em tom de sátira, o teaser mostra que a Barbie agiu na evolução das meninas e mulheres da mesma forma que o monolito da ficção científica.
          </Description> */}
          {/* <ProgressView 
            progress={0.3}
            progressTintColor={COLORS.green_500}
            trackTintColor={COLORS.grey_180}
          /> */}
        </DescriptionContainer>
        <Controls style={{
          transform:[{ translateY: animatedView }]
        }}>
          <Pressable onPress={() => setPaused(!paused)}>
            {paused ? <Icon name="play" color={COLORS.grey_400} size={35} /> : <Icon name="pause" color={COLORS.grey_400} size={35} />}
          </Pressable>
        </Controls>
      </VideoContainerControls>
    </Container>
  );
}