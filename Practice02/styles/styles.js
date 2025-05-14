import { StyleSheet } from "react-native";
import colors from "./colors";
// colors.js

export default StyleSheet.create({
  textStyle: {
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    padding: 10,
  },
  flatCards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderRadius: 6,
  },
  ElevatedCards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    borderRadius: 6,
  },
  card1: {
    backgroundColor: colors.systemPink,
    shadowColor: colors.systemPink,
  },
  card2: {
    backgroundColor: colors.systemGreen,
    shadowColor: colors.systemGreen,
  },
  card3: {
    backgroundColor: colors.systemGray,
    shadowColor: colors.systemGray,
  },
  card4: {
    backgroundColor: colors.systemBlue,
    shadowColor: colors.systemBlue,
  },
  shadow: {
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
