import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Separator = () => {
  return <View style={[styles.seprator, { width: "100%" }]}></View>;
};
const styles = StyleSheet.create({
  seprator: {
    width: '100%',
    height: 0.8,
    backgroundColor: "#CAD5E2",
  },
});

export default Separator;
