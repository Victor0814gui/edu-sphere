import React,{ useEffect,useState,useRef,useCallback } from "react";
import { Text,View,FlatList,Platform,SectionList,Animated,PressableProps, SectionListData, ImageSourcePropType } from "react-native";
import {
  fonts,
  Container,
  SubHeaderContent,
  AmountOfQuestions,
  ContainerSectionCardRoom,
  HeaderSectionTitle,
  ButtonRoomControlListContainer,
  ButtonRoomControlList,
  ButtonRoomIcon,
} from "./styles";
import { CardRoom } from "../components/card-room";
import { arrowLeft, arrowRight } from "../assets/icons";
import { api } from "../../../shared/services/api";

type CardType = {
  title: string;
  avatarUrl: string;
  nickname: string;
  tags: string[];
  id: string;
}

type CardSectionType = {
  title: string;
  data: CardType[];
}

type ButtonListRoomControlProps = PressableProps & {
  icon: ImageSourcePropType;
  position: "left" | "right";
}

type RenderSectionListProps = {
  section:{
    title: string;
    data: CardType[];
  }
}

const ButtonListRoomControl = ({ 
  icon,
  position,
  ...rest 
}: ButtonListRoomControlProps) => {
  const animatedButtonSizeRef = useRef(new Animated.Value(1)).current;

  const onMouseEnter = () => {
    Animated.spring(animatedButtonSizeRef,{
      toValue: 1.5,
      useNativeDriver: true,
    }).start()
  }
  
  const onMouseLeave = () => {
    Animated.spring(animatedButtonSizeRef,{
      toValue: 1,
      useNativeDriver: true
    }).start()
  }
  return (
    //@ts-ignore
    <ButtonRoomControlListContainer 
      style={[
        {transform:[{scale: animatedButtonSizeRef}]},
        position === "left" ? { left: 0 } : { right: 0 }
      ]}
      //@ts-ignore
      onMouseEnter={() => onMouseEnter()}
      // onMouseLeave={() => onMouseLeave()}
    >
      <ButtonRoomControlList {...rest}>
        <ButtonRoomIcon source={arrowLeft}/>
      </ButtonRoomControlList>
    </ButtonRoomControlListContainer>
  )
}

const ButtonsControlsList = (props:{
  backIndexList:() => void,
  nextIndexList:() => void,
}) => {
  return(
    <>
    <ButtonListRoomControl
      onPress={props.backIndexList}
      icon={arrowLeft}
      position="left"
    />
    <ButtonListRoomControl
      onPress={props.nextIndexList}
      icon={arrowRight}
      position="right"
    />
    </>
  )
}

const CardsRoomSection = ({section: {title,data: itemsData}}:RenderSectionListProps) => {
  console.log("[RenderSectionList]-atualizou")
  const [ onHover,setOnHover ] = useState(false);
  const [ index,setIndex ] = useState(0)
  const horizontalListRef = useRef<FlatList | null>(null);
  const mobile = Platform.OS === "android";
  
  const nextIndexList = useCallback((indexTotal: number) => {
    if( index + 1 <indexTotal){
      setIndex(index + 1)
      horizontalListRef.current?.scrollToIndex({index: index + 1})
    }
  },[index]);
  
  const backIndexList = useCallback(() => {
    if(index > 0){
      setIndex(index - 1)
      horizontalListRef.current?.scrollToIndex({index: index - 1})
    }
  },[index]);
  
  return (
    <ContainerSectionCardRoom
      //@ts-ignore
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <HeaderSectionTitle style={fonts.headerSectionTitle}>{title}</HeaderSectionTitle>
      <FlatList
        ref={horizontalListRef}
        data={itemsData}
        renderItem={({item,index}) => <CardRoom index={index} {...item}/>}
        keyExtractor={(_,index) => _.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={mobile}
      />
      {(onHover) && 
        <ButtonsControlsList
          nextIndexList={() => nextIndexList(itemsData.length)}
          backIndexList={backIndexList}
        />
      }
    </ContainerSectionCardRoom>
  );
};

export const Dashboard = () => {

  const [ data,setData ] = useState<CardSectionType[]>([]);

  const renderSectionHeader = ({section}:{section: SectionListData<CardType, CardSectionType>}) => {
    console.log({section})
    return (
      <CardsRoomSection section={section}/> 
    )
  }


  useEffect(() => {
    const fetchRoomsData = async () => {
      const roomsDataResponse = await api.get("/rooms");
      setData (roomsDataResponse.data);
    }
    fetchRoomsData();
  },[])
  
  return(
    <Container>
      <SubHeaderContent>
        <Text style={fonts.TitleRoom}>Sala React Q&A</Text>
        <AmountOfQuestions>
          <Text style={fonts.TitleRoomText}>42 perguntas</Text>
        </AmountOfQuestions>
      </SubHeaderContent>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) =>null}
        renderSectionHeader={renderSectionHeader}
      />
    </Container>
  );
};