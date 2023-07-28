import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Userprofilescreen = ({navigation}) => {
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
          <Text>Date of Birth: {user.dateOfBirth}</Text>
          <Text>Gender: {user.gender}</Text>
          <Text>Residential Address: {user.residentialAddress}</Text>
          <Text>Postal Address: {user.postalAddress}</Text>
          <Text>Zip Code: {user.zipCode}</Text>
          <Text>City: {user.city}</Text>
          <Text>Country: {user.country}</Text>
          <Text>Phone Number: {user.phoneNumber}</Text>
          <Text>Alternative Number: {user.alternativeNumber}</Text>
          <Text>Email: {user.email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  sidebar: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
  },
  sidebarItemsContainer: {
    flex: 1,
    justifyContent: 'center', 
  },
  sidebarItem: {
    marginBottom: 10,
  },
  sidebarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  logoutButton: {
    backgroundColor: 'black',
  },
  content: {
    flex: 3,
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
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: 'black', 
    padding: 5,
    borderRadius: 8,
  },
  editProfileButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  pencilIcon: {
    width: 16,
    height: 16,
    tintColor: 'white',
  },
  sidebarButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'black', 
  },
  sidebarButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Userprofilescreen;
