

import {
  additionalStyles,
  Container,
  Text,
} from "./styles";


type TagProps = {
  label: string;
  type?: "green" | "orange" | "red" | "grey";
}

export function Tag({ label, type = "green" }: TagProps) {
  return (
    <Container type={type}>
      <Text type={type} style={additionalStyles.text}>{label}</Text>
    </Container>
  )
}