import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with the user's profile image URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Jester Abalos</Text>
        <Text style={styles.profileEmail}>jesterabalos244@gmail.com</Text>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
    marginRight: 40, // To center the text properly considering the back button
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    backgroundColor: '#fff', // Fallback color if image fails to load
  },
  profileName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#A2A2B5',
  },
  logoutButton: {
    alignSelf: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#FF6347',
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#FF6347',
    fontWeight: '600',
  },
});

export default ProfileScreen;
