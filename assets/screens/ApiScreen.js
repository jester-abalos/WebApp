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
      source={require("../images/GET.jpg")} // Your background image
      style={styles.container}
    >
      <Text style={styles.welcomeText}>Smart Haven</Text>
      <View style={styles.logoContainer}>
        <Text style={styles.appName}>"Your Home, At Your Fingertips"</Text>
      </View>

      <TouchableOpacity
        style={styles.Continue}
        onPress={() => navigation.navigate("Dashboard")} // Example navigation
      >
        <Text style={styles.buttonemail}> Continue With Google</Text>
      </TouchableOpacity>

      <Text style={styles.or}>or</Text>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Email")} // Example navigation
      >
        <Text style={styles.buttonText}>Sign Up With Email</Text>
      </TouchableOpacity>

      <Text style={styles.we}>By registering, you agree to our Terms of Use. Learn how we collect, use and share your data.</Text>





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
    marginTop: 100,
    fontSize: 60,
    fontWeight: "bold",
    color: "#fff", // Adjust text color to make it visible on the background
    
  },
  or: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff", // Adjust text color to make it visible on the background
    marginBottom: 40,
    marginTop: 20,
    
  },

  we: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff", // Adjust text color to make it visible on the background
    marginTop: 40,
    textAlign: "center",
    marginHorizontal: 20,
    color: "#666680",
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
  Continue: {
    width: 350,
    height: 50,
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 150,
  },
  registerButton: {
    backgroundColor: "#FFFFFF1A",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 50,
    height: 50,
    width: 350,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    
  },

  buttonemail: {
    color: "#000000",
    fontSize: 20,
    
    fontWeight: "bold",
    
  },
});
