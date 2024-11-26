import React, { useState, useEffect, FunctionComponent, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Animated,
  TouchableWithoutFeedback,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, Spacing, BorderRadius, FontSize, FontFamily } from '../theme/themes.ts';
import { ResidentialGeneratorData } from '../data/ResidentialGeneratorData.ts';
import type { ResidentialGenerator } from '../data/ResidentialGeneratorData.ts';
import MarqueeText from './MarqueeText.tsx';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Switch } from 'react-native';
import { useDarkMode } from '../components/DarkModeContext.tsx';


const {width} = Dimensions.get('screen');

const EditProfileScreen = () => {
    const [pushNotifications, setPushNotifications] = useState(false);
    const [textNotifications, setTextNotifications] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [pauseNotifications, setPauseNotifications] = useState(false);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [jobKey, setJobKey] = useState('');
    const [installationJobs, setInstallationJobs] = useState([]);
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const styles = isDarkMode ? darkStyles : lightStyles;

    const [showInfo, setShowInfo] = useState(false);
    const [showInstallation, setShowInstallation] = useState(false);
    const [generatorInfo, setGeneratorInfo] = useState<ResidentialGenerator | null>(null);
    const generatorId = 'A1';
    const [menuVisible, setMenuVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(-250)).current;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        console.log("Form submitted with:", { firstName, lastName, email, username, password, confirmPassword });
      };

      useEffect(() => {
        // Fetch user data from the database when the component mounts
        const fetchUserData = async () => {
          try {
            // Uncomment the following lines when you are able to use the actual API
            // const response = await fetch('YOUR_API_ENDPOINT'); // Replace with actual API endpoint
            // const userData = await response.json();
      
            // sample data
            const sampleData = {
              firstName: 'Emily',
              lastName: 'Harrison',
              email: 'Emily.harrison@example.com',
              username: 'idk',
              password: 'Testing_password',
            };
      
            // Set the sample data as the initial values
            setFirstName(sampleData.firstName);
            setLastName(sampleData.lastName);
            setEmail(sampleData.email);
            setUsername(sampleData.username);
            setPassword(sampleData.password);
            setConfirmPassword(sampleData.password);
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };
      
        fetchUserData();
      }, []);
      

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(slideAnim, {
        toValue: -250,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };


  // Mock data for stages and current stage
  const installationStages = [
    'Deposit Collected',
    'Equipment Order',
    'Permits Applied For',
    'Permits Received',
    'Scheduled/In-Progress',
    'Installation Completed',
  ];
  
  // Add animated value for the scrolling text
  const scrollAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startScrolling = () => {
      scrollAnim.setValue(0);
      Animated.loop(
        Animated.timing(scrollAnim, {
          toValue: -200, // Negative to scroll left
          duration: 10000, // Duration for a complete scroll
          useNativeDriver: true,
        }),
      ).start();
    };

    startScrolling();
  }, [scrollAnim]);

  // Create the animated style
  const animatedStyle = {
    transform: [
      {
        translateX: scrollAnim,
      },
    ],
  };

  const barWidth = React.useRef(new Animated.Value(0)).current;

  return (
    isDarkMode ? (
      <View style={[styles.background, { backgroundColor: '#202020' }]}>
        <View style={styles.logoContainer}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
        <Image 
          source={require('../assets/images/Menu_DM.png')}
          style={styles.menuIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>

        <Image
          source={require('../assets/images/anderson-power-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

        <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Edit Profile</Text>
        <View style={styles.formContainer}>
            <Text style={styles.label}>Enter your First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholderTextColor="#BBBBBB"
          />
          <Text style={styles.label}>Enter your Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            placeholderTextColor="#BBBBBB"
          />
          <Text style={styles.label}>Enter your Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#BBBBBB"
          />
          <Text style={styles.label}>Enter your Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#BBBBBB"
          />
          <Text style={styles.label}>Confirm your Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholderTextColor="#BBBBBB"
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}  onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
            </View>
        </ScrollView>

        {/* Animated Side Menu */}
        {/* Animated Side Menu */}
    <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
          {/* Logo Icon */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/Arrow_logo.png')}
              style={styles.Menu_Logo}
              resizeMode="contain"
              />
          </View>

          {/* Menu Items */}
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('HomeScreen')}>
            <Image
            source={require('../assets/images/Home_DM.png')}
            style={styles.adLogo}
            resizeMode="contain"
            />
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../assets/images/Profile_DM.png')}
              style={styles.adLogo}
              resizeMode="contain"
              />
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notifications')}>
            <Image
              source={require('../assets/images/Bell_DM.png')}
              style={styles.adLogo}
              resizeMode="contain"
              />
            <Text style={styles.menuText}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('')}>
            <Image
              source={require('../assets/images/Tool_DM.png')}
              style={styles.adLogo}
              resizeMode="contain"
              />
            <Text style={styles.menuText}>Service Request</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('')}>
            <Image
              source={require('../assets/images/FAQ_DM.png')}
              style={styles.adLogo}
              resizeMode="contain"
              />
            <Text style={styles.menuText}>FAQ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('')}>
            <Image
              source={require('../assets/images/About_DM.png')}
              style={styles.adLogo}
              resizeMode="contain"
              />
            <Text style={styles.menuText}>About Us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}>
            <Image
              source={require('../assets/images/Logout_DM.png')}
              style={styles.adLogo}
              resizeMode="contain"
              />
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    ) : (
    <ImageBackground
      source={require('../assets/images/map.png')}
      resizeMode="cover"
      blurRadius={5}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
        <Image 
          source={require('../assets/images/Menu.png')}
          style={styles.menuIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>

        <Image
          source={require('../assets/images/anderson-power-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

        <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Edit Profile</Text>
        <View style={styles.formContainer}>
            <Text style={styles.label}>Enter your First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholderTextColor="#BBBBBB"
          />
          <Text style={styles.label}>Enter your Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            placeholderTextColor="#BBBBBB"
          />
          <Text style={styles.label}>Enter your Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#BBBBBB"
          />
          <Text style={styles.label}>Enter your Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#BBBBBB"
          />
          <Text style={styles.label}>Confirm your Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholderTextColor="#BBBBBB"
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}  onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
            </View>
        </ScrollView>

        {/* Animated Side Menu */}
        {/* Animated Side Menu */}
    <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
          {/* Logo Icon */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/Arrow_logo.png')}
              style={styles.Menu_Logo}
              resizeMode="contain"
              />
          </View>

          {/* Menu Items */}
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('HomeScreen')}>
            <Image
            source={require('../assets/images/Home.png')}
            style={styles.adLogo}
            resizeMode="contain"
            />
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../assets/images/Profile.png')}
              style={styles.adLogo}
              resizeMode="contain"
              />
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notifications')}>
            <Image
              source={require('../assets/images/Bell.png')}
              style={styles.adLogo}
              resizeMode="contain"
              />
            <Text style={styles.menuText}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('')}>
            <Image
              source={require('../assets/images/Tool.png')}
              style={styles.adLogo}
              resizeMode="contain"
              />
            <Text style={styles.menuText}>Service Request</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('')}>
            <Image
              source={require('../assets/images/FAQ.png')}
              style={styles.adLogo}
              resizeMode="contain"
              />
            <Text style={styles.menuText}>FAQ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('')}>
            <Image
              source={require('../assets/images/About.png')}
              style={styles.adLogo}
              resizeMode="contain"
              />
            <Text style={styles.menuText}>About Us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}>
            <Image
              source={require('../assets/images/Logout.png')}
              style={styles.adLogo}
              resizeMode="contain"
              />
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </Animated.View>
    </ImageBackground>
    )
  );
};

export default EditProfileScreen;

const lightStyles = StyleSheet.create({
  background: {
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
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: Spacing.space_50,
  },
  title: {
    fontSize: FontSize.size_large,
    fontFamily: FontFamily.montserrat_bold,
    marginBottom: Spacing.space_20,
    color: Color.white,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  line: {
    width: '80%',
    height: 2,
    backgroundColor: Color.white,
    marginBottom: Spacing.space_30,
  },
  adContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.white,
    padding: Spacing.space_10,
    borderTopLeftRadius: BorderRadius.radius_20,
    borderTopRightRadius: BorderRadius.radius_20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  adLogo: {
    width: 40,
    height: 40,
    marginRight: Spacing.space_10,
  },
  scrollingText: {
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_regular,
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
    paddingTop: Spacing.space_50,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: Spacing.space_20,
  },
  menuIcon: {
    padding: 15,
    position: 'absolute',
    width: 40,
    height: 40,
    top: 16,
    left: 10,
    zIndex: 1,
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 18,
    marginLeft: 10,
    color: 'black',
  },
  Menu_Logo: {
    width: 90,
    height: 90,
    marginRight: Spacing.space_10,
  },
  formContainer: {
    backgroundColor: Color.white,
    borderRadius: BorderRadius.radius_20,
    width: '90%',
    height: '80%',
    padding: Spacing.space_20,
    alignItems: 'center',
    shadowColor: Color.grayDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  input: {
    width: '95%',
    height: 40,
    borderColor: Color.gray,
    borderWidth: 1,
    borderRadius: BorderRadius.radius_10,
    paddingHorizontal: Spacing.space_10,
    marginBottom: Spacing.space_40,
    marginTop: Spacing.space_30,
  },
  submitButton: {
    backgroundColor: Color.red,
    borderRadius: BorderRadius.radius_10,
    paddingVertical: Spacing.space_10,
    paddingHorizontal: Spacing.space_20,
    marginTop: Spacing.space_10,
  },
  submitButtonText: {
    color: Color.white,
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_bold,
  },  
  label: {
    fontSize: FontSize.size_normal,
    fontFamily: FontFamily.montserrat_regular,
    color: '#111111',
    marginBottom: Spacing.space_20,
    paddingTop: Spacing.space_30,
  },
});

const darkStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#121212', // Dark background for overall view
  },
  logoContainer: {
    backgroundColor: '#2C2C2C', // Medium grey for better contrast
    paddingTop: 20,
    alignItems: 'center',
    paddingBottom: 10,
  },
  logo: {
    width: 180,
    height: 60,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: Spacing.space_50,
  },
  title: {
    fontSize: FontSize.size_large,
    fontFamily: FontFamily.montserrat_bold,
    marginBottom: Spacing.space_20,
    color: '#FFFFFF', // White for strong contrast
    textShadowColor: 'rgba(255, 255, 255, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  line: {
    width: '80%',
    height: 2,
    backgroundColor: '#CCCCCC', // Light grey for lines
    marginBottom: Spacing.space_30,
  },
  adContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2C2C2C', // Medium grey for the ad container
    padding: Spacing.space_10,
    borderTopLeftRadius: BorderRadius.radius_20,
    borderTopRightRadius: BorderRadius.radius_20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  adLogo: {
    width: 40,
    height: 40,
    marginRight: Spacing.space_10,
  },
  scrollingText: {
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_regular,
    color: '#FFFFFF', // Light grey, close to white
  },
  container: {
    backgroundColor: '#2C2C2C', // Medium grey for main containers
    padding: Spacing.space_50,
    borderRadius: BorderRadius.radius_20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingTop: Spacing.space_50,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: Spacing.space_20,
  },
  menuIcon: {
    padding: 15,
    position: 'absolute',
    width: 40,
    height: 40,
    top: 16,
    left: 10,
    zIndex: 1,
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#2C2C2C', // Slightly lighter grey for sidebar
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#FFFFFF', // Bright white for menu text
  },
  Menu_Logo: {
    width: 90,
    height: 90,
    marginRight: Spacing.space_10,
  },
  formContainer: {
    backgroundColor: '#2C2C2C', // Medium grey for profile container
    padding: Spacing.space_20,
    borderRadius: BorderRadius.radius_10,
    width: '90%',
    height: '85%',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  input: {
    width: '95%',
    height: 40,
    borderColor: '#666666', // Darker grey border
    borderWidth: 1,
    borderRadius: BorderRadius.radius_10,
    paddingHorizontal: Spacing.space_10,
    marginBottom: Spacing.space_40,
    marginTop: Spacing.space_30,
    color: '#FFFFFF', // White input text
  },
  submitButton: {
    backgroundColor: '#FF3B30', // Bright red for the button
    borderRadius: BorderRadius.radius_10,
    paddingVertical: Spacing.space_10,
    paddingHorizontal: Spacing.space_20,
    marginTop: Spacing.space_10,
  },
  submitButtonText: {
    color: '#FFFFFF', // White text on red button
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_bold,
  },
  label: {
    fontSize: FontSize.size_normal,
    fontFamily: FontFamily.montserrat_regular,
    color: '#F5F5F5', // Lighter grey for labels
    marginBottom: Spacing.space_20,
    paddingTop: Spacing.space_30,
  },
});