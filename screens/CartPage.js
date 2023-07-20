import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const CartPage = ({ route }) => {
  const { cart } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Page</Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.cartItemName}>{item.name}</Text>
              <Text style={styles.cartItemPrice}>${item.price}</Text>
            </View>
          )}
        />
      )}
      <Button title="Go Back to Products" onPress={() => navigation.navigate('ProductPage')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  cartItemName: {
    fontSize: 16,
    marginBottom: 5,
  },
  cartItemPrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default CartPage;
