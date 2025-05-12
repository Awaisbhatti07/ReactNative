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
          <Text
            style={isDarkMode ? commonStyles.whiteText : commonStyles.darkText}
          >
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

        <View style={[commonStyles.challengeOne]}>
          <View style={{ flex: 1, backgroundColor: "red" }} />
          <View style={{ flex: 1, backgroundColor: "green" }} />
          <View style={{ flex: 1, backgroundColor: "blue" }} />
        </View>

        <View style={[commonStyles.challengeTwo]}>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 1, backgroundColor: "red" }} />
          <View style={{ flex: 1, backgroundColor: "green" }} />
          <View style={{ flex: 1, backgroundColor: "blue" }} />
        </View>

        <View style={[commonStyles.challengeThree]}>
          <View style={{ flex: 2, backgroundColor: "red" }} />
          <View style={{ flex: 1, backgroundColor: "green" }} />
          <View style={{ width: 100, backgroundColor: "blue" }} />
        </View>

        <View style={[commonStyles.challengeFour]}>
          <View
            style={{
              flex: 1,
              backgroundColor: "red",
              borderColor: "green",
              borderWidth: 2,
              borderRadius: 5,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: "green",
              borderColor: "red",
              borderWidth: 2,
              borderRadius: 5,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: "blue",
              borderColor: "green",
              borderWidth: 2,
              borderRadius: 5,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AppPro;

/*

🧱 PART 1: flex, alignItems, and justifyContent in React Native
React Native uses Flexbox for layout, similar to CSS, but with flexDirection: 'column' as the default.

📏 1. flex
flex: 1 → Makes the component expand to fill all available space in the parent.

Equivalent to flex-grow: 1 in CSS.

Commonly used to fill the screen or make components share space proportionally.

📦 2. justifyContent – Main Axis Alignment
Controls how children are aligned along the main axis.

Since flexDirection: 'column' by default → main axis is vertical (top to bottom).

justifyContent: 'flex-start'   // children at the top
justifyContent: 'center'       // children centered vertically
justifyContent: 'flex-end'     // children at the bottom
justifyContent: 'space-between' // equal space *between* children
justifyContent: 'space-around'  // equal space *around* children
justifyContent: 'space-evenly'  // equal space between and around

📐 3. alignItems – Cross Axis Alignment
Controls alignment along the cross axis.

In flexDirection: 'column', cross axis = horizontal.

alignItems: 'flex-start'   // align children to the left
alignItems: 'center'       // center children horizontally
alignItems: 'flex-end'     // align children to the right

🧲 4. alignContent (when flexWrap is enabled)
Aligns multiple rows (or columns) in a wrapped layout.

Has similar values to justifyContent, but applies to the overall wrapped content, not individual items.

🔀 5. flexWrap

Allows items to wrap onto multiple lines (like word wrap).

flexWrap: 'wrap'   // enables wrapping
flexWrap: 'nowrap' // default; no wrapping

🧱 PART 2: SwiftUI Stack vs React Native Equivalent

SwiftUI	React Native Equivalent
VStack	View with flexDirection: 'column' (default)
HStack	View with flexDirection: 'row'
ZStack	View with children using position: 'absolute', or StyleSheet.absoluteFillObject

Tip: For layering (ZStack), combine a normal parent View with absolutely positioned children.

*/
