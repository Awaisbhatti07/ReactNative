import { Text, View, Linking, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/actionStyle";

export default function ActionCard() {
  function openWebsite(link: string) {
    console.log(link);
    Linking.openURL(link).catch((err) =>
      console.error("An error occurred", err)
    );
  }

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            what's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          style={styles.cardImage}
          // source={require("../../Practice01/src/assets/images/trending.jpg")}
          source={{ uri: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={4}>
            JavaScript ES12 (ECMAScript 2021) is the latest version of the
            JavaScript programming language. It includes new features and
            improvements to make coding easier and more efficient.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://en.wikipedia.org/wiki/Cristiano_Ronaldo')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}