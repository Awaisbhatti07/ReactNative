import { StyleSheet } from "react-native";
import colors from "../../Practice02/styles/colors";

export default StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
  },
  flag: {
    fontSize: 28,
    color: colors.systemLabelDark,
    marginBottom: 4,
  },
  country: {
    fontSize: 14,
    color: colors.systemPink,
  },
  container: {
    flex: 1,
    backgroundColor: "#515151",
  },
  topContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  resultTxt: {
    fontSize: 32,
    color: "#000000",
    fontWeight: "800",
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "800",
  },
  rupeesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: "#ffeaa7",
  },
  inputStyle: {
    color: "#ffffff",
    flex: 0.5,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ffffff",
  },
});
