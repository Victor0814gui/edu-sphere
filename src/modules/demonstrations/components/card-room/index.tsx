import { memo,useState,useId } from "react";
import { FONTS } from "../../../../shared/theme";
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
  id?: string
  title: string,
  avatarUrl: string,
  nickname: string,
  tags: string[],
}) => {
  const [ pressed,setPressed ] = useState(false);
  const { navigate } = useNavigation()

  return(
    <Container onPressIn={() => setPressed(true)} onPress={() => navigate("room",{ roomId: "ashldfjhlakjsdlkhajsdfjkh" })}>
      <ContainerContent pressed={pressed}>
        <Title style={font.title}>{props.title}</Title>
        <Footer>
          <ProfileAvatar resizeMode="contain" source={{ uri: props.avatarUrl }}/>
          <NickName style={font.nickName}>{props.nickname}</NickName>
          <ContainerTags>
            {props.tags.map((tag) => (
              <TagText style={font.tagText}>{tag}</TagText>
            ))}
          </ContainerTags>
        </Footer>
        {pressed && <ActivityIndicator style={{ position: "absolute",alignSelf: "center",marginTop: "50%" }}/>}
      </ContainerContent>
    </Container>
  )
}

export const CardRoom = memo(CardRoomComponent);