import {
  useState,
  useRef
} from "react"
import IconsHome from "../../assets/icons/copy.svg"

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



export const ButtonBorder = ({onPress,label,borderActive = false}:ButtonBoderProps) => {
  const [ onHover,setOnHover ] = useState(false);

  return(
    // @ts-ignore
    <ViewContainerOnHover onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
      <ButtonCopyRoomCode onPress={onPress} onHover={onHover}>
        {borderActive &&
          <CircleIconCopy onHover={onHover}>
            <CircleIconImage  source={IconsHome} />
          </CircleIconCopy>
        }
        <ButtonCopyRoomCodeText onHover={onHover} style={font.buttonText}>{label}</ButtonCopyRoomCodeText>
      </ButtonCopyRoomCode>
    </ViewContainerOnHover>
  )
}