import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Discorver({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descubra</Text>
      <Image
        style={styles.indica}
        source={require("../../img/indicacoes.jpg")}
      />
      <View style={styles.linha}>
        <Text style={styles.textoNegrito}>BlueNoob</Text>
        <Text style={styles.texto}>Transmitindo</Text>
        <Text style={styles.textoNegrito}>Battlefield 2042</Text>
      </View>

      <View style={styles.buttonStylo}>
        <View style={styles.buttonLado}>
          <TouchableOpacity style={styles.button}>
            <Text> Música</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text> Jogos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonLado}>
          <TouchableOpacity style={styles.button}>
            <Text> Esports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text> Vida Real</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categorias */}
      <View style={styles.linha}>
        <View style={styles.categorias}>
          <Text style={styles.textoNegrito}>CATEGORIAS 
          <Text style={styles.texto}>  QUE ACHAMOS QUE VAI GOSTAR</Text></Text>
        </View>
      </View>
      <View style={styles.Cate} >
        <Image style={styles.imgCate} source={require("../../img/capa/valval.jpg")} />
        <Image style={styles.imgCate} source={require("../../img/capa/kena.jpg")} />
        <Image style={styles.imgCate} source={require("../../img/capa/batepapo.jpg")} />
        <Image style={styles.imgCate} source={require("../../img/capa/ligadaslendas.jpg")} />

      </View>


    </View>
  );
}
