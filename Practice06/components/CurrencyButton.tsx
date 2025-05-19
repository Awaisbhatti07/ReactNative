import React from "react";
import type { JSX, PropsWithChildren } from "react";

import { View, Text } from "react-native";
import styles from "../styles/styles";

type CurrencyButtonProps = PropsWithChildren<{
  name: String;
  flag: String;
}>;

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
};

export default CurrencyButton;
