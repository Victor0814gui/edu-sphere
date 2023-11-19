import { View } from "react-native";
import { Heading } from "../heading";



import { styles } from "./styles"


export function Preview() {

  return (
    <View style={styles.container}>
      <Heading>@victor1408gui</Heading>
      <Heading mode="small"> asdfa sdfa sdfasdf  asd f asd f as df adf</Heading>
    </View>
  )
}