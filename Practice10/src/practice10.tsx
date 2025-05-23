import { Alert, Button, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import styles from "../styles/styles";
import Icon from "react-native-vector-icons/MaterialIcons";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Home from "../screens/Home";
import Details from "../screens/Details";

export type RootStackParamList = {
  Home: undefined;
  Details: { product: Product };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function practice10() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLargeTitle: true,
            headerTitle: "Trending Products",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => Alert.alert("Menu pressed")}
              >
                <Icon name="menu" size={24} color="#000" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTitle: "Product details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
