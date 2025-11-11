import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";

import HomeScreen from "../(screens)/HomeScreen";
import SecondScreen from "../(screens)/SecondScreen";
import ThirdScreen from "./../(screens)/ThirdScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="2nd" component={SecondScreen} />
      <Tab.Screen name="3rd" component={ThirdScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
