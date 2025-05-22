import { View, Text, Dimensions } from "react-native";
import React, { PropsWithChildren } from "react";
import styles from "../styles/styles";
import { Track } from "react-native-track-player";

import createStyles from "../styles/styles";
const { width } = Dimensions.get("window");

type SongInfoProps = PropsWithChildren<{
  track: Track | null | undefined; // default values null or undefined
}>;

const SongInfo = ({ track }: SongInfoProps) => {
  const styles = createStyles(width); // pass width to styles

  return (
    <View style={styles.songInfoContainer}>
      <View>
        <Text style={styles.name}>{track?.title}</Text>
        <Text style={styles.artist}>
          {/* A string literal . just a dot and
          spaces for formatting */}
          {track?.artist} . {track?.album}
        </Text>
      </View>
    </View>
  );
};

export default SongInfo;
