import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './view screens/HomeScreen';
import DetailsScreen from './view screens/DetailsScreen';
import CartScreen from './view screens/CartScreen';
import PaymentScreen from './view screens/PaymentScreen';
import ProfileScreen from './Profile/ProfileScreen';
import RegistrationScreen from './Profile/RegistrationScreen';


const Stack = createStackNavigator();

const App = () => {
  const [message, setMessage] = useState('');
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});