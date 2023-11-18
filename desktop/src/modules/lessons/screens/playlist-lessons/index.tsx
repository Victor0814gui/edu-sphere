import { useState, useEffect, useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
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
import { Trasition } from "@shared/components/transition";
import { api, baseUrl } from "@shared/services/api";
import { COLORS } from "@shared/theme";


type LessonsTypes = {
  description: string;
  sources: string[];
  subtitle: string;
  thumb: string;
  title: string;
  duration: number;
}

type RenderItemProps = {
  item: LessonsTypes;
  index: number;
}


const LessonSubject = ({ item, index }: RenderItemProps) => {
  const [onHover, setOnHover] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const { navigate } = useNavigation();

  // console.log(item.sources[0]);

  const handlerPress = () => {
    setIsPressed(true)
    navigate("player", { url: item.sources[0], duration: item.duration })
  }

  const onPressIn = () => {
    setIsPressed(true)
  }

  const onPressOut = () => {
    setIsPressed(false)
  }

  return (
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
        <Icon name="play" size={20} color={COLORS.green_500} />
      </LessonSujectIconContainerRight>
    </LessonSujectContainer>
  )
}

export const PlaylistLessons = () => {
  const [lessonData, setLessonsData] = useState<LessonsTypes[]>([])
  const ItemSeparatorComponent = useCallback(() => <ListLessonsSubjectSeparator />, [])


  const renderItem = useCallback((props: RenderItemProps) => <LessonSubject {...props} />, [])

  const ListEmptyComponent = useCallback(() => (
    <LessonSujectContainerContentText>ainda aulas disponiveis aqui</LessonSujectContainerContentText>
  ), [])

  const getDataLessons = async () => {
    try {
      const lessons = await api.get('/lessons');
      // const lessonsResponse = await lessons.json() as { data: LessonsTypes[] };
      // console.log(lessons.json())
      setLessonsData(lessons.data)
    } catch (err) {

    }
  }

  useFocusEffect(() => {
    getDataLessons();
  });

  return (
    <Trasition>
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
    </Trasition>
  )
}