import { useState } from "react";
import { StyleSheet } from "react-native";
import colors from "../../Practice02/styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  actionbtn: {
    borderRadius: 10,
    backgroundColor: "#E37383",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textStyle: {
    fontSize: 14,
    underline: true,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  topView: {
    flex: 1,
    backgroundColor: "transparent",
    marginTop: 60,
  },
  middleView: {
    height: 100,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    flex: 1,
    backgroundColor: "transparent",
    marginBottom: 60,
  },
  shapeView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  circleShape: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  squareShape: {
    width: 150,
    height: 150,
  },
});
