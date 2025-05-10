import React from "react";
import commonStyles from './styles/commonStyles';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { JSX } from "react/jsx-runtime";

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <View style={[styles.container, styles.containerOne]}>
        <Image
          source={require("./assets/images/react.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello Awais
        </Text>
      </View>
      <View style={[styles.container, styles.containerTwo]}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello Awais
        </Text>
      </View>

      <View style={styles.hstack}>
        <View
          style={[
            styles.container,
            styles.view,
            {
              backgroundColor: "#FF0000",
              flexDirection: 'column',
              justifyContent: "center",
            },
          ]}
        >
          <Text>Item 1</Text>
          <Text>Item 2</Text>
        </View>

        <View
          style={[
            styles.container,
            styles.view,
            { backgroundColor: "blue", flexDirection: 'column' },
          ]}
        >
          <Text>Item A</Text>
          <Text>Item B</Text>
        </View>
      </View>

      <View style={[styles.container, { position: "relative" }]}>
        <View style={{ width: 100, height: 100, backgroundColor: "red" }} />
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "blue",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },

  hstack: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    marginHorizontal: 6,
    marginVertical: 6,
    borderRadius: 10,
  },

  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start", // Center vertically
    alignItems: "center", // Center horizontally
  },
  containerOne: {
    backgroundColor: "#FF0000", // Red
    flex: 2, // Take up 2/3 of available space
  },
  containerTwo: {
    backgroundColor: "#00FF00", // Green
    flex: 2, // Take up 1/3 of available space
  },
  whiteText: {
    color: "#ffffff",
    fontSize: 20,
  },
  darkText: {
    color: "#000000",
    fontSize: 20,
  },
});

export default AppPro;

/*
PART 1: flex, alignItems, and justifyContent in React Native

By default, React Native uses flexDirection: 'column', which means:

Items are laid out vertically (top to bottom).

-> justifyContent = controls vertical alignment
-> alignItems = controls horizontal alignment

1- Flex

flex: 1 means:

Take up all available space in the parent (like flex-grow in CSS).
It's most often used to fill the screen.

2- JustifyContent

Controls how children are aligned along the main axis:
(Default flexDirection = 'column' → main axis = vertical)

justifyContent: 'flex-start'   // at top
justifyContent: 'center'       // vertically centered
justifyContent: 'flex-end'     // at bottom
justifyContent: 'space-between'
justifyContent: 'space-around'
justifyContent: 'space-evenly'

3- AlignItems

Controls how children align along the cross axis (horizontal in column mode):

alignItems: 'flex-start'    // align left
alignItems: 'center'        // center horizontally
alignItems: 'flex-end'      // align right

PART 2: What is the SwiftUI equivalent of ZStack, HStack, VStack 
in React Native?

| SwiftUI Stack | React Native Equivalent                                                     |
| ------------- | --------------------------------------------------------------------------- |
| `VStack`      | `View` with `flexDirection: 'column'` (default)                             |
| `HStack`      | `View` with `flexDirection: 'row'`                                          |
| `ZStack`      | `View` with `position: 'absolute'` or using `StyleSheet.absoluteFillObject` |

*/
