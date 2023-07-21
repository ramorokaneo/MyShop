import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const CartScreen = () => {
  const cartItems = [
    {
      id: '1',
      name: 'Comfortable Sofa',
      quantity: 2,
      price: 17112.29,
      image: require('../assets/furniture1.jpg'),
    },
    {
      id: '2',
      name: 'Dining Table',
      quantity: 1,
      price: 5385.86,
      image: require('../assets/furniture3.jpg'),
    },
    {
      id: '3',
      name: 'Brown Fabric Arm Chair',
      quantity: 3,
      price: 3584.57,
      image: require('../assets/furniture4.jpg'),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
      <Text style={styles.itemPrice}>Price: ZAR {item.price.toFixed(2)}</Text>
      <Image source={item.image} style={{ height: 80, width: 100 }} />
    </View>
  );

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Screen</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text style={styles.totalAmount}>Total Amount: ZAR {totalAmount.toFixed(2)}</Text>
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
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    textAlign: 'center',
  },
});

export default CartScreen;
