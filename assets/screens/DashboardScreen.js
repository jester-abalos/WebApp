import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,  Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure to install react-native-vector-icons
import { useNavigation } from '@react-navigation/native';



const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Icon name="settings-outline" size={24} color="#A2A2B5" />
        </TouchableOpacity>
      </View>

      {/* Welcome Section */}
      <Text style={styles.welcomeText}>Welcome, Jester</Text>

      {/* Grid Section */}
      <ScrollView 
        contentContainerStyle={styles.scrollViewContent} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          <TouchableOpacity style={styles.card}>
          <Image source={require('../images/ilaw.png')} style={styles.image} />
            <Text style={styles.cardText}>Lights Toggle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.activeCard]}>
            <Icon name="home-outline" size={70} color="#fff" />
            <Text style={styles.cardText}>Monitoring</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Icon name="lock-closed-outline" size={70} color="#fff" />
            <Text style={styles.cardText}>Door Toggle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
          <Image source={require('../images/apoy.png')} style={styles.image} />
            <Text style={styles.cardText}>Temperature</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} >
            <Icon name="   " size={70} color="#FF4500" />
            <Text style={styles.cardText}>...</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Icon name="home-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="grid-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="calendar-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon name="person-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    width: '100%',
    backgroundColor: '#1E1E1E', // Set your desired background color here
    width: '100%', // Make the text container full width
    padding: 10,
    
  },
  title: {
    fontSize: 20,
    color: '#A2A2B5',
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
    marginLeft: 40,
  },
  settingsButton: {
    padding: 8,
  },
  welcomeText: {
    fontSize: 65,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 20,
    backgroundColor: '#1E1E1E', // Set your desired background color here
    width: '100%', // Make the text container full width
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, // Optional: Add padding for better appearance
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  card: {
    width: '48%',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    alignItems: 'left',
    marginBottom: 16,
    height: 180,
    
    
  },

  image: {
    width: 70, // Set the width of the image
    height: 70, // Set the height of the image
    resizeMode: 'contain', // Ensure the image scales properly
  },
  activeCard: {
    borderWidth: 2,
    borderColor: '#3498DB',
  },
  cardText: {
    marginTop: 30,
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 12,
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '95%',
    marginBottom: 20, 
    
    height: 70,
    paddingHorizontal: 16,



    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: -20 }, // Shadow offset
    shadowOpacity: .5, // Shadow opacity
    shadowRadius: 9, // Shadow radius
    
  },
  addButton: {
    backgroundColor: '#FF6347',
    width: 66,
    height: 66,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
    shadowColor: '#FF6347',
    shadowOffset: { width: 0, height: 8 },
    
    shadowRadius: 10,
    borderWidth: 10, // Width of the border
    borderColor: '#121212', // Color of the border
  },
});

export default DashboardScreen;
