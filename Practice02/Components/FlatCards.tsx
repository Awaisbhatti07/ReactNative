// shortcut to add below snippet in empty file rnfs

import { ScrollView, Text, View } from "react-native";
import styles from "../styles/styles";
import React from "react";

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.textStyle}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.flatCards, styles.card1]}>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Pink
          </Text>
        </View>
        <View style={[styles.flatCards, styles.card2]}>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Green
          </Text>
        </View>
        <View style={[styles.flatCards, styles.card3]}>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Gray
          </Text>
        </View>
        <View style={[styles.flatCards, styles.card4]}>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Blue
          </Text>
        </View>
      </View>
    </View>
  );
}
