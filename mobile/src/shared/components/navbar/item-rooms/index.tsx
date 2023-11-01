





import {
  Container,
  Text,
} from "./styles";


type ItemRoomProps = {
  name: string;
  status: string;
}


export const ItemRoom = ({ name, status }: ItemRoomProps) => {
  return (
    <Container>
      <Text>name</Text>
    </Container>
  )
}