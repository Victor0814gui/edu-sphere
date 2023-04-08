import { useState,useEffect } from "react";
import { COLORS } from "../../../../shared/theme";
import { api } from "../../../../shared/services/api";
import { useNavigation } from "@react-navigation/native";
import { 
  additionalStyles,
  Container,
  ListLessonsSubjectContainer,
  ListLessonsSubject,
  LessonSujectContainer,
  LessonSujectIconContainerLeft,
  LessonSujectContainerContent,
  LessonSujectIconContainerRight,
  LessonSujectContainerContentText,
  LessonSujectContainerDescriptionContent,
  LessonSujectClassroomTimeText,
  ListLessonsSubjectSeparator,
} from "./styles"

import Icon from "react-native-vector-icons/Feather";


type LessonsTypes = {
  description: string;
  sources: string[];
  subtitle: string;
  thumb: string;
  title: string;
}

type RenderItemProps = {
  item: LessonsTypes;
  index: number;
}


const LessonSubject = ({ item,index }:RenderItemProps) => {
  const [ onHover,setOnHover ] = useState(false);
  const [ isPressed,setIsPressed ] = useState(false);
  const { navigate } = useNavigation();

  const handlerPress = () => {
    setIsPressed(true)
    navigate("player",{ url: item.sources[0] })
  }
  const onPressIn = () => {
    setIsPressed(true)
  }

  const onPressOut = () => {
    setIsPressed(false)
  }
  return(
    <LessonSujectContainer
      onHoverIn={(e) => setOnHover(true)}
      onHoverOut={(e) => setOnHover(false)}
      onHover={onHover}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      isPressed={isPressed}
      onPress={handlerPress}
    >
      <LessonSujectIconContainerLeft>
        {/* <Icon name="play" size={20} color={COLORS.green_500}/> */}
      </LessonSujectIconContainerLeft>
      <LessonSujectContainerContent>
        <LessonSujectContainerContentText style={additionalStyles.lessonSujectContainerContentText}>{item.subtitle}</LessonSujectContainerContentText>
        <LessonSujectContainerDescriptionContent>
          <LessonSujectClassroomTimeText style={additionalStyles.lessonSujectClassroomTimeText}>14m : 35s</LessonSujectClassroomTimeText>
        </LessonSujectContainerDescriptionContent>
      </LessonSujectContainerContent>
      <LessonSujectIconContainerRight>
        <Icon name="play" size={20} color={COLORS.green_500}/>
      </LessonSujectIconContainerRight>
    </LessonSujectContainer>
  )
}

export const PlaylistLessons = () => {
  const [ lessonData,setLessonsData ] = useState<LessonsTypes[]>([])
  const  ItemSeparatorComponent = () =>  <ListLessonsSubjectSeparator/>
  const renderItem = (props:RenderItemProps) => <LessonSubject {...props}/>
  const ListEmptyComponent = () => (  
    <LessonSujectContainerContentText>ainda não há items aqui</LessonSujectContainerContentText>
  )

  useEffect(() => {
    const getDataLessons = async () => {
      try{
        const lessons = await api.get("lessons") as { data: LessonsTypes[]};
        setLessonsData(lessons.data);
      }catch(err){

      }
    }
    getDataLessons();
  },[])

  return(
    <Container>
      <ListLessonsSubjectContainer>
        <ListLessonsSubject
          data={lessonData}
          //@ts-ignore
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListEmptyComponent={ListEmptyComponent}
        />
      </ListLessonsSubjectContainer>
    </Container>

  )
}