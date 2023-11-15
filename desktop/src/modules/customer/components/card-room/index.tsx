import { memo, useCallback, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  font,
  Container,
  ContainerContent,
  Options,
  Text,
  Title,
  HeaderData,
  HeaderInfo,
  Description,
  Separator,
  Header,
  Tag as TagLocal,
  TagText,
  Content,
  Duration,
  Author,
  Difficulty,
} from "./styles";

import { Clock, User, ChartBar, Play } from "phosphor-react-native"
import { Tag } from "../tag";
import { Flyout } from "react-native-windows";

type CardRoomProps = {
  id: string
  title: string,
  avatarUrl: string,
  nickname: string,
  tags: string[],
  index: number
}

type OnTouchStart = {
  isRightButton: boolean;
}

export const CardRoom = (props: CardRoomProps) => {
  const [onHover, setOnHover] = useState(false);
  const [isPressed, setIsPressed] = useState(false)
  const [isRightPressed, setIsRightPressed] = useState(false)
  const { navigate } = useNavigation()

  const myRef = useRef(null);

  const handleNavigationRoom = useCallback(() => {
    // @ts-ignore
    navigate("room", { questionId: "ASD-ASDF-ASDF", id: "ASD-ASDF-ASDF" })
  }, [])

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

  const onTouchStart = ({ nativeEvent }: any) => {
    if (nativeEvent.isRightButton) {
      setIsRightPressed(!isRightPressed)
    }
  }

  return (
    <Container
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onPress={handleNavigationRoom}
      onPressIn={onPressIn}
      onTouchStart={onTouchStart}
      onPressOut={onPressOut}
      pressed={isPressed}
      hover={onHover}
    >
      <ContainerContent>
        <Header>
          <HeaderData>
            <Title style={font.title}>{props.nickname}</Title>
            <Description style={font.description}>{props.title}</Description>
          </HeaderData>

        </Header>
        <Separator />
        <Content>
          <Clock size={18} color="#f2f2f2" weight="light" />
          <Duration style={font.duration}>14:21min</Duration>
          <User size={18} color="#f2f2f2" weight="light" />
          <Author style={font.author}>Victor Guilherme</Author>
          <ChartBar size={18} color="#f2f2f2" weight="light" />
          <Difficulty style={font.difficulty}>Alta</Difficulty>
          {/* <TagLocal>
            <Play size={18} color="#f2f2f2" weight="light" />
            <TagText>Não assitido</TagText>
          </TagLocal> */}
        </Content>
      </ContainerContent>
    </Container>
  )
}