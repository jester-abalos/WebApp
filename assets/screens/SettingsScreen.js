import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Profile Icon */}
      <MaterialIcons name="account-circle" size={60} color="white" style={styles.icon} />

      {/* Name Input Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#FFF" />
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c23225',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80,
    
  },
  icon: {
    marginBottom: 20,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 40,
    marginBottom: 390,
  },
  label: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    fontSize: 16,
    color: 'white',
    padding: 5,
  },
  button: {
    width: '80%',
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
