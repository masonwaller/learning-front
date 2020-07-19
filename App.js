import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Constants from "./Constants";

export default function App() {
  const size = Constants.cell_size * Constants.grid_size;
  let engine = null;
  return (
    <View style={styles.container}>
      <GameEngine
        ref={ref => {
          engine = ref;
        }}
        style={{
          width: size,
          height: size,
          flex: null,
          backgroundColor: "#000000"
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
