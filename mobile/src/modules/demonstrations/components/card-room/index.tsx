import { memo, useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  font,
  Container,
  ContainerContent,
  Title,
  Header,
  Tag,
  TagText,
  Content,
  Duration,
  Author,
  Difficulty,
} from "./styles";

import { Clock, User, ChartBar, Play } from "phosphor-react-native"



export const CardRoomComponent = (props: {
  id: string
  title: string,
  avatarUrl: string,
  nickname: string,
  tags: string[],
  index: number
}) => {
  const [onHover, setOnHover] = useState(false);
  const [isPressed, setIsPressed] = useState(false)
  const { navigate } = useNavigation()

  const handleNavigationRoom = useCallback(() => {
    navigate("room", { roomId: "ASD-ASDF-ASDF" })
  }, [])

  const containerTagsComponent = props.tags.map((tag) =>
    <TagText style={font.tagText}>{tag}</TagText>
  )

  const onPressIn = () => {
    setIsPressed(true);
  }

  const onPressOut = () => {
    setIsPressed(false);
  }

  const onHoverIn = () => {
    setOnHover(true);
  }

  const onHoverOut = () => {
    setOnHover(false);
  }

  return (
    <Container
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onPress={handleNavigationRoom}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      pressed={isPressed}
      hover={onHover}
    >
      <ContainerContent>
        <Header>
          <Title style={font.title}>{props.title}</Title>
        </Header>
        <Content>
          <Clock size={18} color="#f2f2f2" weight="light" />
          <Duration style={font.duration}>14:21min</Duration>
          <User size={18} color="#f2f2f2" weight="light" />
          <Author style={font.author}>Victor Guilherme</Author>
          <ChartBar size={18} color="#f2f2f2" weight="light" />
          <Difficulty style={font.difficulty}>Alta</Difficulty>
          <Tag>
            <Play size={18} color="#f2f2f2" weight="light" />
            <TagText>Não assitido</TagText>
          </Tag>
        </Content>
      </ContainerContent>
    </Container>
  )
}

export const CardRoom = memo(CardRoomComponent);