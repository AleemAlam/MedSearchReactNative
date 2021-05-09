import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  Image,
} from "react-native";

export default function Search({ handleChange }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 5,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        position: "absolute",
        top: 100,
      }}
    >
      <TextInput
        placeholder="Search any product here..."
        placeholderTextColor="#B0B0B0"
        style={{
          paddingHorizontal: 20,
        }}
        onChangeText={handleChange}
      />
      <View
        style={{
          backgroundColor: "#000000",
          width: 30,
          height: 30,
          borderRadius: 8,
          marginLeft: 80,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("../assets/searc.png")} />
      </View>
    </View>
  );
}
