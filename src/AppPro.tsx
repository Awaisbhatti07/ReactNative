import React from "react";
import commonStyles from "./styles/commonStyles";

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { JSX } from "react/jsx-runtime";
import colors from "./styles/colors";

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
        <View style={{ flexDirection: "column", height: 200 }}>
          <View style={{ flex: 1, backgroundColor: "red" }} />
          <View style={{ flex: 2, backgroundColor: "blue" }} />
          <View style={{ flex: 1, backgroundColor: "green" }} />
        </View>

        <View
          style={[
            commonStyles.hStack,
            { flex: 0, backgroundColor: colors.systemPink },
          ]}
        >
          <Image
            style={commonStyles.imageStyle}
            source={require("./assets/images/react.png")}
          />
          <Text style={isDarkMode ? commonStyles.whiteText : commonStyles.darkText}>
            Hello Awais
          </Text>
        </View>

        <View style={commonStyles.hStack}>
          <View
            style={[
              commonStyles.view,
              {
                backgroundColor: "#FF0000",
                flexDirection: "column",
                justifyContent: "center",
              },
            ]}
          >
            <Text>Item 1</Text>
            <Text>Item 2</Text>
          </View>

          <View
            style={[
              commonStyles.view,
              { backgroundColor: "blue", flexDirection: "column" },
            ]}
          >
            <Text>Item A</Text>
            <Text>Item B</Text>

            <View style={{ flex: 1 }} />
          </View>
        </View>

        <View style={[commonStyles.container, { position: "relative" }]}>
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

      </ScrollView>
    </SafeAreaView>
  );
}

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
