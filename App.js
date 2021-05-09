import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Image, SafeAreaView, Text, View } from "react-native";
import { searchData } from "./Network/networkRequest";
import WelcomeScreen from "./Screens/WelcomeScreen";

export default function App() {
  // useEffect(() => {
  //   searchData().then((res) => console.log(res));
  // }, []);

  return (
    // <SafeAreaView style={styles.container}>
    //   <Text>Hello</Text>
    //   <StatusBar style="auto" />
    //   <Image
    //     fadeDuration={1000}
    //     blurRadius={0}
    //     source={{
    //       width: 100,
    //       height: 100,
    //       uri:
    //         "https://i.pinimg.com/236x/97/a1/07/97a10733a8482bee6cd7d20c3b6fa7d1.jpg",
    //     }}
    //   />
    // </SafeAreaView>
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
