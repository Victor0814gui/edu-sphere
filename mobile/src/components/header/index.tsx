import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler"
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { Avatar } from "../avatar";
import { COLORS } from "../../theme";
import { Heading } from "../heading";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Avatar mode="medium" />
        <View>
          <Heading>bem vindo,</Heading>
          <Heading mode="big">Victor Guilherme</Heading>
        </View>
      </View>
      <View style={styles.actions}>
        <Ionicons name="settings-sharp" size={24} color={COLORS.grey_800} />
      </View>
    </View>
  );
}