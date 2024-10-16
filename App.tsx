import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CustomIcon from './src/components/CustomIcon';
import Dashboard from './src/screens/Dashboard';
import Profile from './src/screens/Profile';
import Setting from './src/screens/Setting';
import { SafeAreaView } from 'react-native';

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
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="HomeScreen"
        component={Dashboard} //will be changed later
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  /*
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  </NavigationContainer>
  */
  );
};

export default App

const styles = StyleSheet.create({});