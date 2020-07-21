import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Constants from "./Constants";
import Head from "./Head";
import { GameLoop } from "./GameLoop";

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
          width: size + 20,
          height: size + 20,
          flex: null,
          backgroundColor: "#000000"
        }}
        systems={[GameLoop]}
        entities={{
          head: {
            position: [0, 0],
            xspeed: 0,
            yspeed: 1,
            updateFrequency: 10,
            nextMove: 10,
            size: Constants.cell_size,
            renderer: <Head />
          }
        }}
      />
      <View style={styles.controls}>
        <View style={styles.controlRow}>
          <TouchableOpacity
            onPress={() => {
              engine.dispatch({ type: "move-up" });
            }}
          >
            <View style={styles.control} />
          </TouchableOpacity>
        </View>
        <View style={styles.controlRow}>
          <TouchableOpacity
            onPress={() => {
              engine.dispatch({ type: "move-left" });
            }}
          >
            <View style={styles.control} />
          </TouchableOpacity>
          <View style={[styles.control, { backgroundColor: null }]} />
          <TouchableOpacity
            onPress={() => {
              engine.dispatch({ type: "move-right" });
            }}
          >
            <View style={styles.control} />
          </TouchableOpacity>
        </View>
        <View style={styles.controlRow}>
          <TouchableOpacity
            onPress={() => {
              engine.dispatch({ type: "move-down" });
            }}
          >
            <View style={styles.control} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  controls: {
    width: 300,
    height: 300,
    flexDirection: "column"
  },
  controlRow: {
    height: 100,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  control: {
    width: 100,
    height: 100,
    backgroundColor: "blue"
  }
});
