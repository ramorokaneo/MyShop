import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CartScreen = () => {
  const cartItems = [
    { id: '1', name: 'Comfortable Sofa', quantity: 2, price: 'ZAR 17112.29', image: require('../assets/furniture1.jpg') },
    { id: '2', name: 'Dining Table', quantity: 1, price: '$299' },
    { id: '3', name: 'Brown Fabric Arm Chair', quantity: 3, price: '$199' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
      <Text style={styles.itemPrice}>Price: {item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Screen</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    marginBottom: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 16,
    color: 'gray',
  },
  itemPrice: {
    fontSize: 16,
    color: '#007BFF',
  },
});

export default CartScreen;
