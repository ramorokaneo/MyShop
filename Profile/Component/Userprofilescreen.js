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
      <View style={styles.sidebar}>
        {/* Content for the sidebar */}
        <Text style={styles.sidebarText}>Profile Picture</Text>
        {/* Add other sidebar content here */}
      </View>
      <View style={styles.content}>
        {/* Main content */}
        <Text style={styles.headerText}>User Profile</Text>
        <View style={styles.profileInfo}>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          {/* Add other user information here */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Arrange the sidebar and content side by side
    alignItems: 'stretch',
  },
  sidebar: {
    flex: 1,
    backgroundColor: 'black', // Set the background color to black
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sidebarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Set the text color to white for visibility on the black background
  },
  content: {
    flex: 3, // Adjust this value to control the width of the main content area
    padding: 20,
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
