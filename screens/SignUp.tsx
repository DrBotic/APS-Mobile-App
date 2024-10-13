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
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import { Spacing, Color, FontFamily, FontSize, BorderRadius } from '../theme/themes.ts';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  const openTermsLink = () => {
    Linking.openURL('https://your-terms-of-service-url.com'); //APS can add a terms of service link here if needed. 
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
            <Text style={styles.label}>Enter your First name</Text>
            <TextInput
              style={styles.input}
              placeholder="First name"
              value={username}
              onChangeText={setUsername}
              placeholderTextColor={Color.gray}
            />

            <Text style={styles.label}>Enter your Last name</Text>
            <TextInput
              style={styles.input}
              placeholder="Last name"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={Color.gray}
            />

            <Text style={styles.label}>Enter your Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={Color.gray}
            />

            <Text style={styles.label}>Enter a Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={Color.gray}
            />

            <Text style={styles.label}>Enter a Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={Color.gray}
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={Color.gray}
            />

            {/* Checkbox with Terms of Service */}
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isChecked}
                onValueChange={setChecked}
                tintColors={{ true: Color.primary, false: Color.gray }}
              />
              <Text style={styles.checkboxText}>
                I accept the{' '}
                <Text style={styles.linkText} onPress={openTermsLink}>
                  Terms of Service
                </Text>
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.button, { opacity: isChecked ? 1 : 0.5 }]}
              onPress={() => isChecked && navigation.navigate('Login')}
              disabled={!isChecked}
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

const styles = StyleSheet.create({
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.space_20,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: FontSize.size_normal,
    fontFamily: FontFamily.montserrat_regular,
  },
  linkText: {
    color: Color.primary,
    textDecorationLine: 'underline',
  },
});
