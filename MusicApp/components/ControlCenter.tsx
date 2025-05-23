import { View, Pressable, Dimensions } from "react-native";
import React from "react";
import TrackPlayer, {
  State,
  usePlaybackState,
} from "react-native-track-player";
import Icon from "react-native-vector-icons/MaterialIcons";

import { playbackService } from "../../musicPlayerService";

import createStyles from "../styles/styles";
const { width } = Dimensions.get("window");

const ControlCenter = () => {
  const { state: playBackState } = usePlaybackState() ?? {};
  // next button
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };
  // Previous button
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const togglePlayback = async (playback?: State) => {
    const currentTrack = await TrackPlayer.getActiveTrack();

    if (currentTrack !== null && playback !== undefined) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  const styles = createStyles(width); // pass width to styles

  return (
    <View style={styles.controlCenterContainer}>
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Pressable onPress={() => togglePlayback(playBackState)}>
        <Icon
          style={styles.icon}
          name={playBackState === State.Playing ? "pause" : "play-arrow"}
          size={75}
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  );
};

export default ControlCenter;
