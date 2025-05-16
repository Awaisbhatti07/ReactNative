// shortcut to add below snippet in empty file rnfe

import { SafeAreaView, View, Text, ScrollView } from "react-native";
import React from "react";
import FlatCards from "../Components/FlatCards";
import ElevatedCards from "../Components/ElevatedCards";
import FancyCards from "../Components/FancyCard";
import ActionCard from "../Components/ActionCard";
import ContactList from "../Components/ContactList";

const Practice02 = () => {
  return (
    <SafeAreaView style={{ marginBottom: 50 }}>
      <View>
        <ScrollView>
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
          <ContactList />
          <ActionCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Practice02;
