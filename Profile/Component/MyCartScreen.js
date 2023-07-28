import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyCartScreen = () => {
  // Replace this with the actual cart and liked items data
  const cartItems = [];
  const purchasedItems = [];
  const likedItems = [];

  return (
    <View style={styles.container}>
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
});

export default MyCartScreen;
