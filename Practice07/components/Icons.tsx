// Install vector icons library and type definitions:
// npm install --save react-native-vector-icons
// npm i @types/react-native-vector-icons

import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useEffect } from "react";
import { PropsWithChildren } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

// Define props type for the icon component
type IconsProps = PropsWithChildren<{
  name: String; // Accepts "circle", "cross", or any other value for empty
}>;

// Functional component that renders an icon with animation and tap interaction
const IconsView = ({
  name,
  onPress,
}: IconsProps & { onPress?: () => void }) => {
  // useRef to hold animated value (starts from 0)
  const scaleAnim = useRef(new Animated.Value(0)).current;

  // useEffect triggers spring animation when 'name' changes (i.e., new move)
  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1, // animate to full size (scale = 1)
      useNativeDriver: true,
      friction: 5, // controls bounce/smoothness
    }).start();
  }, [name]);

  // Determines which icon to show based on the 'name' prop
  const renderIcon = () => {
    switch (name) {
      case "circle":
        return <Icon name="circle-o" size={38} color="#4FC3F7" />; // Player O
      case "cross":
        return <Icon name="times" size={38} color="#FF6B6B" />;   // Player X
      default:
        return <Icon name="square-o" size={38} color="#CFD8DC" />; // Empty cell
    }
  };

  return (
    // TouchableOpacity provides press feedback and triggers onPress
    // Disabled if the cell is already filled (has "circle" or "cross")
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} disabled={!!name}>
      {/* Animated scale effect for visual feedback */}
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        {renderIcon()}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default IconsView
