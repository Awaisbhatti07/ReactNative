import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  scrollContainer:{
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10
  },
  elevatedCard: {
    backgroundColor: '#FBE9E7',
  },
  userCard:{
    flex: 1,
    flexDirection: "row",
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 5,
    paddingRight: 10
  },
  userInfoView:{
    paddingHorizontal: 10,
    gap: 2,
  },
  avatar:{
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userName:{
    fontSize: 16,
    fontWeight: '600',
  },
  email:{
    fontSize: 14,
    fontWeight: '400',
  },
  phone:{
    fontSize: 12,
    fontWeight: '400',
  },
});
