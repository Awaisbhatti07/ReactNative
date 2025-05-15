import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  card: {
    borderRadius: 6,
    margin: 10,
    gap: 8,
  },
  cardElevated: {
    backgroundColor: '#E5E4E2',
    shadowColor: colors.systemGray,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  cardImage: {
    width: "100%",
    height: 250,
    resizeMode: 'cover',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    padding: 8,
    gap: 6
  },
  cartTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 15,
  },
});
