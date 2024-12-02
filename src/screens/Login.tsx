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
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { Spacing, Color, FontFamily, FontSize, BorderRadius } from '../theme/themes.ts';
import { useDarkMode } from '../components/DarkModeContext.tsx';


const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const styles = isDarkMode ? darkStyles : lightStyles;

  const handleLogin = async () => {
    const login_API_URL =
      Platform.OS === "android"
        ? "http://10.96.33.238:8080/api/v1/auth/login" // Correct endpoint
        : "http://10.96.33.238:8080/api/v1/auth/login"; // For iOS or local development

    setIsLoading(true);

    try {
      const response = await fetch(login_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();

      // Check if token exists in response
      if (data.token) {
        await AsyncStorage.setItem('authToken', data.token);
        // Navigate to the next page and pass user data if needed
        navigation.navigate('HomeScreen', { user: data });
      } else {
        throw new Error('User verification failed');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };


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

            <Text style={styles.label}>Enter your Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={Color.gray}
            />

            <TouchableOpacity
              style={[
                styles.button,
                (!email || !password || isLoading) && styles.disabledButton,
              ]}
              onPress={handleLogin}
              disabled={!email || !password || isLoading}
            >
              <Text style={styles.buttonText}>
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPasswordScreen')}
            >
              <Text style={styles.linkText}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('SignUpScreen')}
            >
              <Text style={styles.buttonText}>Sign up</Text>
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
    backgroundColor: Color.white,
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
    color: '#111111',
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
    backgroundColor: '#202020',  // Dark grey background
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#202020',  // Matching dark grey for safe area
  },
  logoContainer: {
    backgroundColor: '#2C2C2C',  // Medium grey for logo container
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
    backgroundColor: '#2C2C2C',  // Medium grey for containers
    padding: Spacing.space_50,
    borderRadius: BorderRadius.radius_20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  label: {
    fontSize: FontSize.size_normal,
    fontFamily: FontFamily.montserrat_regular,
    color: '#FFFFFF',  // White color for labels for high contrast
    marginBottom: Spacing.space_20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#888888',  // Light grey border color
    borderWidth: 1,
    borderRadius: BorderRadius.radius_8,
    paddingHorizontal: Spacing.space_20,
    marginBottom: Spacing.space_30,
    color: '#FFFFFF',  // White text for input fields
    fontFamily: FontFamily.sansSerif_regular,
  },
  button: {
    backgroundColor: '#3C3C3C',  // Slightly lighter grey for buttons
    width: '100%',
    paddingVertical: Spacing.space_20,
    borderRadius: BorderRadius.radius_30,
    alignItems: 'center',
    marginVertical: Spacing.space_20,
  },
  disabledButton: {
    backgroundColor: Color.gray, // Adjust this color as needed
  },
  buttonText: {
    color: '#FFFFFF',  // White text for button
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_bold,
  },
  linkText: {
    color: '#CCCCCC',  // Light grey color for links
    textDecorationLine: 'underline',
    fontSize: FontSize.size_small,
    marginVertical: Spacing.space_20,
  },
});