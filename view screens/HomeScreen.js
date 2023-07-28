import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace 'FontAwesome' with the correct icon library for your desired pencil icon

// Import your image file
import profilePicture from '../../MyShop/assets/pexels-nichole-sebastian-3220360.jpg'; // Update the path accordingly

const Userprofilescreen = () => {
  // Replace these with the actual user information
  const user = {
    name: 'Nicole Sebatian',
    dateOfBirth: '1990-01-01',
    gender: 'Female',
    residentialAddress: '123 Main St',
    postalAddress: '456 Park Ave',
    zipCode: '2021',
    city: 'Johannesburg',
    country: 'South Africa',
    phoneNumber: '011-123-4567',
    alternativeNumber: '076-987-6543',
    email: 'nic@example.com',
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        {/* Add the profile picture */}
        <View style={styles.profilePictureContainer}>
          <Image source={profilePicture} style={styles.profilePicture} />
          {/* Edit Profile button */}
          <TouchableOpacity style={styles.editProfileButton}>
            <Icon name="pencil" size={16} color="white" />
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

         {/* Sidebar items */}
         <View style={styles.sidebarItemsContainer}>
          <View style={styles.sidebarItem}>
            <TouchableOpacity style={styles.sidebarButton}>
              <Text style={styles.sidebarButtonText}>Settings</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sidebarItem}>
            <TouchableOpacity style={styles.sidebarButton}>
              <Text style={styles.sidebarButtonText}>My Cart</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sidebarItem}>
            <TouchableOpacity style={styles.sidebarButton}>
              <Text style={styles.sidebarButtonText}>Payments</Text>
            </TouchableOpacity>
          </View>

          {/* Log Out button */}
          <TouchableOpacity style={[styles.sidebarItem, styles.logoutButton]}>
            <Text style={styles.sidebarText}>Log Out</Text>
          </TouchableOpacity>
        </View>
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
    flexDirection: 'row', // Arrange the sidebar and content side by side
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
    justifyContent: 'flex-end', 
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
    backgroundColor: "black",
  },
  sidebarButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Userprofilescreen;
