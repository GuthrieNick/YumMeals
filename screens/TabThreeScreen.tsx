import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/pancake.webp")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text>Hello sir</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});
