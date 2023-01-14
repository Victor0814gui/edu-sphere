

import { useNavigation } from "@react-navigation/native";
import { FONTS } from "../../../../shared/theme";
import { 
  ButtonGoBackContainer,
  ButtonGoBackText,
} from "./styles";



export function ButtonGoBack(){
  const { goBack } = useNavigation()

  return (
    <ButtonGoBackContainer onPress={() => goBack()}>
      <ButtonGoBackText style={{fontFamily: FONTS.Roboto.Medium}}>Voltar</ButtonGoBackText>
    </ButtonGoBackContainer>
  )
}