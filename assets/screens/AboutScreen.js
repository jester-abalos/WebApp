import React from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function AboutScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.navbarContainer}>
        <Text style={styles.headerText}>Group III</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Example Member 1 */}

        <View style={styles.contentBox}>
          <View style={styles.nameRow}>
            <Image
              source={require('../images/wiw.png')} // Replace with actual image URL
              style={styles.memberImage}
            />
            <Text style={styles.contentHeader}>Vallejo, Carlos</Text>
          </View>
          <View style={styles.separatorLine} />
          <Text style={styles.contentText}>*Project Manager*</Text>
          
          
        </View>



        <View style={styles.contentBox}>
          <View style={styles.nameRow}>
            <Image
              source={require('../images/wiw.png')} // Replace with actual image URL
              style={styles.memberImage}
            />
            <Text style={styles.contentHeader}>Jester, Abalos</Text>
          </View>
          <View style={styles.separatorLine} />
          <Text style={styles.contentText}>*Backend Developer*</Text>
          <Text style={styles.contentText}>*Database Administrator*</Text>
          <Text style={styles.contentText}>*Assurance Specialist*</Text>
          <Text style={styles.contentText}>*Release Manager*</Text>
          
        </View>

        {/* Example Member 2 */}
        <View style={styles.contentBox}>
          <View style={styles.nameRow}>
            <Image
              source={require('../images/wiw.png')} // Replace with actual image URL
              style={styles.memberImage}
            />
            <Text style={styles.contentHeader}>Racines, Mcjame</Text>
          </View>
          <View style={styles.separatorLine} />
          <Text style={styles.contentText}>*User Insights*</Text>
          
        </View>



        <View style={styles.contentBox}>
          <View style={styles.nameRow}>
            <Image
              source={require('../images/wiw.png')} // Replace with actual image URL
              style={styles.memberImage}
            />
            <Text style={styles.contentHeader}>Corros, John Lawrence</Text>
          </View>
          <View style={styles.separatorLine} />
          <Text style={styles.contentText}>*UI/UX*</Text>
          
        </View>




        <View style={styles.contentBox}>
          <View style={styles.nameRow}>
            <Image
              source={require('../images/wiw.png')} // Replace with actual image URL
              style={styles.memberImage}
            />
            <Text style={styles.contentHeader}>De dios, James</Text>
          </View>
          <View style={styles.separatorLine} />
          <Text style={styles.contentText}>*UI/UX*</Text>
          
        </View>


        <View style={styles.contentBox}>
          <View style={styles.nameRow}>
            <Image
              source={require('../images/wiw.png')} // Replace with actual image URL
              style={styles.memberImage}
            />
            <Text style={styles.contentHeader}>Egloria, Mark John</Text>
          </View>
          <View style={styles.separatorLine} />
          <Text style={styles.contentText}>*Frontend Developer*</Text>
          <Text style={styles.contentText}>*UI/UX*</Text>
          
        </View>


        <View style={styles.contentBox}>
          <View style={styles.nameRow}>
            <Image
              source={require('../images/wiw.png')} // Replace with actual image URL
              style={styles.memberImage}
            />
            <Text style={styles.contentHeader}>Gaylon, Juan Miguel</Text>
          </View>
          <View style={styles.separatorLine} />
          <Text style={styles.contentText}>*Frontend Developer*</Text>
          <Text style={styles.contentText}>*UI/UX*</Text>
          
        </View>


        <View style={styles.contentBox}>
          <View style={styles.nameRow}>
            <Image
              source={require('../images/wiw.png')} // Replace with actual image URL
              style={styles.memberImage}
            />
            <Text style={styles.contentHeader}>Martinez, Izen</Text>
          </View>
          <View style={styles.separatorLine} />
          <Text style={styles.contentText}>*User Insights*</Text>
          
          
        </View>

        {/* Repeat similar structure for other members */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c23225',
  },
  navbarContainer: {
    width: '100%',
    height: 220,
    backgroundColor: '#c23225',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 50,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'left',
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  scrollView: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  contentBox: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 10,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Circular image
    marginRight: 10,
  },
  contentHeader: {
    fontSize: 25, // Adjust font size to fit better
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flex: 1, // Ensure text takes up available space without overflowing
    flexWrap: 'wrap', // Allow the text to wrap to the next line if necessary
  },
  contentText: {
    fontSize: 20,
    color: '#000',
    lineHeight: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  contentText1: {
    fontSize: 16,
    color: '#000',
    lineHeight: 24,
  },
  separatorLine: {
    borderBottomColor: '#333333',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default AboutScreen;
