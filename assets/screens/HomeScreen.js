import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Make sure you install expo/vector-icons
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const HomeScreen = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={styles.container} >
      {/* Menu Icon */}
      <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Settings')}>
        <MaterialIcons name="menu" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Smart Lock</Text>

      {/* Lock Button */}
      <TouchableOpacity style={styles.button} >
        <MaterialIcons name="lock" size={24} color="black" />
        <Text style={styles.buttonText}>LOCK</Text>
      </TouchableOpacity>

      {/* Unlock Button */}
      <TouchableOpacity style={styles.button2}>
        <MaterialIcons name="lock-open" size={24} color="black" />
        <Text style={styles.buttonText}>UNLOCK</Text>
      </TouchableOpacity>

      {/* Green Line */}
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C23225', // Matches red gradient
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  menu: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 60,
    height: 60,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 20,
    marginTop: 120,
    marginBottom: 90,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '80%',
    height: 120,
    marginBottom: 90,
   
  },
  button2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '80%',
    height: 120,
    marginBottom: 90,
   
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
  },
  line: {
    marginTop: 30,
    width: '60%',
    height: 4,
    backgroundColor: 'green',
    borderRadius: 2,
  },
});

export default HomeScreen;
