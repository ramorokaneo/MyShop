import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Navigate to the login screen when the login button is clicked
    navigation.navigate('LoginScreen');
  };

  const handleSignup = () => {
    // Navigate to the signup screen when the signup button is clicked
    navigation.navigate('RegistrationScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Profile Dashboard</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      {/* Add more dashboard components as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black', // Change the background color to black
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
