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

const {width} = Dimensions.get('screen');

const About_Us = () => {
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
            firstName: 'Emily',
            lastName: 'Harrison',
            email: 'Emily.harrison@example.com',
            username: 'emily_h23',
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

      {/* About Us Section */}
      <ScrollView contentContainerStyle={[styles.aboutUsContainer, { paddingBottom: 80 }]}>
        <Text style={styles.aboutUsTitle}>About Anderson Power Services</Text>
        <View style={styles.line} />
        <Text style={styles.aboutUsText}>
          Anderson Power Services has been a trusted provider of high-quality generator services for over 25 years. We specialize in 
          residential, commercial, and industrial generator installation, repair, and maintenance. Our mission is to ensure your power systems 
          operate efficiently, providing you with peace of mind during power outages and emergencies.
        </Text>

        <Text style={styles.aboutUsText}>
          Whether you're planning for the future or dealing with urgent power needs, Anderson Power Services is here to help. Our certified 
          technicians deliver expert services to meet your unique energy needs. We are committed to exceptional service, customer satisfaction, 
          and reliable energy solutions.
        </Text>

        {/* Contact Information */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Contact Us</Text>
          <Text style={styles.contactText}>Phone: (770) 525-5471</Text>
          <Text style={styles.contactText}>Email: sales@andersonpowerservices.com</Text>
          <Text style={styles.contactText}>Website: <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://www.andersonpowerservices.com')}>www.andersonpowerservices.com</Text></Text>
        </View>

        {/* Company Stats */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Our Expertise in Numbers</Text>
          <Text style={styles.statsText}>Over 1,000 satisfied customers</Text>
          <Text style={styles.statsText}>More than 25 years in the industry</Text>
          <Text style={styles.statsText}>Serving 5 states: Georgia, South Carolina, South Alabama, Florida, and beyond</Text>
          <Text style={styles.statsText}>100+ certified technicians</Text>
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

      {/* About Us Section */}
      <ScrollView contentContainerStyle={[styles.aboutUsContainer, { paddingBottom: 80 }]}>
        <Text style={styles.aboutUsTitle}>About Anderson Power Services</Text>
        <View style={styles.line} />
        <Text style={styles.aboutUsText}>
          Anderson Power Services has been a trusted provider of high-quality generator services for over 25 years. We specialize in 
          residential, commercial, and industrial generator installation, repair, and maintenance. Our mission is to ensure your power systems 
          operate efficiently, providing you with peace of mind during power outages and emergencies.
        </Text>

        <Text style={styles.aboutUsText}>
          Whether you're planning for the future or dealing with urgent power needs, Anderson Power Services is here to help. Our certified 
          technicians deliver expert services to meet your unique energy needs. We are committed to exceptional service, customer satisfaction, 
          and reliable energy solutions.
        </Text>

        {/* Contact Information */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Contact Us</Text>
          <Text style={styles.contactText}>Phone: (770) 525-5471</Text>
          <Text style={styles.contactText}>Email: sales@andersonpowerservices.com</Text>
          <Text style={styles.contactText}>Website: <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://www.andersonpowerservices.com')}>www.andersonpowerservices.com</Text></Text>
        </View>

        {/* Company Stats */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Our Expertise in Numbers</Text>
          <Text style={styles.statsText}>Over 1,000 satisfied customers</Text>
          <Text style={styles.statsText}>More than 25 years in the industry</Text>
          <Text style={styles.statsText}>Serving 5 states: Georgia, South Carolina, South Alabama, Florida, and beyond</Text>
          <Text style={styles.statsText}>100+ certified technicians</Text>
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
    </ImageBackground>
    )
  );
};


export default About_Us;

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
    aboutUsContainer: {
      backgroundColor: '#ffffff',
      padding: 30,
      marginHorizontal: 20,
      marginTop: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    },
    aboutUsTitle: {
      fontSize: 28,
      fontFamily: FontFamily.montserrat_bold,
      color: '#005b8c',  // Dark blue like their site header
      marginBottom: 15,
      textAlign: 'center',
    },
    aboutUsText: {
      fontSize: 18,
      fontFamily: FontFamily.montserrat_regular,
      color: '#5f5f5f',  // Gray text color like on their page
      lineHeight: 24,
      textAlign: 'justify',
      marginBottom: 20,
    },
    statsContainer: {
      marginTop: 40,
    },
    statsTitle: {
      fontSize: 24,
      fontFamily: FontFamily.montserrat_bold,
      color: '#005b8c',
      marginBottom: 10,
      textAlign: 'center',
    },
    statsText: {
      fontSize: 18,
      fontFamily: FontFamily.montserrat_regular,
      color: '#5f5f5f',
      textAlign: 'center',
      marginBottom: 10,
    },
    footerContainer: {
      backgroundColor: '#003f5f',  // Dark blue footer like their site
      paddingVertical: 20,
      paddingHorizontal: 30,
      alignItems: 'center',
    },
    footerText: {
      color: 'white',
      fontSize: 16,
      fontFamily: FontFamily.montserrat_regular,
    },
  });
  
  



  const darkStyles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#121212', // Dark background for overall view
    },
    logoContainer: {
      backgroundColor: '#2C2C2C', // Darker grey background
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
      color: '#FFFFFF', // White text for title
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 4,
    },
    line: {
      width: '80%',
      height: 2,
      backgroundColor: '#444444', // Darker line color
      marginBottom: Spacing.space_30,
    },
    adContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#2C2C2C', // Dark background for ad container
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
      color: '#FFFFFF', // White text for scrolling text
    },
    container: {
      backgroundColor: '#2C2C2C', // Dark grey for container
      padding: Spacing.space_50,
      borderRadius: BorderRadius.radius_20,
      width: '80%',
      alignItems: 'center',
      shadowColor: '#000000',
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
      tintColor: '#FFFFFF', // White color for menu icon
    },
    menuContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 250,
      height: '100%',
      backgroundColor: '#2C2C2C', // Dark grey for menu container
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
      color: '#FFFFFF', // White text for menu items
    },
    Menu_Logo: {
      width: 90,
      height: 90,
      marginRight: Spacing.space_10,
    },
    profileContainer: {
      backgroundColor: '#2C2C2C', // Dark grey for profile container
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
      color: '#FFFFFF', // White text for label
    },
    value: {
      fontSize: FontSize.size_medium,
      fontFamily: FontFamily.montserrat_regular,
      color: '#BDBDBD', // Darker gray for value text
    },
    togglePassword: {
      color: '#00BFFF', // Brighter blue for password toggle
      fontSize: FontSize.size_small,
    },
    editButton: {
      backgroundColor: Color.red, // Red for edit button
      paddingVertical: Spacing.space_10,
      paddingHorizontal: Spacing.space_40,
      borderRadius: BorderRadius.radius_5,
      marginTop: Spacing.space_40,
    },
    editButtonText: {
      color: '#FFFFFF', // White text for the edit button
      fontSize: FontSize.size_medium,
      fontFamily: FontFamily.montserrat_bold,
    },
    aboutUsContainer: {
      backgroundColor: '#2C2C2C', // Dark grey background for About Us section
      padding: 30,
      marginHorizontal: 20,
      marginTop: 20,
      borderRadius: 10,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    },
    aboutUsTitle: {
      fontSize: 28,
      fontFamily: FontFamily.montserrat_bold,
      color: '#00BFFF', // Brighter blue for title
      marginBottom: 15,
      textAlign: 'center',
    },
    aboutUsText: {
      fontSize: 18,
      fontFamily: FontFamily.montserrat_regular,
      color: '#FFFFFF',  // White text for about us content
      lineHeight: 24,
      textAlign: 'justify',
      marginBottom: 20,
    },
    statsContainer: {
      marginTop: 40,
    },
    statsTitle: {
      fontSize: 24,
      fontFamily: FontFamily.montserrat_bold,
      color: '#00BFFF', // Brighter blue for stats title
      marginBottom: 10,
      textAlign: 'center',
    },
    statsText: {
      fontSize: 18,
      fontFamily: FontFamily.montserrat_regular,
      color: '#FFFFFF', // White text for stats
      textAlign: 'center',
      marginBottom: 10,
    },
    footerContainer: {
      backgroundColor: '#003f5f',  // Dark blue footer like their site
      paddingVertical: 20,
      paddingHorizontal: 30,
      alignItems: 'center',
    },
    footerText: {
      color: '#FFFFFF', // White text for footer
      fontSize: 16,
      fontFamily: FontFamily.montserrat_regular,
    },
    contactContainer: {
        backgroundColor: '#2C2C2C', // Dark grey background for contact section
        padding: Spacing.space_20,
        borderRadius: BorderRadius.radius_10,
        marginTop: Spacing.space_40,
        alignItems: 'flex-start', // Align text to the left
        width: '90%',
      },
      contactTitle: {
        fontSize: FontSize.size_large,
        fontFamily: FontFamily.montserrat_bold,
        color: '#FFFFFF', // White text for title
        marginBottom: Spacing.space_10,
      },
      contactText: {
        fontSize: FontSize.size_normal,
        fontFamily: FontFamily.montserrat_regular,
        color: '#FFFFFF', // White text for contact details
        marginBottom: Spacing.space_10,
      },
      contactLink: {
        color: '#00BFFF', // Brighter blue for links
        textDecorationLine: 'underline', // Underline for link
      },
  });
  