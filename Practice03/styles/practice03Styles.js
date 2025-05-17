import { StyleSheet } from "react-native";

export default StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
  flexDirection: 'row',
  alignItems: 'center', 
  marginBottom: 15,
  paddingHorizontal: 10 
},

  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    width: 100,
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    paddingTop: 2,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: 'center',
    gap: 20
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
  links: {
    fontSize: 14,
    underline: true,
    fontWeight: '500',
    textDecorationLine: 'underline',
    color: '#FFFFFF',
    backgroundColor: '#E37383',
    padding:10,
    borderRadius: 4
  },
});
