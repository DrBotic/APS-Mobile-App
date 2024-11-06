import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Spacing, Color, FontFamily, FontSize, BorderRadius } from '../theme/themes.ts';
import { useDarkMode } from '../components/DarkModeContext.tsx';


const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const styles = isDarkMode ? darkStyles : lightStyles;

  return (
    <ImageBackground
      source={require('../assets/images/map.png')}
      resizeMode="cover"
      blurRadius={5}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/anderson-power-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Text style={styles.label}>Enter your Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={Color.gray}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.buttonText}>Send Email</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;

const lightStyles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  logoContainer: {
    backgroundColor: Color.white, // White background for the top logo section
    paddingTop: 20,
    alignItems: 'center',
    paddingBottom: 10,
  },
  logo: {
    width: 180, // Adjust size as needed
    height: 60,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: Color.white,
    padding: Spacing.space_50,
    borderRadius: BorderRadius.radius_20,
    width: '80%',
    alignItems: 'center',
    shadowColor: Color.grayDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    fontSize: FontSize.size_normal,
    fontFamily: FontFamily.montserrat_regular,
    marginBottom: Spacing.space_20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: Color.gray,
    borderWidth: 1,
    borderRadius: BorderRadius.radius_8,
    paddingHorizontal: Spacing.space_20,
    marginBottom: Spacing.space_30,
    fontFamily: FontFamily.sansSerif_regular,
  },
  button: {
    backgroundColor: Color.red,
    width: '100%',
    paddingVertical: Spacing.space_20,
    borderRadius: BorderRadius.radius_30,
    alignItems: 'center',
    marginVertical: Spacing.space_20,
  },
  buttonText: {
    color: Color.white,
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_bold,
  },
  linkText: {
    color: Color.primary,
    textDecorationLine: 'underline',
    fontSize: FontSize.size_small,
    marginVertical: Spacing.space_20,
  },
});

const darkStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#3A3A3A',  // Dark background color
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#4A4A4A',  // Dark safe area background
  },
  logoContainer: {
    backgroundColor: '#393939',  // Dark background for logo container
    paddingTop: 20,
    alignItems: 'center',
    paddingBottom: 10,
  },
  logo: {
    width: 180,
    height: 60,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#5A5A5A',  // Dark gray background for the main container
    padding: Spacing.space_50,
    borderRadius: BorderRadius.radius_20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',  // Dark shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  label: {
    fontSize: FontSize.size_normal,
    fontFamily: FontFamily.montserrat_regular,
    color: '#FFFFFF',  // White label text color
    marginBottom: Spacing.space_20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#888888',  // Gray border color
    borderWidth: 1,
    borderRadius: BorderRadius.radius_8,
    paddingHorizontal: Spacing.space_20,
    marginBottom: Spacing.space_30,
    color: '#FFFFFF',  // White input text color
    fontFamily: FontFamily.sansSerif_regular,
  },
  button: {
    backgroundColor: '#2C2C2C',  // Dark button background color
    width: '100%',
    paddingVertical: Spacing.space_20,
    borderRadius: BorderRadius.radius_30,
    alignItems: 'center',
    marginVertical: Spacing.space_20,
  },
  buttonText: {
    color: '#FFFFFF',  // White button text color
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_bold,
  },
  linkText: {
    color: '#CCCCCC',  // Light gray for links
    textDecorationLine: 'underline',
    fontSize: FontSize.size_small,
    marginVertical: Spacing.space_20,
  },
});