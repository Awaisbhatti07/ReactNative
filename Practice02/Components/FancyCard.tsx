import { Text, View, Image } from "react-native";
import React from "react";
import styles from "../styles/fancyStyle";

export default function FancyCards() {
  return (
    <View>
      <Text style={[styles.headingText]}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={require("../../Practice01/src/assets/images/trending.jpg")}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cartTitle}>Lahore Fort</Text>
          <Text style={styles.cardDescription}>
            Lahore Fort, fortified complex in Lahore, Pakistan, comprising
            mosques and palaces built by Mughal emperors.
          </Text>
        </View>
      </View>
    </View>
  );
}
