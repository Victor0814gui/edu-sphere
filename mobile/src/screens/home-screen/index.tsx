import { View, FlatList, TextInput } from "react-native";

import { styles } from "./styles";
import { useCallback } from "react";
import { Header } from "../../components/header";
import { Heading } from "../../components/heading";
import { Preview } from "../../components/preview";
import { Avatar } from "../../components/avatar";

export function HomeScreen() {

  const keyExtractor = useCallback((item: string) => item, [])

  return (
    <View style={styles.container}>
      <Header />
      <TextInput style={styles.input} />
      <FlatList
        data={["1", "2", "3", "4", "5", "6", "7"]}
        renderItem={(item) => (
          <Preview />
        )}
        style={{
          flexGrow: 0,
        }}
        horizontal
        keyExtractor={keyExtractor}
      />
      <FlatList
        data={["1", "2", "3", "4", "5", "6", "7"]}
        renderItem={(item) => (
          <View style={styles.item}>
            <Avatar mode="big" url="https://avatars.githubusercontent.com/u/2254731?v=4" />
            <Heading>@victor</Heading>
          </View>
        )}
        style={{
          flexGrow: 0,
        }}
        horizontal
        keyExtractor={keyExtractor}
      />
    </View>
  );
}