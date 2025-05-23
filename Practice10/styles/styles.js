import { StyleSheet } from "react-native";
import colors from "../../Practice02/styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36454F', // overall background color
  },
  playerInfo: {
    height: 56,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  playerX: {
    backgroundColor: "#38CC77",
  },
  playerO: {
    backgroundColor: "#F7CD2E",
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: "33.33%",

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 0.5,
    borderColor: "#fff",
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: "#38CC77",

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  gameBtn: {
    alignItems: "center",

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: "#8D3DAF",
  },
  gameBtnText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "500",
  },
});
