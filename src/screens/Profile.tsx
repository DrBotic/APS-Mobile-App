
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
import CheckBox from '@react-native-community/checkbox';
import { useDarkMode } from '../components/DarkModeContext.tsx';


const { width } = Dimensions.get('screen');

const ProfileScreen = () => {
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
  const [apsDefaultMode, setApsDefaultMode] = useState(true);
  const [mapChecked, setMapChecked] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  useEffect(() => {
    // Fetch user data from the database when the component mounts
    const fetchUserData = async () => {
      try {
        // Uncomment the following lines when you are able to use the actual API
        // const response = await fetch('YOUR_API_ENDPOINT'); // Replace with actual API endpoint
        // const userData = await response.json();

        // sample data
        const sampleData = {
          firstName: 'Ezra',
          lastName: 'Boerman',
          email: 'ezra@ezra.com',
          password: 'ezra',
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
          <Text style={styles.title}>Profile</Text>
          <View style={styles.line} />
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={[styles.profileContainer, { justifyContent: 'space-between', paddingVertical: 20 }]}>
              {/* Removed Username row */}
              <View style={styles.row}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>{firstName} {lastName}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Email:</Text>
              </View>
              <View>
                <Text style={styles.value}>{email}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Password</Text>
                <Text style={styles.value}>{showPassword ? password : "**********"}</Text>
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Text style={styles.togglePassword}>{showPassword ? "Hide" : "Show"}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Dark Mode</Text>
                <Switch
                  value={isDarkMode}
                  onValueChange={toggleDarkMode}
                  trackColor={{ false: Color.gray, true: Color.grayDark }}
                />
              </View>

              <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Edit_Profile')}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

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

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Service_Request')}>
              <Image
                source={require('../assets/images/Tool_DM.png')}
                style={styles.adLogo}
                resizeMode="contain"
              />
              <Text style={styles.menuText}>Service Request</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Faq')}>
              <Image
                source={require('../assets/images/FAQ_DM.png')}
                style={styles.adLogo}
                resizeMode="contain"
              />
              <Text style={styles.menuText}>FAQ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('About_Us')}>
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
          {/* Ad Section with scrolling text */}
          <View style={styles.adContainer}>
            <Animated.View style={[animatedStyle, styles.scrollingText]}>
              <MarqueeText text="This is a scrolling marquee text in React Native!" />
            </Animated.View>
          </View>
        </ScrollView>
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
          <Text style={styles.title}>Profile</Text>
          <View style={styles.line} />
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={[styles.profileContainer, { justifyContent: 'space-between', paddingVertical: 20 }]}>
              {/* Removed Username row */}
              <View style={styles.row}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>{firstName} {lastName}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Email:</Text>
              </View>
              <View>
                <Text style={styles.value}>{email}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Password</Text>
                <Text style={styles.value}>{showPassword ? password : "**********"}</Text>
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Text style={styles.togglePassword}>{showPassword ? "Hide" : "Show"}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Dark Mode</Text>
                <Switch
                  value={isDarkMode}
                  onValueChange={toggleDarkMode}
                  trackColor={{ false: Color.gray, true: Color.grayDark }}
                />
              </View>

              <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Edit_Profile')}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

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

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Service_Request')}>
              <Image
                source={require('../assets/images/Tool.png')}
                style={styles.adLogo}
                resizeMode="contain"
              />
              <Text style={styles.menuText}>Service Request</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Faq')}>
              <Image
                source={require('../assets/images/FAQ.png')}
                style={styles.adLogo}
                resizeMode="contain"
              />
              <Text style={styles.menuText}>FAQ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('About_Us')}>
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
          {/* Ad Section with scrolling text */}
          <View style={styles.adContainer}>
            <Animated.View style={[animatedStyle, styles.scrollingText]}>
              <MarqueeText text="This is a scrolling marquee text in React Native!" />
            </Animated.View>
          </View>
        </ScrollView>
      </ImageBackground>
    )
  );
};

export default ProfileScreen;

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
    color: 'black',
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
  profileContainer: {
    backgroundColor: Color.white,
    padding: Spacing.space_20,
    borderRadius: BorderRadius.radius_10,
    width: '90%',
    height: '85%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: Spacing.space_40,
    padding: Spacing.space_20,
  },
  label: {
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_regular,
    color: 'rgba(1, 1, 1, 1)',
  },
  value: {
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_regular,
    color: Color.grayDark,
  },
  togglePassword: {
    color: Color.primary,
    fontSize: FontSize.size_small,
  },
  editButton: {
    backgroundColor: Color.red,
    paddingVertical: Spacing.space_10,
    paddingHorizontal: Spacing.space_40,
    borderRadius: BorderRadius.radius_5,
    marginTop: Spacing.space_40,
  },
  editButtonText: {
    color: Color.white,
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_bold,
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
  profileContainer: {
    backgroundColor: '#2C2C2C', // Medium grey for profile container
    padding: Spacing.space_20,
    borderRadius: BorderRadius.radius_10,
    width: '90%',
    height: '85%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: Spacing.space_40,
    padding: Spacing.space_20,
  },
  label: {
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_regular,
    color: '#F5F5F5', // Lighter grey for readability
  },
  value: {
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_regular,
    color: '#E0E0E0', // Close to white for value text
  },
  togglePassword: {
    color: '#007AFF', // Blue accent for password toggle
    fontSize: FontSize.size_small,
  },
  editButton: {
    backgroundColor: '#FF3B30', // Bright red for the edit button
    paddingVertical: Spacing.space_10,
    paddingHorizontal: Spacing.space_40,
    borderRadius: BorderRadius.radius_5,
    marginTop: Spacing.space_40,
  },
  editButtonText: {
    color: '#FFFFFF', // White text on red button
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_bold,
  },
  /*transparentBorder: {
    position: 'absolute',
    top: 0,
    left: 250, // Match this to the menuContainer width
    width: 20, // Adjust to control border thickness
    height: '100%',
    backgroundColor: 'rgba(44, 44, 44, 0.7)', // 50% opacity for transparency
  },*/
});