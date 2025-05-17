import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

export default function practice04() {
  const [randomBackground, setRandomBackground] = useState("#FFFFFF");

  const [randomColor1, setRandomColor1] = useState("#ffffff");
  const [randomColor2, setRandomColor2] = useState("#ffffff");
  const [randomColor3, setRandomColor3] = useState("#ffffff");
  const [randomColor4, setRandomColor4] = useState("#ffffff");

  const generateColor = () => {
    const generateRandomHex = () => {
      const hexRange = "0123456789ABCDEF";
      let color = "#";

      for (let i = 0; i < 6; i++) {
        color += hexRange[Math.floor(Math.random() * 16)];
      }

      return color;
    };

    setRandomBackground(generateRandomHex());
    setRandomColor1(generateRandomHex());
    setRandomColor2(generateRandomHex());
    setRandomColor3(generateRandomHex());
    setRandomColor4(generateRandomHex());
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground}></StatusBar>

      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <View style={styles.topView}>
          <View style={styles.shapeView}>
            <View
              style={[styles.circleShape, { backgroundColor: randomColor1 }]}
            ></View>
            <View
              style={[styles.circleShape, { backgroundColor: randomColor2 }]}
            ></View>
          </View>
        </View>
        <View style={styles.middleView}>
          <TouchableOpacity
             onPress={generateColor}>
            <View style={styles.actionbtn}>
              <Text style={styles.textStyle}>Press me</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.shapeView}>
            <View
              style={[styles.squareShape, { backgroundColor: randomColor3 }]}
            ></View>
            <View
              style={[styles.squareShape, { backgroundColor: randomColor4 }]}
            ></View>
          </View>
        </View>
      </View>
    </>
  );
}
