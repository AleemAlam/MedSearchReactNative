import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SearchSuggestion({ data }) {
  return (
    <>
      {data.map((item, i) => (
        <Text
          key={i}
          style={{
            top: 170,
            backgroundColor: "white",
            width: "90%",
            padding: 10,
            fontFamily: "Roboto",
            fontSize: 16,
            textTransform: "capitalize",
          }}
        >
          {item.name}
        </Text>
        // <View style={styles.container} key={i}>
        //   <Text style={styles.textStyle}>{item}</Text>
        // </View>
      ))}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    padding: 10,
    margin: 2,
    borderRadius: 5,
    textAlign: "left",
    alignItems: "center",
  },
  textStyle: {
    textAlign: "left",
  },
});
