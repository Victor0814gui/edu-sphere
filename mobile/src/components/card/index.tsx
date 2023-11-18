import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler"
import { styles } from "./styles";
import { Avatar } from "../avatar";
import { Heading } from "../heading";

export function Card() {
  return (
    <RectButton style={styles.container}>
      <View style={styles.header}>
        <Avatar />
        <Text style={styles.nickname}>@victor0814gui</Text>
      </View>
      <View style={styles.section}>
        <Heading font="poppins">Como é feliz o homem que acha a sabedoria</Heading>
        <Heading font="poppins" mode="small">Como é feliz o homem que acha a sabedoria, o homem que obtém entendimento, pois a sabedoria é mais proveitosa do que a prata e rende mais do que o ouro.</Heading>
      </View>
      <View style={styles.footer}>
      </View>
    </RectButton>
  );
}