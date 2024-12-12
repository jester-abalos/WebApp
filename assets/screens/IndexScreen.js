import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

export default function IndexScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../images/image.png")} // Your background image
      style={styles.container}
    >
      <Text style={styles.welcomeText}>Smart Haven</Text>
      <View style={styles.logoContainer}>
        <Text style={styles.appName}>"Your Home, At Your Fingertips"</Text>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Api")} // Example navigation
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Login")} // Example navigation
      >
        <Text style={styles.buttonText}>I Have An Account</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    marginTop: 300,
    fontSize: 60,
    fontWeight: "bold",
    color: "#fff", // Adjust text color to make it visible on the background
    
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  appName: {
    marginBottom: 100,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: "#FF7966",
    paddingVertical: 10,
    paddingHorizontal: 126,
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 90,
  },
  registerButton: {
    backgroundColor: "#FFFFFF1A",
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    
  },
});
