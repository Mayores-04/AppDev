import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Entry = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <View style={{ flex: 1, position: "relative" }}>
        <Image
          source={require("../../assets/images/android-icon-background.png")}
          alt="Image"
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
        <TouchableOpacity
          onPress={() => router.push("/AppNavigator")}
          //  onPress={() => Linking.openURL('https://expo.dev/')}
          style={{
            position: "absolute",
            bottom: 30,
            paddingVertical: 10,
            paddingHorizontal: 30,
            backgroundColor: "green",
            borderRadius: 25,
            left: "50%",
            transform: [{ translateX: -65 }],
          }}
        >
          <Text>Get Started</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1, height: "30%" }}>
        <Text>Welcome to the Productivity App!</Text>
        <Text>Welcome to the Productivity App!</Text>

        <Text>Welcome to the Productivity App!</Text>
        <Text>Welcome to the Productivity App!</Text>

        <Text>Welcome to the Productivity App!</Text>
        <Text>Welcome to the Productivity App!</Text>

        <Text>Welcome to the Productivity App!</Text>
        <Text>Welcome to the Productivity App!</Text>

        <Text>Welcome to the Productivity App!</Text>
        <Text>Welcome to the Productivity App!</Text>

        <Text>Welcome to the Productivity App!</Text>
        <Text>Welcome to the Productivity App!</Text>

        <Text>Welcome to the Productivity App!</Text>
        <Text>Welcome to the Productivity App!</Text>

        <Text>Welcome to the Productivity App!</Text>
        <Text>Welcome to the Productivity App!</Text>

        <Text>Welcome to the Productivity App!</Text>
        <Text>Welcome to the Productivity App!</Text>

        <Text>Welcome to the Productivity App!</Text>
        <Text>Welcome to the Productivity App!</Text>

        <Text>Welcome to the Productivity App!</Text>
        <Text>Welcome to the Productivity App!</Text>

        <Text>Welcome to the Productivity App!</Text>
        <Text>Welcome to the Productivity App!</Text>

        <Text>Welcome to the Productivity App!</Text>
        <Text>Welcome to the Productivity App!</Text>

        <Text>Welcome to the Productivity App!</Text>
        <Text>Welcome to the Productivity App!</Text>
      </ScrollView>
    </View>
  );
};

export default Entry;

const styles = StyleSheet.create({});
