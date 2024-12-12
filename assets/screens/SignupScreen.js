import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
 

  const navigation = useNavigation();

  const handleSignup = () => {
    console.log({
      password,
      confirmPassword,
      email,
    });
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.navbarContainer}>
        {/* Row with Back Arrow and Header */}
        <View style={styles.headerRow}>
          
          <Text style={styles.headerText}>Create Account.</Text>
        </View>
      </View>
      
      {/* Scrollable Form */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
         
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#666680" 
            value={email}
            onChangeText={setEmail}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666680" 
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#666680" 
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          
          
          
          
          
          
          
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C23',
  },
  navbarContainer: {
    width: '100%',
    height: 220,
    
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingTop: 150,
  },
  headerRow: {
    flexDirection: 'row',           // Align items in a row
    alignItems: 'center',           // Vertically center items
  },
  arrow: {
    marginRight: 10,                // Add some space between the arrow and the text
  },
  imageNav: {
    width: 30,
    height: 30,
  },
  headerText: {
    fontSize: 50,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '80%',
    height: 50,
    color: '#E0E0E0',
    backgroundColor: '#1C1C23',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    shadowColor: '#000', // iOS shadow color
    shadowOffset: { width: 6, height: 6 }, // iOS shadow offset
    shadowOpacity: 0.2, // iOS shadow opacity
    shadowRadius: 3, // iOS shadow blur
    borderWidth: 1,
    borderColor: '#666680',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFFFFF1A',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000', // iOS shadow color
    shadowOffset: { width: 6, height: 6 }, // iOS shadow offset
    shadowOpacity: 0.2, // iOS shadow opacity
    shadowRadius: 3, // iOS shadow blur
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    
  },
  loginText: {
    color: '#FFFFFF',
    marginTop: 20,
    fontSize: 16,
  },
});

export default SignupScreen;
