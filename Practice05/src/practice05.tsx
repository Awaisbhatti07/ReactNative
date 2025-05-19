import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import type { JSX, PropsWithChildren } from "react";
// PropsWithChildren se component props ke sath children (andar ka content) ka type bhi mil jata hai
// Props + children dono ka type dene ke liye PropsWithChildren use hota hai

import React, { Children, useState } from "react";
import styles from "../styles/styles";

import diceOne from "../../Practice05/assets/dice-one.png";
import dicetwo from "../../Practice05/assets/dice-two.png";
import dicethree from "../../Practice05/assets/dicethree.png";
import dicefour from "../../Practice05/assets/dice-four.png";
import dicefive from "../../Practice05/assets/dice-five.png";
import dicesix from "../../Practice05/assets/dice-six.png";

type Props = {
  name: String;
  age: 30;
};

// simple usage
const props = ({ name, age }: Props) => {
  return (
    <SafeAreaView>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </SafeAreaView>
  );
};

// Wrap Props with PropsWithChildren
const MyComponent = ({ name, age, children }: PropsWithChildren<Props>) => {
  // jaha say bhe ye call ho ag agr us main koi ui hai to wo {children} main aa jaye ga
  return (
    <SafeAreaView>
      <Text>{name}</Text>
      <Text>{age}</Text>
      {children} // This will render the children passed to MyComponent
    </SafeAreaView>
  );
};

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

// Simple String Variable bhe pass kr skty hai image rendering k liye ye bus is liye kiya hai k "PropsWithChildren" ko use krna hai
const Dice = ({ imageUrl, children }: DiceProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image style={styles.diceImage} source={imageUrl} />
      {children}
    </View>
  );
};

export default function practice05() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(diceOne);

  const roleDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(diceOne);
        break;
      case 2:
        setDiceImage(dicetwo);
        break;
      case 3:
        setDiceImage(dicethree);
        break;
      case 4:
        setDiceImage(dicefour);
        break;
      case 5:
        setDiceImage(dicefive);
        break;
      case 6:
        setDiceImage(dicesix);
        break;
      default:
        break;
    }
  };

  return (
    <Dice imageUrl={diceImage}>
      {/* Pressable passed as children example of PropsWithChildren */}
      <Pressable onPress={roleDiceOnTap}>
        <Text style={styles.rollDiceButtonText}>Roll The Dice</Text>
      </Pressable>
    </Dice>
  );
}
