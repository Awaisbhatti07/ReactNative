import { View, Text, Dimensions } from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";
import { useProgress } from "react-native-track-player";

import createStyles from "../styles/styles";
const { width } = Dimensions.get("window");

const SongSlider = () => {
  const { position, duration } = useProgress();
  const styles = createStyles(width);

  return (
    <View>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor="#FA8072"
        maximumTrackTintColor="#FA8072"
        minimumTrackTintColor="#DE3163"
        style={styles.sliderContainer}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>
          {
            // Convert position (in seconds) to mm:ss format
            new Date(position * 1000) // convert seconds to milliseconds and create a Date object
              .toISOString() // convert Date to ISO string, e.g. "1970-01-01T00:01:15.000Z"
              .substring(15, 19) // extract "mm:ss" part from the time string
          }
        </Text>
        <Text style={styles.time}>
          {
            // Convert position (in seconds) to mm:ss format
            new Date((duration - position) * 1000) // convert seconds to milliseconds and create a Date object
              .toISOString() // convert Date to ISO string, e.g. "1970-01-01T00:01:15.000Z"
              .substring(15, 19) // extract "mm:ss" part from the time string
          }
        </Text>
      </View>
    </View>
  );
};

export default SongSlider;
