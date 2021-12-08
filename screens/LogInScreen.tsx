import * as React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "../components/Themed";
import images from "../constants/Backgrounds";
import { RootTabScreenProps } from "../types";

export default function LogInScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.cake}
        resizeMode="cover"
        style={styles.image}
      >
        <Text>Username:</Text>
        <TextInput style={styles.input} placeholder="Username" />

        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button
          title="Log in"
          color="#841584"
          onPress={() => {
            alert("Attempting to log in");
          }}
        />
        <TouchableOpacity
          style={styles.touchable}
          onPress={()=>
            ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT)}
        >Log in</TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
    borderColor: "grey",
    backgroundColor: '#e1e1e1'
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  touchable: {
    backgroundColor: "#841584",
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    height: "fit-content",
    width: "fit-content",
    fontFamily: 'roboto'
  },
});
