import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure to install react-native-vector-icons
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { database } from '../../firebaseConfig'; // Ensure the path is correct

const DashboardScreen = ({ navigation }) => {
  const [lightsOn, setLightsOn] = useState(false);
  const [parkingLightsOn, setParkingLightsOn] = useState(false); // State to track the light status
  const [motionStatus, setMotionStatus] = useState(""); // State to track motion sensor status
  const [temperature, setTemperature] = useState(null); // State to store temperature
  const [humidity, setHumidity] = useState(null); // State to store humidity

  // Function to toggle light status and update in Firebase
  const toggleLights = () => {
    const newStatus = !lightsOn; // Toggle light status
    setLightsOn(newStatus); // Update local state

    // Get a reference to the Firebase Realtime Database path for the light control
    const lightsRef = ref(database, 'control/led'); // Reference to control/led path in Firebase
    
    // Write the new light status to the Firebase database
    set(lightsRef, newStatus)
      .then(() => {
        console.log('Light status updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating light status:', error);
      });
  };

   const toggleParkingLights = () => {
    const newStatus = !parkingLightsOn;
    setParkingLightsOn(newStatus);

    const parkingLightsRef = ref(database, 'control/led2'); // Reference to 'control/parkingLights'
    set(parkingLightsRef, newStatus)
      .then(() => console.log('Parking lights status updated successfully!'))
      .catch((error) => console.error('Error updating parking lights:', error));
  };

  // Fetch data from Firebase (lights, motion, temperature, and humidity) when component mounts
  useEffect(() => {
    const lightsRef = ref(database, 'control/led'); // Reference to the 'led' path in Firebase
    const motionRef = ref(database, 'motion/status'); // Reference to the 'motion/status' path in Firebase
    const tempRef = ref(database, 'sensorReading/temperature');
    const parkingLightsRef = ref(database, 'control/led2'); // Reference to the 'temperature' path in Firebase
    const humidityRef = ref(database, 'sensorReading/humidity'); // Reference to the 'humidity' path in Firebase
    
    // Listen for changes in the 'led' value
    const lightsUnsubscribe = onValue(lightsRef, (snapshot) => {
      const newStatus = snapshot.val();
      if (newStatus !== null) {
        setLightsOn(newStatus); // Update state with the value from Firebase
      }
    });

    const parkingLightsUnsubscribe = onValue(parkingLightsRef, (snapshot) => {
      const status = snapshot.val();
      if (status !== null) setParkingLightsOn(status);
    });

    // Listen for changes in the 'motion/status' value
    const motionUnsubscribe = onValue(motionRef, (snapshot) => {
      const newMotionStatus = snapshot.val();
      if (newMotionStatus !== null) {
        setMotionStatus(newMotionStatus); // Update state with the value from Firebase
      }
    });

    // Listen for changes in the 'temperature' value
    const tempUnsubscribe = onValue(tempRef, (snapshot) => {
      const newTemperature = snapshot.val();
      if (newTemperature !== null) {
        setTemperature(newTemperature); // Update state with the value from Firebase
      }
    });

    // Listen for changes in the 'humidity' value
    const humidityUnsubscribe = onValue(humidityRef, (snapshot) => {
      const newHumidity = snapshot.val();
      if (newHumidity !== null) {
        setHumidity(newHumidity); // Update state with the value from Firebase
      }
    });

    // Cleanup the listeners when the component unmounts
    return () => {
      lightsUnsubscribe();
      parkingLightsUnsubscribe();
      motionUnsubscribe();
      tempUnsubscribe();
      humidityUnsubscribe();
    };
  }, []);

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
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {/* Lights Toggle Card */}

          <TouchableOpacity style={styles.card} onPress={toggleParkingLights}>
            <Image source={require('../images/ilaw.png')} style={styles.image} />
            <Text style={styles.cardText}>Post Lights {parkingLightsOn ? 'ON' : 'OFF'}</Text>
          </TouchableOpacity>





          <TouchableOpacity style={styles.card} onPress={toggleLights}>
            <Image source={require('../images/ilaw.png')} style={styles.image} />

            <Text style={styles.cardText}>House Lights {lightsOn ? 'ON' : 'OFF'}</Text>
          </TouchableOpacity>

      

          {/* Monitoring Card with motion sensor status */}
          <TouchableOpacity style={[styles.card, styles.activeCard]}>
          <Image source={require('../images/2.png')} style={styles.image} />
            <Text style={styles.cardText}>Monitoring</Text>
            {/* Display motion status */}
            <Text style={styles.motionStatusText}>
             {motionStatus ? motionStatus : "No motion"}
            </Text>
          </TouchableOpacity>

          {/* Temperature and Humidity Card */}
          <TouchableOpacity style={styles.card}>
            <Image source={require('../images/apoy.png')} style={styles.image} />
            <Text style={styles.cardText}>Temperature</Text>
            {/* Display temperature and humidity */}
            <Text style={styles.motionStatusText}>
              {temperature ? `${temperature}°C` : ""}
            </Text>
            <Text style={styles.motionStatusText}>
              Humidity: {humidity ? `${humidity}%` : ""}
            </Text>
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
  
  scrollViewContent: {
      height: '130%',
    },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1E1E1E', 
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
    backgroundColor: '#1E1E1E',
    width: '100%',
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  activeCard: {
    borderWidth: 2,
    borderColor: '#3498DB',
  },
  cardText: {
    marginTop: 20,
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
  },
  motionStatusText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    
    bottom: 0,
    width: '95%',
    marginBottom: 20,
    height: 70,
  },
  addButton: {
    backgroundColor: '#FF6347',
    width: 66,
    height: 66,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
});

export default DashboardScreen;
