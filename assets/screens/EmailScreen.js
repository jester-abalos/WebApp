import React, { useState } from 'react';
import { ScrollView, Image, Pressable, View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

function EmailScreen() {
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    
      

    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.welcomeText}>Smart Haven</Text>
      <View style={styles.logoContainer}>
        <Text style={styles.appName}>"Your Home, At Your Fingertips"</Text>
      </View>

      <View Style={styles.all}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#666680"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#666680"
            secureTextEntry={!showPassword}
          />
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconContainer}
          >
            <MaterialIcons
              name={showPassword ? 'visibility' : 'visibility-off'}
              size={24}
              color="#A2A2B5"
            />
          </Pressable>
        </View>

        {/* Log In Button */}
        <Pressable
          style={({ pressed }) => [styles.loginButton, pressed && styles.loginButtonPressed]}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={styles.loginButtonText}>Get started with Email</Text>
        </Pressable>

        <View style={styles.separatorLine} />

        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Don't Have an Account?</Text>
        </View>

        {/* Create Account Button */}
        <Pressable
          style={({ pressed }) => [styles.createButton, pressed && styles.createButtonPressed]}
          onPress={() => navigation.navigate('dashboard')}
        >
          <Text style={styles.createButtonText}>Signin</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1C1C23',
  },
  all: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 400,
  },
  input: {
    width: '80%',
    height: 50,
 
    fontWeight: '500',
    backgroundColor: '#1C1C23',
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
    shadowColor: '#000', // iOS shadow color
    shadowOffset: { width: 6, height: 6 }, // iOS shadow offset
    shadowOpacity: 0.2, // iOS shadow opacity
    shadowRadius: 3, // iOS shadow blur
    alignSelf: 'center',
    borderColor: '#666680',
    borderWidth: 1,
  },
  welcomeText: {
    alignSelf: "center",
    marginTop: 140,
    fontSize: 60,
    fontWeight: "bold",
    color: "#fff", // Adjust text color to make it visible on the background
    
  },
  logoContainer: {
    
    alignItems: "center",
    marginBottom: 50,
  },
  appName: {
    marginBottom: 50,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderColor: '#666680',
    borderWidth: 1,
    backgroundColor: '#1C1C23',
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    alignSelf: 'center',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 8,
    color: '#E0E0E0',
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 15,
    marginLeft: 50,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  rememberMeText: {
    color: '#FFF',
    fontSize: 16,
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#FF7966',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 38,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginTop: 100,
  },
  loginButtonPressed: {
    backgroundColor: '#996600',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  separatorLine: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginTop: 20,
    marginHorizontal: 30,
    marginBottom: 60,
  },
  noAccountContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  noAccountText: {
    fontSize: 16,
    color: '#fff',
  },
  createButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFFFFF1A',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  createButtonPressed: {
    backgroundColor: '#996600',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EmailScreen;
