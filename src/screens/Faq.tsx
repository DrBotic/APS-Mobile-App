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

const Faq = () => {
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

    const faqs = [
        { question: "What services does Anderson Power offer?", answer: "We provide generator sales, installation, maintenance, and repair services." },
        { question: "How can I schedule a generator installation?", answer: "You can schedule an installation by contacting us through our website or calling our customer service." },
        { question: "What is the typical installation process for a residential generator?", answer: "The process includes a site survey, equipment selection, permitting, installation, and testing." },
        { question: "Do you provide maintenance for installed generators?", answer: "Yes, we offer regular maintenance plans to ensure your generator stays in top condition." },
        { question: "What types of generators do you sell and install?", answer: "We sell and install standby generators, portable generators, and industrial generators." },
        { question: "Are your generators covered by warranty?", answer: "Yes, all our generators come with a manufacturer's warranty. The duration varies by product." },
        { question: "How long does it take to install a generator?", answer: "The installation process typically takes 1-3 days, depending on the complexity and site conditions." },
        { question: "Can you help with permits and approvals?", answer: "Yes, we handle all necessary permits and approvals as part of the installation process." },
        { question: "Do you offer financing options for generator installations?", answer: "Yes, we provide flexible financing options to make generator ownership more accessible." },
        { question: "How do I know what size generator I need?", answer: "Our team will perform a site survey to determine the right size generator for your needs based on your power requirements." },
        { question: "What areas do you serve?", answer: "We serve [insert regions or states], ensuring reliable service across our coverage area." },
        { question: "Can Anderson Power repair my existing generator?", answer: "Yes, we offer repair services for generators, even if they weren’t originally purchased from us." },
        { question: "How often should I have my generator serviced?", answer: "We recommend servicing your generator at least once a year or after every 200 hours of use." },
        { question: "Do you provide 24/7 emergency services?", answer: "Yes, we offer 24/7 emergency repair services to ensure your generator is always operational." },
        { question: "How much does a new generator installation typically cost?", answer: "The cost varies based on the generator size and installation requirements. Contact us for a detailed quote." },
        { question: "What is the difference between standby and portable generators?", answer: "Standby generators are permanently installed and provide automatic backup power, while portable generators are movable and require manual setup." },
        { question: "Are there any ongoing costs after installation?", answer: "Ongoing costs include regular maintenance, fuel, and occasional repairs if needed." },
        { question: "How can I contact Anderson Power for support?", answer: "You can contact us via our website, email, or by calling our customer service hotline at [insert phone number]." },
        { question: "What fuel types are available for the generators you offer?", answer: "Our generators typically run on natural gas, propane, or diesel, depending on the model." },
        { question: "Can I upgrade my current generator system?", answer: "Yes, we can upgrade your existing generator system to improve capacity or performance." }
    ];
    
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

      <ScrollView
        style={styles.faqContainer}
        contentContainerStyle={{ paddingBottom: 80 }} // Adjust padding to match adContainer height
        >
        {faqs.map((faq, index) => (
            <View key={index} style={styles.faqItem}>
            <View style={styles.faqQuestion}>
                <Text style={styles.faqQuestionText}>{faq.question}</Text>
            </View>
            <View style={styles.faqAnswer}>
                <Text style={styles.faqAnswerText}>{faq.answer}</Text>
            </View>
            </View>
        ))}
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

      <ScrollView
        style={styles.faqContainer}
        contentContainerStyle={{ paddingBottom: 80 }} // Adjust padding to match adContainer height
        >
        {faqs.map((faq, index) => (
            <View key={index} style={styles.faqItem}>
            <View style={styles.faqQuestion}>
                <Text style={styles.faqQuestionText}>{faq.question}</Text>
            </View>
            <View style={styles.faqAnswer}>
                <Text style={styles.faqAnswerText}>{faq.answer}</Text>
            </View>
            </View>
        ))}
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


export default Faq;

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
  faqContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent to show the background
  },
  faqItem: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  faqQuestion: {
    backgroundColor: 'rgba(211, 47, 47, 0.9)', // Semi-transparent red
    padding: 15,
  },
  faqQuestionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  faqAnswer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white
    padding: 15,
  },
  faqAnswerText: {
    color: '#333',
    fontSize: 14,
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
      color: '#FFFFFF', // White text
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
      color: '#E0E0E0', // Light gray for label text
    },
    value: {
      fontSize: FontSize.size_medium,
      fontFamily: FontFamily.montserrat_regular,
      color: '#BDBDBD', // Darker gray for value text
    },
    togglePassword: {
      color: Color.primary, // Primary color for password toggle
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
    faqContainer: {
      flex: 1,
      padding: 20,
      backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent to show the background
    },
    faqItem: {
      marginBottom: 20,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background for FAQ items
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    faqQuestion: {
        backgroundColor: 'rgba(255, 82, 82, 0.9)', // Lighter red-pink
        padding: 15,
      },
      faqQuestionText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      faqAnswer: {
        backgroundColor: 'rgba(120, 120, 120, 0.5)', // More greyish background for answers
        padding: 15,
      },
      faqAnswerText: {
        color: '#fff', // Light grey text for answers
        fontSize: 14,
      },
  });
  