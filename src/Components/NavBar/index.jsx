import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { Ionicons, AntDesign, Octicons, Feather } from "@expo/vector-icons";
import perfil from "../../img/perfil.png"

export default function Nav() { 
  
  return (
    <View style = {styles.topo} >
      <Image source={require("../../img/perfil.png")} style = {styles.img}/>
      <Text style = {{marginLeft: "53%" ,marginRight: "3%", marginTop: "2%"}}>
        {videoCamera}   {inbox}   {chatBox}   {lupa}
      </Text>

    </View>

  ); 
 }

 const inbox = <AntDesign name="inbox" size={24} color="#fff" />
 const videoCamera = <AntDesign name="videocamera" size={24} color="#fff" />
 const chatBox = <Ionicons name="chatbox-outline" size={24} color="#fff" />
 const lupa = <Ionicons name="search" size={24} color="#fff" />

 const styles = StyleSheet.create({
  topo: {
    flexDirection: "row",
    backgroundColor: "#0E0E10",
    marginTop: "6.5%",
  },
  img: {
    width: 35,
    height: 35,
    marginTop: "1.5%",
    marginLeft: "3%",
    borderRadius: 40
  }
});