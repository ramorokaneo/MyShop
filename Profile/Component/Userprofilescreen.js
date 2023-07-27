import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Userprofilescreen = () => {
  // Replace these with the actual user information
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    // Add other user information as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>User Profile</Text>
      <View style={styles.profileInfo}>
        <Text>Name: {user.name}</Text>
        <Text>Email: {user.email}</Text>
        {/* Add other user information here */}
      </View>
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
  profileInfo: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 8,
  },
});

export default Userprofilescreen;
