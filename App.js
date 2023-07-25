import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './view screens/HomeScreen';
import DetailsScreen from './view screens/DetailsScreen';
import {StatusBar} from 'react-native';
import COLORS from './consts/colors';
import CartScreen from './view screens/CartScreen';
import PaymentScreen from './view screens/PaymentScreen';
import SignupScreen from './view screens/SignupScreen';
import SigninScreen from './view screens/SigninScreen';



const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
      </Stack.Navigator>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;