





import { useEffect, useRef, useState } from "react";
import {
  styles,
  Container,
  Avatar,
  Content,
  Text,
  Button,
} from "./styles";
import { Animated } from "react-native";


type ItemRoomProps = {
  name: string;
  status: string;
}

const Actions = () => {
  const animations = useRef(new Animated.Value(0.7)).current

  useEffect(() => {
    Animated.timing(animations, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true
    }).start();
  }, [])

  return (
    <Button style={{ transform: [{ scale: animations }] }}>
    </Button>
  )
}


export const ItemRoom = ({ name, status }: ItemRoomProps) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <Container
      onTouchStart={(e) => {
        //@ts-ignore
        if (e.nativeEvent.isRightButton) {
          setOnHover(!onHover);
        }
      }}
    // pointerEvents="auto"
    >
      <Avatar source={{ uri: "https://avatars.githubusercontent.com/u/92493696?v=4" }} />
      <Content>
        <Text numberOfLines={1} style={styles.text}>Como criar uma nova sala </Text>
        <Text numberOfLines={1} style={styles.description}>naa a sd f</Text>
      </Content>
      {onHover && <Actions />}
    </Container>
  )
}