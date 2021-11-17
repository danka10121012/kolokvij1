import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function NoviScreen({ route, navigation }) {
    function handleHomePress() {
      navigation.navigate("Home");
    }

    return (
        <View>
          <Text>Hello!</Text>
        </View>
      );



}


export default NoviScreen; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});