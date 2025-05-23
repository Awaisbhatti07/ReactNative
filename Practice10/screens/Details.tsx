import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import styles from "../styles/styles";

// react navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../src/practice10";

type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details({ route }: DetailsProps) {
  const { product } = route.params;

  return (
    <ScrollView style={styles.detailContainer}>
      <View>
        <Image style={styles.image} source={{ uri: product.imageUrl }} />
        <View>
          <Text style={styles.name}>{product.name}</Text>

          <View style={[styles.rowContainer, styles.ratingContainer]}>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{product.rating} ★</Text>
            </View>
            <Text style={styles.ratingCount}>
              ({product.ratingCount.toLocaleString()})
            </Text>
          </View>

          <View style={[styles.rowContainer, styles.priceContainer]}>
            <Text style={styles.originalPrice}>
              Rs.{product.originalPrice.toLocaleString()}
            </Text>
            <Text style={styles.discountPrice}>
              Rs.{product.discountPrice.toLocaleString()}
            </Text>
            <Text style={styles.offerPercentage}>
              Rs.{product.offerPercentage} off
            </Text>
          </View>
          {product.tags.map((tag, index) => (
            <View key={index} style={styles.badge}>
              <Text style={styles.tagBadge}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
