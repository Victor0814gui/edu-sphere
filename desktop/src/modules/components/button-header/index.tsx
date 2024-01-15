import {
  useState,
  useRef
} from "react"
import { House } from "phosphor-react-native";

import {
  font,
  ViewContainerOnHover,
  ButtonCopyRoomCode,
  CircleIconCopy,
  CircleIconImage,
  ButtonCopyRoomCodeText,
} from "./styles";

type ButtonBoderProps = {
  label: string;
  borderActive?: boolean;
  onPress?: () => void;
}



export const ButtonBorder = ({ onPress, label, borderActive = false }: ButtonBoderProps) => {
  const [onHover, setOnHover] = useState(false);

  return (
    // @ts-ignore
    <ViewContainerOnHover onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
      <ButtonCopyRoomCode onPress={onPress} onHover={onHover}>
        {borderActive &&
          <CircleIconCopy onHover={onHover}>
            <House size={32} color="#f2f2f2" weight="fill" />
          </CircleIconCopy>
        }
        <ButtonCopyRoomCodeText onHover={onHover} style={font.buttonText}>{label}</ButtonCopyRoomCodeText>
      </ButtonCopyRoomCode>
    </ViewContainerOnHover>
  )
}