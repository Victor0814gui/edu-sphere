import { useState } from "react";
import { ScrollView,TouchableHighlight,View,Switch } from "react-native";
//@ts-ignore
import { Flyout } from "react-native-windows";
import { COLORS } from "../../../shared/theme";

import { 
  styles,
  Container,
  TextContainer,
  SectionSwitch,
  ContainerOnMouseHover,
  SwitchText,
  OptionsDescription,
  OptionsDescriptionText,
} from "./styles";

const description = "Os Ursos constituem uma família de mamíferos plantígrados, geralmente de grande porte, contendo os ursos e os pandas. Algumas características comuns dos ursos são pelagem espessa, rabo curto, o olfato desenvolvido e as garras não retráteis.";


export function Profile():JSX.Element{
  const [ showFlyout1,setShowFlyout1 ] = useState(false);
  return(
    <ScrollView>
      <Container>
        <TextContainer>Profile</TextContainer>
        <SectionSwitchContainer  label="criar mensagens com dados moveis"/>
        <SectionSwitchContainer label="tornar perfil publico ao criar e editar questions"/>
        <SectionSwitchContainer label="tonar minhas questions editaveis ao publico"/>
        <OptionsDescription>
          <OptionsDescriptionText style={styles.optionsDescriptionText}>{description}</OptionsDescriptionText>
        </OptionsDescription>
        <SectionSwitchContainer label="aceitar mensagens automaticas ao criar novos dados"/>
        <OptionsDescription>
          <OptionsDescriptionText style={styles.optionsDescriptionText}>{description}</OptionsDescriptionText>
        </OptionsDescription>
      </Container>
    </ScrollView>
  )
}


function SectionSwitchContainer({label}:{label: string}){
  const [isEnabled, setIsEnabled] = useState(false);
  const [onMouse, setOnMouse] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ContainerOnMouseHover
    //@ts-ignore
      onMouseEnter={() => setOnMouse(true)}
      onMouseLeave={() => setOnMouse(false)}
      
    >
      <SectionSwitch underlayColor={COLORS.grey_200} onMouse={onMouse} onPress={toggleSwitch}>
        <>
        <SwitchText style={styles.switchText}>{label}</SwitchText>
        <Switch
          trackColor={{ false: COLORS.grey_180, true: COLORS.green_500 }}
          thumbColor={"#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        /> 
      </>
      </SectionSwitch>
    </ContainerOnMouseHover>
  )
}
