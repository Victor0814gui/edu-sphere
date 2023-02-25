import { memo, useCallback } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { 
  font,
  Container,
  ContainerContent,
  Title,
  Footer,
  ProfileAvatar,
  NickName,
  ContainerTags,
  TagText,
} from "./styles";



export const CardRoomComponent = (props:{
  id: string
  title: string,
  avatarUrl: string,
  nickname: string,
  tags: string[],
  index: number
}) => {
  const { navigate } = useNavigation()

  const handleNavigationRoom = useCallback(() => {
    navigate("room",{ roomId: "ASD-ASDF-ASDF" })
  },[])

  const containerTagsComponent = props.tags.map((tag) => 
    <TagText style={font.tagText}>{tag}</TagText>
  )

  return(
    <Container onPress={handleNavigationRoom}>
      {({pressed}) => (
        <ContainerContent pressed={pressed}>
          {pressed && <ActivityIndicator style={font.progressIndicator}/>}
          <Title style={font.title}>{props.title}</Title>
          <Footer>
            <ProfileAvatar resizeMode="contain" source={{ uri: props.avatarUrl }}/>
            <NickName style={font.nickName}>{props.index}{props.nickname}</NickName>
            <ContainerTags>{containerTagsComponent}</ContainerTags>
          </Footer>
        </ContainerContent>
      )}
    </Container>
  )
}

export const CardRoom = memo(CardRoomComponent);