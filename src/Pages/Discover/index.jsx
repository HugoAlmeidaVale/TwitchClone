import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { Ionicons, AntDesign } from '@expo/vector-icons';

export default function Discorver({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
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
      <TouchableOpacity style={{ marginLeft: 20, marginTop: -13, marginRight: "77%", backgroundColor: "gray",borderRadius: 15}}>
      <Text style={{color: "#ffff", fontSize: 11, justifyContent:"center"}}>  Português</Text>
      </TouchableOpacity>
      <View style={styles.buttonStylo}>
        <View style={styles.buttonLado}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: "#ffff"}}> Música                    <Ionicons name="musical-notes-outline" size={24} color={"#ffff"}/></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: "#ffff"}}> Jogos                     <Ionicons name="game-controller-outline" size={24} color={"#ffff"}/> </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonLado}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: "#ffff"}}> Esports                  <AntDesign name="Trophy" size={24} color={"#ffff"}/></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: "#ffff"}}> Vida Real                <Ionicons name="mic-outline" size={24} color={"#ffff"}/></Text>
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
      </ScrollView>


    </View>
  );
}
