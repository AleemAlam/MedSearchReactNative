import React, { useEffect, useState } from "react";
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import Search from "../Components/Search";
import SearchSuggestion from "../Components/SearchSuggestion";

import axios from "axios";
import { token } from "../utils";

export default function WelcomeScreen() {
  const [medData, setMedData] = useState([]);
  const [data, setData] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    for (let i = 1; i < 100; i++) {
      axios
        .get(
          `https://www.healthos.co/api/v1/medicines/brands?_page=${i}&_limit=${25}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setMedData([...medData, res.data]);
        })
        .catch(console.error);
    }
  }, []);

  const handleChange = (text) => {
    console.log(medData);
    if (text.length < 3) {
      return;
    }
    if (text) {
      setSearching(true);
      const temp = text.toLowerCase();
      const tempList = medData.filter((item) => {
        console.log(item["name"].toLowerCase(), temp);
        return item["name"].toLowerCase().match(temp) ? true : false;
      });
      console.log(tempList);
      setData(tempList);
    } else {
      setSearching(false);
    }
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/3595882.jpg")}
    >
      <Search handleChange={handleChange} />

      {searching && (
        <>
          <Text
            style={{
              position: "absolute",
              top: 170,
              backgroundColor: "white",
              width: "85%",
              padding: 10,
            }}
          >
            Searching...
          </Text>
          <SearchSuggestion data={data} />
        </>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  btn: {
    width: "90%",
    height: 50,
    backgroundColor: "#fc5c65",
    borderRadius: 10,
    margin: 5,
  },
  register: {
    backgroundColor: "#4ecdc4",
  },
});
