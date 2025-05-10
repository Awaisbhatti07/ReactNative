import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  hStack: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
    padding: 5,
    backgroundColor: colors.secondarySystemBackground,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10
  },
  imageStyle: {
    height: 100,
    width: 100,
    padding: 10,
    borderRadius: 6
  },

  container: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: colors.systemGreen,
  },
  whiteText: {
    color: "#ffffff",
    fontSize: 20,
  },
  darkText: {
    color: "#000000",
    fontSize: 20,
  },
});
