import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  card: {
    margin: 10,
    borderRadius: 6,
  },
  elevatedCard: {
    backgroundColor: "#E0BFB8",
    shadowColor: colors.systemPink,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  headingContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardImage: {
    height: 250,
    width: "100%",
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    paddingTop: 2,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  socialLinks: {
    fontSize: 14,
    underline: true,
    fontWeight: "500",
    textDecorationLine: "underline",
    color: "#FFFFFF",
    backgroundColor: "#E37383",
    padding: 10,
    borderRadius: 4,
  },
});
