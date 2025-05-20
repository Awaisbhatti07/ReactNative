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

// Constants
import { currencyByRupee } from "./constants";

// Components
import CurrencyButton from "../components/CurrencyButton";

// Library
import Snackbar from "react-native-snackbar";

export default function practice() {
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");

  const buttonPress = (targetValue: Currency) => {
    console.log("Snackbar object: ", Snackbar);

    if (!inputValue) {
      return Snackbar.show({
        text: "Please enter a value",
        backgroundColor: "pink",
        textColor: "white",
        duration: 2750,
      });
    }

    const inputAmount = parseFloat(inputValue); // for decimal values
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: "Please enter a valid number",
        backgroundColor: "pink",
        textColor: "white",
        duration: 2750,
      });
    }
  };

  return (
    <SafeAreaView style={ styles.container }>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>$</Text>
            <TextInput style={ styles.inputStyle }
              maxLength={14}
              value={inputValue}
              clearButtonMode="always" // only for iOS
              onChangeText={setInputValue}
              keyboardType="number-pad"
              placeholderTextColor="#FFFFFF"
              placeholder="Enter amount in Rupees"
            />
          </View>

          {resultValue && <Text style={[styles.resultTxt, { marginTop: 12 }]}>{resultValue}</Text>}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={2} // Making Grid
            data={currencyByRupee} // Array
            keyExtractor={(item) => item.name} // required for unique value like UID
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected,
                ]}
                onPress={() => buttonPress(item)}
              >
                <CurrencyButton {... item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
