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

const NotificationsScreen = () => {
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
        <Text style={styles.title}>My Notifications</Text>
        <View style={styles.line} />

        <ScrollView contentContainerStyle={styles.notificationcontainer}>

      {/* Push Notifications */}
      <View style={styles.notificationBox}>
        <Text style={styles.notificationText}>Push Notifications</Text>
        <Switch
          value={pushNotifications}
          onValueChange={setPushNotifications}
          thumbColor={pushNotifications ? Color.primary : Color.gray}
          trackColor={{ false: Color.lightGray, true: Color.primary }}
        />
      </View>

      {/* Text Notifications */}
      <View style={styles.notificationBox}>
        <Text style={styles.notificationText}>Text Notifications</Text>
        <Switch
          value={textNotifications}
          onValueChange={setTextNotifications}
          thumbColor={textNotifications ? Color.primary : Color.gray}
          trackColor={{ false: Color.lightGray, true: Color.primary }}
        />
      </View>

      {/* Email Notifications */}
      <View style={styles.notificationBox}>
        <Text style={styles.notificationText}>Email Notifications</Text>
        <Switch
          value={emailNotifications}
          onValueChange={setEmailNotifications}
          thumbColor={emailNotifications ? Color.primary : Color.gray}
          trackColor={{ false: Color.lightGray, true: Color.primary }}
        />
      </View>

      {/* Pause All Notifications */}
      <View style={styles.notificationBox}>
        <View>
          <Text style={styles.notificationText}>Pause all Notifications</Text>
          <Text style={styles.subText}>For one day</Text>
        </View>
        <Switch
          value={pauseNotifications}
          onValueChange={setPauseNotifications}
          thumbColor={pauseNotifications ? Color.primary : Color.gray}
          trackColor={{ false: Color.lightGray, true: Color.primary }}
        />
      </View>
    </ScrollView>

        {/* Animated Side Menu */}
        <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
          {/* Logo Icon */}
          <View style={styles.logoContainer}>
            <Ionicons name="sync-circle-outline" size={50} color="green" />
          </View>

          {/* Menu Items */}
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('HomeScreen')}>
            <Ionicons name="home-outline" size={24} color="black" />
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person-outline" size={24} color="black" />
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notifications')}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Text style={styles.menuText}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}>
            <Ionicons name="log-out-outline" size={24} color="black" />
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Ad Section with scrolling text */}
        <View style={styles.adContainer}>
          <Animated.View style={[animatedStyle, styles.scrollingTextContainer]}>
            <MarqueeText text="This is a scrolling marquee text in React Native!" />
          </Animated.View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default NotificationsScreen;

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
  },
  notificationcontainer: {
    flexGrow: 1,
    padding: Spacing.space_20,
    backgroundColor: Color.black,
    alignItems: 'center',
  },
  notificationtitle: {
    fontSize: FontSize.size_large,
    fontFamily: FontFamily.montserrat_bold,
    color: Color.white,
    marginVertical: Spacing.space_30,
  },
  notificationBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(1, 1, 1, 1)',
    borderWidth: 2,
    borderColor: Color.white,
    padding: Spacing.space_40,
    width: '90%',
    borderRadius: BorderRadius.radius_10,
    marginBottom: Spacing.space_50,
  },
  notificationText: {
    fontSize: FontSize.size_medium,
    color: Color.white,
    fontFamily: FontFamily.montserrat_regular,
  },
  subText: {
    fontSize: FontSize.size_small,
    color: Color.white,
    fontFamily: FontFamily.montserrat_regular,
  },
});

const darkStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#3A3A3A',
  },
  logoContainer: {
    backgroundColor: '#393939',
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
    backgroundColor: '#5A5A5A',
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
    backgroundColor: '#5A5A5A',
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
  },
  notificationcontainer: {
    flexGrow: 1,
    padding: Spacing.space_20,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  notificationtitle: {
    fontSize: FontSize.size_large,
    fontFamily: FontFamily.montserrat_bold,
    color: Color.white,
    marginVertical: Spacing.space_30,
  },
  notificationBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(1, 1, 1, 1)',
    borderWidth: 2,
    borderColor: Color.white,
    padding: Spacing.space_40,
    width: '90%',
    borderRadius: BorderRadius.radius_10,
    marginBottom: Spacing.space_50,
  },
  notificationText: {
    fontSize: FontSize.size_medium,
    color: Color.white,
    fontFamily: FontFamily.montserrat_regular,
  },
  subText: {
    fontSize: FontSize.size_small,
    color: Color.white,
    fontFamily: FontFamily.montserrat_regular,
  },
});
