import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

// Constants containing currency conversion rates from Rupees
import { currencyByRupee } from "./constants";

// Custom component to render each currency button
import CurrencyButton from "../components/CurrencyButton";

// Snackbar library for showing temporary messages
import Snackbar from "react-native-snackbar";

export default function practice() {
  // State to hold the input value typed by the user
  const [inputValue, setInputValue] = useState("");
  // State to hold the converted currency result string (e.g., "$ 123.45")
  const [resultValue, setResultValue] = useState("");
  // State to track which currency button is selected (by currency name)
  const [targetCurrency, setTargetCurrency] = useState("");

  // Function called when a currency button is pressed
  const buttonPress = (targetValue: Currency) => {
    console.log("Snackbar object: ", Snackbar);

    // Show error if input field is empty
    if (!inputValue) {
      return Snackbar.show({
        text: "Please enter a value",
        backgroundColor: "pink",
        textColor: "white",
        duration: 2750,
      });
    }

    // Parse the input string into a floating point number
    const inputAmount = parseFloat(inputValue);

    // Check if the parsed input is a valid number
    if (!isNaN(inputAmount)) {
      // Calculate converted amount by multiplying input with target currency conversion rate
      const convertedValue = inputAmount * targetValue.value;
      // Format the result with currency symbol and 2 decimal places
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      // Update state to display the conversion result
      setResultValue(result);
      // Update selected currency name for UI highlight
      setTargetCurrency(targetValue.name);
    } else {
      // Show error if input is not a valid number
      return Snackbar.show({
        text: "Please enter a valid number",
        backgroundColor: "pink",
        textColor: "white",
        duration: 2750,
      });
    }
  };

  return (
    // SafeAreaView to avoid notches and safe screen areas on devices
    <SafeAreaView style={styles.container}>
      {/* Status bar styling */}
      <StatusBar />
      <View style={styles.container}>
        {/* Top section with input and result display */}
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            {/* Rupee symbol label */}
            <Text style={styles.rupee}>$</Text>
            {/* Input field for entering amount in Rupees */}
            <TextInput
              style={styles.inputStyle}
              maxLength={14} // max 14 characters input
              value={inputValue} // controlled input value
              clearButtonMode="always" // show clear button on iOS
              onChangeText={setInputValue} // update state on text change
              keyboardType="number-pad" // numeric keyboard only
              placeholderTextColor="#FFFFFF" // placeholder color
              placeholder="Enter amount in Rupees" // placeholder text
            />
          </View>

          {/* Show conversion result if available */}
          {resultValue && (
            <Text style={[styles.resultTxt, { marginTop: 12 }]}>
              {resultValue}
            </Text>
          )}
        </View>

        {/* Bottom section with currency buttons displayed in a grid */}
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={2} // Render buttons in 2 columns grid
            data={currencyByRupee} // Array of currency objects for conversion
            keyExtractor={(item) => item.name} // Unique key for each item
            renderItem={({ item }) => (
              // Each currency button is wrapped in a Pressable for touch feedback
              <Pressable
                style={[
                  styles.button,
                  // Highlight button if it is the selected target currency
                  targetCurrency === item.name && styles.selected,
                ]}
                onPress={() => buttonPress(item)} // Call handler on press
              >
                {/* Render custom button UI */}
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
