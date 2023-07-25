import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './view screens/HomeScreen';
import DetailsScreen from './view screens/DetailsScreen';
import CartScreen from './view screens/CartScreen';
import PaystackWebView from 'react-native-paystack-webview';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
