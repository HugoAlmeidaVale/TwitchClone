import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Discover from "./src/Pages/Discover";
import Follow from "./src/Pages/Follow";
import Procurar from "./src/Pages/Procurar";
import Nav from "./src/Components/NavBar";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Nav/>
      <Tab.Navigator
        initialRouteName="Discover"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Follow") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Discover") {
              iconName = focused ? "compass" : "compass-outline";
            } else if (route.name === "Procurar") {
              iconName = focused ? "search-circle" : "search-circle-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: "#A970FF",
          tabBarInactiveTintColor: "gray",
          tabBarInactiveBackgroundColor: "#0E0E10" ,
          tabBarActiveBackgroundColor: "#0E0E10" ,
          tabBarLabelStyle:{
            paddingBottom: 5
          }
          
        })}
      >
        <Tab.Screen
          name="Follow"
          component={Follow}
          options={{ title: "Seguindo"}}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{ title: "Descubra" }}
        />
        <Tab.Screen
          name="Procurar"
          component={Procurar}
          options={{ title: "Procurar" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
