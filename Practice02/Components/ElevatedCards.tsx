import { ScrollView, Text, View, ViewStyle } from "react-native";
import React from "react";
import styles from "../styles/styles";

type CardProps = {
  label: string;
  style: ViewStyle;
};

const Card = ({ label, style }: CardProps) => {
  return (
    <View style={[styles.shadow, styles.ElevatedCards, style]}>
      <Text
        style={{
          color: "white",
          fontSize: 14,
          fontWeight: "bold",
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.textStyle}>Elevated Cards</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Card label="Pink" style={styles.card1} />
          <Card label="Green" style={styles.card2} />
          <Card label="Gray" style={styles.card3} />
          <Card label="Blue" style={styles.card4} />
        </View>
      </ScrollView>
    </View>
  );
}
