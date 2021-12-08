import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import images from "../constants/Backgrounds";

import { Text, View } from "../components/Themed";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.cake}
        resizeMode="cover"
        style={styles.image}
      >
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
