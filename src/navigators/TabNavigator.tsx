import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Setting from '../screens/Setting';
import Profile from '../screens/Profile';
import { Color } from '../theme/themes';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions = {{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        }}>
        <Tab.Screen name='Setting' 
        component={Setting} 
        options={{
            tabBarIcon: ({focused, color, size}) => (
                <CustomIcon  
                    name="settings"
                    size = {25}
                    color = {focused ? Color.red : Color.grayDark}
                />
            )
        }}></Tab.Screen>
        <Tab.Screen name='Dashboard' 
        component={Dashboard} 
        options={{
            tabBarIcon: ({focused, color, size}) => (
                <CustomIcon  
                    name="home"
                    size = {25}
                    color = {focused ? Color.red : Color.grayDark}
                />
            )
        }}></Tab.Screen>
        <Tab.Screen name='Profile' 
        component={Profile}
        options={{
            tabBarIcon: ({focused, color, size}) => (
                <CustomIcon  
                    name="profile"
                    size = {25}
                    color = {focused ? Color.red : Color.grayDark}
                />
            )
        }}></Tab.Screen>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: Color.white,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
    }

});

export default TabNavigator