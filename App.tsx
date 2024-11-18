import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/screens/Dashboard';
import Profile from './src/screens/Profile';
import Setting from './src/screens/Setting';
import TabNavigator from './src/navigators/TabNavigator';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import ForgotPassword from './src/screens/ForgotPassword';
import Edit_Profile from './src/screens/Edit_Profile';
import Home from './src/screens/Home';
import Faq from './src/screens/Faq';
import About_Us from './src/screens/About_Us';
import Service_Request from './src/screens/Service_Request';
import { NavigationContainer } from '@react-navigation/native';
import CustomIcon from './src/components/CustomIcon';
import Notifications from './src/screens/Notifications.tsx';
import { DarkModeProvider } from './src/components/DarkModeContext.tsx';

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
    <DarkModeProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
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
          name="SignUpScreen"
          component={SignUp}
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
          name="Faq"
          component={Faq}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Service_Request"
          component={Service_Request}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About_Us"
          component={About_Us}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Edit_Profile"
          component={Edit_Profile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </DarkModeProvider>
  );
};

export default App

const styles = StyleSheet.create({});