import { Dimensions, Image, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from "react-native-track-player";

import createStyles from "../styles/styles";

import { playListData } from "../src/constants";
import SongInfo from "../components/SongInfo";
import SongSlider from "../components/SongSlider";
import ControlCenter from "../components/ControlCenter";

const { width } = Dimensions.get("window");

export default function MusicPlayer() {
  const styles = createStyles(width);
  const [track, setTrack] = useState<Track | null>();

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
    switch (event.type) {
      case Event.PlaybackActiveTrackChanged:
        const playingTrack = await TrackPlayer.getActiveTrack();
        if (playingTrack) {
          setTrack(playingTrack);
        }
        break;
      default:
        break;
    }
  });

  const renderArtWork = () => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {track?.artwork && (
            <Image
              style={styles.albumArtImg}
              source={{ uri: track?.artwork?.toString() }}
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.musicPlayerContainer}>
      <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={(song) => song.id.toString()}
      />

      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
}
