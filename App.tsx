import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/screens/Dashboard';
import Profile from './src/screens/Profile';
import Setting from './src/screens/Setting';
import TabNavigator from './src/navigators/TabNavigator';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp'
import ForgotPassword from './src/screens/ForgotPassword'
import { NavigationContainer } from '@react-navigation/native';
import CustomIcon from './src/components/CustomIcon';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    /*
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown: false}}>
        <Stack.Screen
          name = "Tab"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen
          name = "Profile"
          component={Profile}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen
          name = "Setting"
          component={Setting}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    */
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigator} //will be changed later
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App

const styles = StyleSheet.create({});