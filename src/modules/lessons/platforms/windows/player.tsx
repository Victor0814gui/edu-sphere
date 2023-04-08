import Video from "react-native-video";
import { useWindowDimensions } from "react-native";
import { useNavigation,useRoute } from "@react-navigation/native";

import { 
  fonts,
  Container,
  ContainerRoomNotFound,
  TitleRoomNotFound,
  DescriptionRoomNotFound,
  ButtonRoomNotFound,
  ButtonRoomNotFoundText,
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
  // const viewRef = useRef<View>(null);
  // const [ paused,setPaused ] = useState(true);
  // const [ fullscreen,setFullscreen ] = useState(false);
  // const videoRef = useRef<Video>(null);
  // const animatedView = useRef(new Animated.Value(-40)).current;
  
  // const bigScale = () => {
  //   Animated.spring(animatedView,{
  //     toValue: 300,
  //     useNativeDriver: true,
  //   }).start()
  // }

  // const nomalScale = () => {
  //   Animated.spring(animatedView,{
  //     toValue: 0,
  //     useNativeDriver: true,
  //   }).start();
  // }

  // const smallScale = () => {
  //   Animated.spring(animatedView,{
  //     toValue: -120,
  //     useNativeDriver: true,
  //   }).start();
  // }

  // const onKeyDown = ({nativeEvent}) => {
  //   console.log(nativeEvent.key)
    
  //   if(nativeEvent.key === "Control"){
  //     bigScale()
  //   }
  //   if(nativeEvent.key === "F"){
  //     nomalScale()
  //   }
  //   if(nativeEvent.key === " "){
  //     setPaused(!paused)
  //   }
  //   if(nativeEvent.key === "O"){
  //     console.log("fullscreen")
  //     setFullscreen(true)
  //   }

  //   if(nativeEvent.key === "Escape"){
  //     setFullscreen(false)
  //   }
  // }

  // const handleControlsWrapper = () => {
  //   // setPaused(!paused) 
  //   viewRef?.current?.focus?.()
  // }

  // useEffect(() => {
  //   viewRef?.current?.focus?.();
  // }, []);


  return (
    <Container
      // ref={viewRef}
      // // style={{flex: 1}}
      // onMagicTap={() => viewRef?.current?.focus?.()}
      // focusable={true}
      // enableFocusRing={true}
      // onTouchEndCapture={(e) => console.log(e)}
      // validKeysDown={['Enter', 'Esc', 'rightArrow']}
      // onKeyDown={onKeyDown}
    >
      <Video
        style={{
          width,
          height
        }}
        // ref={videoRef}
        controls={true}
        playInBackground={true}
        // paused={paused}
        allowsExternalPlayback
        onLoad={(e) => console.log(e)}
        paused={false}
        resizeMode="contain"
        // fullscreen={fullscreen}
        // onVideoLoad={(e) => console.log(e)}
        // onSeek={(e) => console.log(e)}
        // onProgress={(e) => console.log(e.nativeEvent)}
        // onLoad={(e) => console.log(e)}
        source={{
          uri: url
        }}
        muted={false}

      />
      {/* <VideoContainerControls onPress={handleControlsWrapper}>
        <DescriptionContainer>
          {/* <Description style={aditionalStyles.description}>
            No trailer, é possível ver um paralelo com o filme 2001 — um clássico dos cinemas que tenta trazer uma explicação para a evolução da humanidade. Em tom de sátira, o teaser mostra que a Barbie agiu na evolução das meninas e mulheres da mesma forma que o monolito da ficção científica.
          </Description> 
           <ProgressView 
            progress={0.3}
            progressTintColor={COLORS.green_500}
            trackTintColor={COLORS.grey_180}
          /> 
        </DescriptionContainer>
        <Controls style={{
          transform:[{ translateY: animatedView }]
        }}>
          <Pressable onPress={() => setPaused(!paused)}>
            {paused ? <Icon name="play" color={COLORS.grey_400} size={35} /> : <Icon name="pause" color={COLORS.grey_400} size={35} />}
          </Pressable>
        </Controls>
      </VideoContainerControls> */}
    </Container>
  );
}