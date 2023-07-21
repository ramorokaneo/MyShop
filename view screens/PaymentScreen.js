import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Screen</Text>
      {/* Implement your payment gateway UI and logic here */}
      <Text style={styles.paymentInfo}>Your payment gateway content here</Text>
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
    textAlign: 'center',
  },
  paymentInfo: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default PaymentScreen;
