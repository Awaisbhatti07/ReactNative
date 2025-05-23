import { Button, Text, View } from "react-native";
import React from "react";

import styles from "../styles/homeStyles";

// Navigations
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../src/Navigations";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
        title="Go to Details"
        // onPress={() => navigation.navigate('Details', { productId: '86' })} // Method 1

        // onPress={() => navigation.navigate('Details')} // Method 2

        onPress={() => navigation.push("Details", { productId: "86" })} // Method 3

        //  onPress={() => navigation.replace("Details", { productId: "86" })} // Replace a screen not push
      />
    </View>
  );
}
