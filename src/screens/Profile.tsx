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


const {width} = Dimensions.get('screen');

const ProfileScreen = () => {
    const [pushNotifications, setPushNotifications] = useState(false);
    const [textNotifications, setTextNotifications] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [pauseNotifications, setPauseNotifications] = useState(false);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [jobKey, setJobKey] = useState('');
    const [installationJobs, setInstallationJobs] = useState([]);

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
    <ImageBackground
      source={require('../assets/images/map.png')}
      resizeMode="cover"
      blurRadius={5}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
        <Image 
          source={require('../assets/images/menu.png')}
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

      <View style={styles.profileContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Username</Text>
          <Text style={styles.value}>{username}</Text>
        </View>
        
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
          <Text style={styles.label}>APS Default Mode</Text>
          <Switch
            value={apsDefaultMode}
            onValueChange={setApsDefaultMode}
            trackColor={{ false: Color.gray, true: Color.grayDark }}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Map?</Text>
          <CheckBox
            value={mapChecked}
            onValueChange={setMapChecked}
            tintColors={{ true: Color.grayDark, false: Color.gray }}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: Color.gray, true: Color.grayDark }}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Light Mode</Text>
          <Switch
            value={lightMode}
            onValueChange={setLightMode}
            trackColor={{ false: Color.gray, true: Color.grayDark }}
          />
        </View>

        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Edit_Profile')}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
              source={require('../assets/images/Settings.png')}
              style={styles.adLogo}
              resizeMode="contain"
              />
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notifications')}>
            <Image
              source={require('../assets/images/bell.png')}
              style={styles.adLogo}
              resizeMode="contain"
              />
            <Text style={styles.menuText}>Notifications</Text>
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
          <Animated.View style={[animatedStyle, styles.scrollingTextContainer]}>
            <MarqueeText text="This is a scrolling marquee text in React Native!" />
          </Animated.View>
        </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
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