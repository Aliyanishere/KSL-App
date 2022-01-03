import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../Screen/Signin';
import Signup from '../Screen/Signup';
import Home from '../Screen/Home';
import Form from '../Screen/Form';
import Login from '../Screen/manager/Login';
import Selection from "../Screen/manager/Selection"
import VerifyWithID from "../Screen/manager/VerifyWithID"
import VerifyWithQR from "../Screen/manager/VerifyWithQR"


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        { headerShown: false }
      }>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Selection" component={Selection} />
        <Stack.Screen name="VerifyWithID" component={VerifyWithID} />
        <Stack.Screen name="VerifyWithQR" component={VerifyWithQR} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}