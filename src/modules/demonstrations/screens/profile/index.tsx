import { useEffect,useRef,useState } from "react";
import { View,Text,ScrollView,Pressable,Switch } from "react-native";
import { COLORS } from "../../../../shared/theme";
import { useNavigation } from "@react-navigation/native";
import { 
  aditionalStyles,
  Container,
  TextContainer,
  ButtonSingnOut,
  ButtonSingnOutText,
  SectionSwitch,
  ContainerOnMouseHover,
  SwitchText,
  OptionsDescription,
  OptionsDescriptionText,
} from "./styles";
import { useAuthContextProvider } from "../../../../shared/contexts/auth";

const description = "Os Ursos constituem uma família de mamíferos plantígrados, geralmente de grande porte, contendo os ursos e os pandas. Algumas características comuns dos ursos são pelagem espessa, rabo curto, o olfato desenvolvido e as garras não retráteis.";


function SectionSwitchContainer({label}:{label: string}){
  const [isEnabled, setIsEnabled] = useState(false);
  const [onMouse, setOnMouse] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ContainerOnMouseHover
      //@ts-ignore
      onMouseEnter={() => setOnMouse(true)}
      onMouseLeave={() => setOnMouse(false)}>
      <SectionSwitch onMouse={onMouse} onPress={toggleSwitch}>
        <>
        <SwitchText style={aditionalStyles.switchText}>{label}</SwitchText>
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



export const Profile = ():JSX.Element => {
  const { signOut } = useAuthContextProvider();
  const { navigate } = useNavigation()

  const onPressSignOut = () => {
    // signOut()
    navigate("player")
  }

  return(
    <ScrollView>
      <Container>
        <TextContainer>Profile</TextContainer>
        <Pressable onPress={onPressSignOut}>
          {({pressed}) => (
            <ButtonSingnOut pressed={pressed ? pressed : false} >
              <ButtonSingnOutText 
                pressed={pressed ? pressed : false}
                style={aditionalStyles.buttonSingnOutText}>sair</ButtonSingnOutText>
            </ButtonSingnOut>
          )}
        </Pressable>
        <SectionSwitchContainer  label="criar mensagens com dados moveis"/>
        <SectionSwitchContainer label="tornar perfil publico ao criar e editar questions"/>
        <SectionSwitchContainer label="tonar minhas questions editaveis ao publico"/>
        <OptionsDescription>
          <OptionsDescriptionText style={aditionalStyles.optionsDescriptionText}>{description}</OptionsDescriptionText>
        </OptionsDescription>
        <SectionSwitchContainer label="aceitar mensagens automaticas ao criar novos dados"/>
        <OptionsDescription>
          <OptionsDescriptionText style={aditionalStyles.optionsDescriptionText}>{description}</OptionsDescriptionText>
        </OptionsDescription>
      </Container>
    </ScrollView>
  )
}

