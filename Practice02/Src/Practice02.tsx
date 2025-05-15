// shortcut to add below snippet in empty file rnfe

import { SafeAreaView, View, Text, ScrollView } from "react-native";
import React from "react";
import FlatCards from "../Components/FlatCards";
import ElevatedCards from "../Components/ElevatedCards";
import FancyCards from "../Components/FancyCard";
import ActionCard from "../Components/ActionCard";

const Practice02 = () => {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
          <ActionCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Practice02;
