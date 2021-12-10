import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";

export default function Procurar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Procurar</Text>
      <Button title="Descubra" onPress={() => navigation.navigate("Discover")} />
      {/* <Button  title = "Home" onPress={() => navigation.goBack("Home")} /> */}
    </View>
  );
}