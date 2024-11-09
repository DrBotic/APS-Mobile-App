import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/screens/Dashboard';
import Profile from './src/screens/Profile';
import Setting from './src/screens/Setting';
import TabNavigator from './src/navigators/TabNavigator';
import Login from './src/screens/Login';
import Login_Darkmode from './src/screens/Login_dm.tsx';
import SignUp from './src/screens/SignUp';
import SignUp_Darkmode from './src/screens/SignUp_dm';
import Edit_Profile from './src/screens/Edit_Profile';
import ForgotPassword from './src/screens/ForgotPassword';
import ForgotPassword_Darkmode from './src/screens/ForgotPassword_dm';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import CustomIcon from './src/components/CustomIcon';
import Notifications from './src/screens/Notifications.tsx';

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
    <Stack.Navigator initialRouteName="Login_Darkmode">
      <Stack.Screen
        name="Login_Darkmode"
        component={Login_Darkmode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Home} //will be changed later
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword_Darkmode"
        component={ForgotPassword_Darkmode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp_Darkmode"
        component={SignUp_Darkmode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit_Profile"
        component={Edit_Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App

const styles = StyleSheet.create({});