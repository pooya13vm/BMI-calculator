import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  endButton: {
    marginBottom: 0,
  },
  icons: {
    width: 130,
    height: 115,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 10,
    padding: 5,
    borderRadius: 25,
    borderBottomColor: "#f50",
    // borderBottomWidth: 2,
  },
  container: {
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#323232",
    width: "90%",
  },
  title: {
    margin: 3,
    fontSize: 18,
    marginLeft: 10,
    color: "white",
    fontFamily: "BebasNeue",
    alignSelf: "center",
  },
  Slider: {
    justifyContent: "center",
    marginTop: 5,
  },
  slider: {
    marginHorizontal: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  sliderButton: {
    width: 100,
    justifyContent: "center",
  },
  counterTxt: {
    fontFamily: "BebasNeue",
    fontSize: 24,
    color: "white",
  },
});
