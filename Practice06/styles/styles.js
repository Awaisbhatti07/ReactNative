import { StyleSheet } from "react-native";
import colors from "../../Practice02/styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.backgroundColor,
    gap: 20
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceButtonText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.systemPink,
    fontSize: 16,
    color: colors.black,
    fontWeight: "700",
    textTransform: "uppercase",
    textAlign: "center",
  }
});
