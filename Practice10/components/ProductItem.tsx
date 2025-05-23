import { StyleSheet, Text, View, Image } from "react-native";
import React, { PropsWithChildren } from "react";

type ProductProps = {
  product: Product;
};

export default function ProductItem({ product }: ProductProps) {

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />

      <View style={styles.childContainer}>
        <Text style={[styles.name]} numberOfLines={2}>
          {product.name}
        </Text>

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
        </View>
        <View>
          <Text style={styles.offerPercentage}>
            Rs.{product.offerPercentage} off
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },
  childContainer: {
    width: "70%",
  },
  rowContainer: {
    flexDirection: "row",
  },
  image: {
    width: "30%",
    height: 150,
    resizeMode: "contain",
  },
  name: {
    marginBottom: 4,
    fontSize: 15,
    fontWeight: "500",
  },
  ratingContainer: {
    marginBottom: 8,
  },
  priceContainer: {
    marginBottom: 12,
  },
  rating: {
    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: "center",
    backgroundColor: "#008c00",

    marginRight: 4,
  },
  ratingText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  ratingCount: {
    color: "#878787",
  },
  originalPrice: {
    fontSize: 18,
    marginRight: 4,
    fontWeight: "600",

    color: "rgba(0, 0, 0, 0.5)",
    textDecorationLine: "line-through",
  },
  discountPrice: {
    fontSize: 18,
    marginRight: 4,
    fontWeight: "600",

    color: "#000000",
  },
  offerPercentage: {
    fontSize: 17,
    fontWeight: "600",
    color: "#4bb550",
  },
});
