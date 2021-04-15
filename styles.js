import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlayTxt: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  overlayBtn: {
    marginTop: 30,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  body: {
    flex: 9,
    justifyContent: "center",
  },

  sexIcons: {
    flexDirection: "row",
    justifyContent: "center",
    height: 130,
  },
  sliders: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainResult: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
  },
  containerResult: {
    flex: 9,
    backgroundColor: "#252525",
    justifyContent: "center",
  },
  cardResult: {
    width: 300,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#606060",
    borderRadius: 10,
  },
  bmiTxt: {
    alignItems: "center",
    marginBottom: 15,
  },
  resultTitle: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
  },
  resultNum: {
    fontSize: 56,
    fontWeight: "bold",
    color: "#ffffff",
  },
  resultDis: {
    fontSize: 26,
    fontFamily: "BebasNeue",
  },
  footerResult: {
    flex: 1,
    flexDirection: "row",
    height: 70,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f52",
    width: "100%",
  },
  overlayTxt: {
    fontSize: 16,
  },
});
