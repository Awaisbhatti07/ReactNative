import { Button, Text, View } from "react-native";
import React from "react";

import styles from "../styles/detailsStyles";

// Navigations
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../src/Navigations";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details({ route }: DetailsProps) {
  const { productId } = route.params; // Method 1 to get params easy
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details: {productId}</Text>
      <Button
        title="Go to Home"
        // onPress={() => navigation.navigate('Home')}
        // onPress={() => navigation.goBack()} // for 1 screen back

        // onPress={() => navigation.pop()} // we should also give pop a let say i am on screen 4 if i pass 3 it pops 3 screens

        onPress={() => navigation.popToTop()} // empty Navigation Stack completly pop to root
      />
    </View>
  );
}
