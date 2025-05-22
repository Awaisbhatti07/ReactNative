import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import type { PropsWithChildren } from "react";

import MusicPlayer from "../screens/MusicPlayer";
import { setupPlayer, addTrack } from "../../musicPlayerService";

/* 

📌 useEffect kya hota hai?
useEffect ek React hook hai jo kisi kaam ko component ke render hone ke baad chalane ke liye use hota hai.

Yeh kaam aise ho saktay hain:

Data fetch karna (API se)

Timer start karna

Event listener lagana

Component band hone par koi safaai ka kaam (cleanup) karna

useEffect(() => {
  console.log("Component sirf 1 baar load hone par neechy array empty hai kyun k us main koi dependency nae");
}, []);

// 🔁 Below function chalta hai:
  // 1. Jab component first time render hota hai (mount hota hai)
  // 2. Jab [count] ka value badalta hai

useEffect(() => {
  console.log("Ye tab chalega jab count change hoga");
}, [count]);


useEffect(() => {...}, [])	Sirf ek baar (component mount par)
useEffect(() => {...}, [x])	Mount + jab x change ho
useEffect(() => {...})	Har render par chalega (⚠️ careful)

*/

export default function Practice08() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    debugger
    const isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }

    setIsPlayerReady(isSetup);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading player...</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
