// MyCartScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MyCartScreen = ({ onClose }) => {
  // Replace this with the actual cart and liked items data
  const cartItems = [];
  const purchasedItems = [];
  const likedItems = [];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>My Cart</Text>
      <View style={styles.cartSection}>
        <Text style={styles.sectionHeaderText}>Cart Items:</Text>
        {cartItems.map((item, index) => (
          <Text key={`cartItem_${index}`}>{item}</Text>
        ))}
      </View>
      <View style={styles.cartSection}>
        <Text style={styles.sectionHeaderText}>Purchased Items:</Text>
        {purchasedItems.map((item, index) => (
          <Text key={`purchasedItem_${index}`}>{item}</Text>
        ))}
      </View>
      <View style={styles.cartSection}>
        <Text style={styles.sectionHeaderText}>Liked Items:</Text>
        {likedItems.map((item, index) => (
          <Text key={`likedItem_${index}`}>{item}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartSection: {
    marginBottom: 20,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'black',
    zIndex: 1,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyCartScreen;
