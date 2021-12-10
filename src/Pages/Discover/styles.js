import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0E10",
  },
  title: {
    marginLeft: "2.5%",
    marginTop: "3.7%" ,
    fontSize: 37,
    color: "#ffff",
  },
  indica: {
    marginTop: "5.3%",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  button: {
    backgroundColor: "#782CE7",
    margin: "7%",
    height: 40,
    justifyContent: "center",
    borderRadius: 15,
  },
  buttonStylo: {
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  buttonLado: {
    flex: 1,
  },
  textoNegrito: {
    color: "#A970FF",
    fontWeight: "bold",
    flexDirection: "row",
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    marginRight: 120
  },
  texto: {
    color: "#ffff",
    marginLeft: 5,
    marginRight: 5,
    fontWeight: "100"
  },
  categorias:{
    marginTop: 5,
    flexWrap: "wrap"
  },
  Cate:{
    flexDirection: "row",
    marginTop: -20

  },
  imgCate:{
    height: 130,
    width: 92,
    marginLeft: 15
  }
});
