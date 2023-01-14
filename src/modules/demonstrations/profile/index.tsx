import { useState } from "react";
import { TouchableHighlight,View,Switch } from "react-native";
import { Flyout, useWindowDimensions } from "react-native-windows";
import { COLORS } from "../../../shared/theme";

import { 
  styles,
  Container,
  TextContainer,
  SectionSwitch,
  ContainerOnMouseHover,
  SwitchText,
  ButtonOpenFlayout
} from "./styles";


export function Profile():JSX.Element{
  const [ showFlyout1,setShowFlyout1 ] = useState(false);
  return(
    <Container>
      <TextContainer>Profile</TextContainer>
      <SectionSwitchContainer  label="criar mensagens com dados moveis"/>
      <SectionSwitchContainer label="tornar perfil publico ao criar e editar questions"/>
      <SectionSwitchContainer label="tonar minhas questions editaveis ao publico"/>
      <SectionSwitchContainer label="aceitar mensagens automaticas ao criar novos dados"/>
      <ButtonOpenFlayout
        onPress={() => {
          setShowFlyout1(true);
        }}
        activeOpacity={0.2}
        underlayColor={"red"}>
        <SwitchText>Open Popup</SwitchText>
      </ButtonOpenFlayout>      
      <FlayoutContainer
        showFlyout1={showFlyout1}
        setShowFlyout1={setShowFlyout1}
      />
    </Container>

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
        {/* <Picker style={{height: 50, width: 200}}>
          <Picker.Item enabled={false} label="Option 1" value="Option 1"/>
          <Picker.Item label="Option 2" value="Option 2"/>
          <Picker.Item label="Option 3" value="Option 3"/>
        </Picker> */}
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

type FlayoutContainerType = {
  showFlyout1: boolean
  setShowFlyout1: (state: boolean) => void
}

export function FlayoutContainer({
  showFlyout1,
  setShowFlyout1,
}:FlayoutContainerType){
  const { height } = useWindowDimensions();

  return (
    <Flyout
        isOpen={showFlyout1}
        onDismiss={() => {
          setShowFlyout1(false);
        }}
        horizontalOffset={120}
        verticalOffset={height - 35}
      >
        <View style={{
          backgroundColor: COLORS.grey_270,
          padding: 12,
          flexDirection: "row",
        }}> 
          <SwitchText>This is a flyout.</SwitchText>
          <TouchableHighlight
            onPress={() => {
              setShowFlyout1(false);
            }}
            activeOpacity={0.2}
            underlayColor={"blue"}>
            <SwitchText>Close Flyout</SwitchText>
          </TouchableHighlight>
        </View>
      </Flyout>
  )
}