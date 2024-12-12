import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from './firebase'; // Adjust the path as necessary
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Correct import
import { doc, setDoc } from 'firebase/firestore';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return; // Optionally show an alert to the user
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        username: username,
        email: email,
        createdAt: new Date(),
      });

      console.log("User  signed up and data saved:", user);
      // Navigate to the login screen after successful registration
      navigation.navigate('Login'); // Ensure 'Login' is the correct name of your login screen
    } catch (error) {
      console.error("Error signing up: ", error.message); // Log the error message
    }
  };

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.navbarContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Create Account.</Text>
        </View>
      </View>
      
      {/* Scrollable Form */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#666680" 
            value={username}
            onChangeText={setUsername}
          />
          
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
