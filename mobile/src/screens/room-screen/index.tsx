import { View, Text, FlatList } from "react-native";

import { styles } from "./styles";
import { Card } from "../../components/card";
import { useCallback } from "react";
import { Header } from "../../components/header";

export function RoomsScreen() {


  const renderItem = useCallback((item: any) => (
    <Card />
  ), [])

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={["1", "2", "3", "4", "5", "6", "7"]}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </View>
  );
}