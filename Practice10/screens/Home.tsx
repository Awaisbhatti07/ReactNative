import { Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import styles from "../styles/styles";

// React Navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../src/practice10";

import ProductItem from "../components/ProductItem";
import Separator from "../components/Separator";

// data
import { PRODUCTS_LIST } from "../data/constants";
import { SafeAreaView } from "react-native-safe-area-context";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: HomeProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={PRODUCTS_LIST}
          keyExtractor={(item) => item.id} // Unique Id
          ItemSeparatorComponent={Separator} // seperator Custom Views
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.push("Details", {
                  product: item,
                });
              }}
            >
              <ProductItem product={item} />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
