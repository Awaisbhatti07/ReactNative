// styles.js
import { StyleSheet } from "react-native";
import colors from "../../Practice02/styles/colors";

const createStyles = (width) =>
  StyleSheet.create({
    // Control Center
    controlCenterContainer: {
      marginBottom: 100,
      height: 60,
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      color: "#FFFFFF",
    },
    playButton: {
      marginHorizontal: 24,
    },

    // Song Info
    songInfoContainer: {
      width: "90%",
      marginTop: 18,
      flexDirection: "row",
      alignItems: "baseline",
      justifyContent: "center",
    },
    name: {
      marginBottom: 8,
      textAlign: "center",
      color: "#fff",
      fontSize: 24,
      fontWeight: "800",
    },
    artist: {
      color: "#d9d9d9",
      textAlign: "center",
    },

    // Song Slider
    sliderContainer: {
      width: 350,
      height: 40,
      marginTop: 25,
      flexDirection: "row",
    },
    timeContainer: {
      width: 340,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    time: {
      color: "#fff",
    },

    // Music Player
    musicPlayerContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#001d23",
    },
    listArtWrapper: {
      width: width, // ✅ now width is dynamic
      justifyContent: "center",
      alignItems: "center",
    },
    albumContainer: {
      width: 300,
      height: 300,
    },
    albumArtImg: {
      height: '100%',
      borderRadius: 4,
    },
    container:{
    flex: 1
  }
  });

export default createStyles;
