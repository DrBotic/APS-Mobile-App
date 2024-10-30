
import React, { useState, useEffect, useRef } from 'react';
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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, Spacing, BorderRadius, FontSize, FontFamily } from '../theme/themes.ts';
import { ResidentialGeneratorData } from '../data/ResidentialGeneratorData.ts';
import type { ResidentialGenerator } from '../data/ResidentialGeneratorData.ts';


const GeneratorsScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [jobKey, setJobKey] = useState('');
  const [installationJobs, setInstallationJobs] = useState([]);

  const [showInfo, setShowInfo] = useState(false);
  const [showInstallation, setShowInstallation] = useState(false);
  const [generatorInfo, setGeneratorInfo] = useState<ResidentialGenerator | null>(null);
  const generatorId = 'A1';

  // Mock data for stages and current stage
  const installationStages = [
    'Deposit Collected',
    'Equipment Order',
    'Permits Applied For',
    'Permits Received',
    'Scheduled/In-Progress',
    'Installation Completed',
  ];

  const currentStage = 3; // Example of current stage
  
  const handleOpenInstallationModal = () => {
    setShowInstallation(true);
  };

  const handleCloseInstallationModal = () => {
    setShowInstallation(false);
  };

  const handleInfoClick = () => {
    const generator = ResidentialGeneratorData.find((item: ResidentialGenerator) => item.id === generatorId);
    setGeneratorInfo(generator || null);
    setShowInfo(true);
  };

  const handleCloseInfo = () => {
    setShowInfo(false);
    setGeneratorInfo(null);
  };

  // Add animated value for the scrolling text
  const scrollAnim = useRef(new Animated.Value(0)).current;

  const addInstallationJob = () => {
    const newJob = {
      key: jobKey,
      generatorInfo: '10kW Air-Cooled Standby Generator',
      orderId: '1000-001',
    };
    setInstallationJobs([...installationJobs, newJob]);
    setJobKey('');
    setModalVisible(false);
  };

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

  return (
    <ImageBackground
      source={require('../assets/images/map.png')}
      resizeMode="cover"
      blurRadius={5}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/anderson-power-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>My Generators</Text>
        <View style={styles.line} />

        {/* Render installation job buttons */}
        {installationJobs.map((job, index) => (
        <TouchableOpacity onPress={handleOpenInstallationModal}
            key={index}
            style={styles.jobButton}
        >
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.jobTitle}>Milestone One</Text>
                    <TouchableOpacity 
                        onPress={handleInfoClick}
                        style={styles.helpContainer}
                        >
                    <Image 
                        source={require('../assets/images/info.png')}
                        style={styles.infoIcon}
                        resizeMode="contain"
                    />
                    </TouchableOpacity>
                </View>
            </View>
            <Image
              source={require('../assets/images/gen.png')}
              style={styles.jobImage}
            />
            <View style={styles.jobTextContainer}>
              <Text style={styles.jobGeneratorInfo}>Progress Bar Comming soon!</Text>
            </View>
            <View style={styles.jobTextContainer}>  
              <Text style={styles.jobGeneratorInfo}>Generator: {job.generatorInfo}</Text>
            </View>
            <View style={styles.jobTextContainer}> 
              <Text style={styles.jobOrderId}>Order ID: {job.orderId}</Text>
            </View>
        </TouchableOpacity>
        ))}

        {/* Button to open the modal */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addButtonText}>Add Installation Job{'\n'}+</Text>
        </TouchableOpacity>

        {/* Show Generator Installation Progress Modal */}
        <Modal
            transparent={true}
            visible={showInstallation}
            animationType="fade"
            onRequestClose={handleCloseInstallationModal}
        >
            <TouchableWithoutFeedback onPress={handleCloseInstallationModal}>
            <View style={styles.modalBackground}>
                <TouchableWithoutFeedback>
                <View style={styles.modalContainer}>

                    {/* Close Button */}
                    <TouchableOpacity style={styles.closeButton} onPress={handleCloseInstallationModal}>
                    <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>

                    <Text style={styles.modalTitle}>Installation Progress</Text>
                    <ScrollView style={styles.stagesContainer}>
                    {installationStages.map((stage, index) => (
                        <View key={index} style={styles.stageRow}>
                        {/* Stage Circle */}
                        <View style={[
                            styles.circle,
                            index === currentStage
                            ? styles.currentStageCircle
                            : index < currentStage
                            ? styles.completedStageCircle
                            : styles.upcomingStageCircle
                        ]}>
                            {index < currentStage && (
                            <Text style={styles.checkMark}>✔</Text> // Check mark for completed stages
                            )}
                        </View>

                        {/* Stage Text */}
                        <Text style={[
                            styles.stageText,
                            index === currentStage
                            ? styles.currentStageText
                            : index < currentStage
                            ? styles.completedStageText
                            : styles.upcomingStageText
                        ]}>
                            {stage}
                        </Text>
                        </View>
                    ))}
                    </ScrollView>
                </View>
                </TouchableWithoutFeedback>
            </View>
            </TouchableWithoutFeedback>
        </Modal>


        {/* Modal for entering the job key */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Enter Installation Job Key</Text>

              <TextInput
                style={styles.input}
                placeholder="Generator key"
                value={jobKey}
                onChangeText={setJobKey}
              />

              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={addInstallationJob}
                >
                  <Text style={styles.modalButtonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Show Generator Information Modal */}
        <Modal
              transparent={true}
              visible={showInfo}
              animationType="fade"
              onRequestClose={handleCloseInfo} 
            >
              <TouchableWithoutFeedback onPress={handleCloseInfo}>
                <View style={styles.modalBackground}>
                  <View style={styles.infoContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={handleCloseInfo}>
                      <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>
                    {generatorInfo && (
                      <>
                        <Text style={styles.infoTitle}>{generatorInfo.name}</Text>
                        {generatorInfo.description && (
                          <>
                            <Text style={styles.infoDescription}>Description:</Text>
                            <Text style={styles.specificationBullet}>{generatorInfo.description}</Text>
                          </>
                        )}
                        <Text style={styles.infoSpecifications}>Specifications:</Text>
                        {/* Wrap specifications in a ScrollView */}
                        <ScrollView style={styles.specificationsList} nestedScrollEnabled={true}>
                          {/* Conditional Rendering of Specifications */}
                          {generatorInfo.specifications[0] && (
                            <>
                              {generatorInfo.specifications[0].model && (
                                <Text style={styles.specificationBullet}>
                                  • Model: {generatorInfo.specifications[0].model}
                                </Text>
                              )}
                              {generatorInfo.specifications[0].series && (
                                <Text style={styles.specificationBullet}>
                                  • Series: {generatorInfo.specifications[0].series}
                                </Text>
                              )}
                              {generatorInfo.specifications[0].fuelType && (
                                <Text style={styles.specificationBullet}>
                                  • Fuel Type: {generatorInfo.specifications[0].fuelType}
                                </Text>
                              )}
                              {generatorInfo.specifications[0].AutomaticTSA_Rating && (
                                <Text style={styles.specificationBullet}>
                                  • Automatic TSA Rating: {generatorInfo.specifications[0].AutomaticTSA_Rating}
                                </Text>
                              )}
                              {generatorInfo.specifications[0].Circuits && (
                                <Text style={styles.specificationBullet}>
                                  • Circuits: {generatorInfo.specifications[0].Circuits}
                                </Text>
                              )}
                              {generatorInfo.specifications[0].engine_size && (
                                <Text style={styles.specificationBullet}>
                                  • Engine Size: {generatorInfo.specifications[0].engine_size}
                                </Text>
                              )}
                              {generatorInfo.specifications[0].minAmps_240V && (
                                <Text style={styles.specificationBullet}>
                                  • Min Amps 240V: {generatorInfo.specifications[0].minAmps_240V}
                                </Text>
                              )}
                              {generatorInfo.specifications[0].minPowerRating && (
                                <Text style={styles.specificationBullet}>
                                  • Min Power Rating: {generatorInfo.specifications[0].minPowerRating}
                                </Text>
                              )}
                              {generatorInfo.specifications[0].warrantyLength && (
                                <Text style={styles.specificationBullet}>
                                  • Warranty Length: {generatorInfo.specifications[0].warrantyLength}
                                </Text>
                              )}
                              {generatorInfo.specifications[0].NG_BTUS && (
                                <Text style={styles.specificationBullet}>
                                  • NG BTUs: {generatorInfo.specifications[0].NG_BTUS}
                                </Text>
                              )}
                              {generatorInfo.specifications[0].LP_BTUS && (
                                <Text style={styles.specificationBullet}>
                                  • LP BTUs: {generatorInfo.specifications[0].LP_BTUS}
                                </Text>
                              )}
                              {generatorInfo.specifications[0].sku && (
                                <Text style={styles.specificationBullet}>
                                  • SKU: {generatorInfo.specifications[0].sku}
                                </Text>
                              )}
                              {generatorInfo.specifications[0].weight && (
                                <Text style={styles.specificationBullet}>
                                  • Weight: {generatorInfo.specifications[0].weight}
                                </Text>
                              )}
                            </>
                          )}
                        </ScrollView>
                      </>
                    )}
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>

        {/* Ad Section with scrolling text */}
        <View style={styles.adContainer}>
          <Image
            source={require('../assets/images/Arrow_logo.png')} // Update with your ad logo
            style={styles.adLogo}
          />
          <Animated.View style={[animatedStyle, styles.scrollingTextContainer]}>
            <Text style={styles.scrollingText}>
              put your ads here! put your ads here! put your ads here! put your ads here!
            </Text>
          </Animated.View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default GeneratorsScreen;

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
  addButton: {
    backgroundColor: Color.white,
    width: '80%',
    height: '20%',
    paddingVertical: Spacing.space_20,
    borderRadius: BorderRadius.radius_20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: Spacing.space_20,
    shadowColor: Color.grayDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  addButtonText: {
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_regular,
    marginRight: Spacing.space_20,
    textAlign: 'center',
  },
  jobButton: {
    backgroundColor: Color.white,
    width: '80%',
    height: '50%',
    borderRadius: BorderRadius.radius_20,
    alignItems: 'center',
    marginVertical: Spacing.space_20,
    shadowColor: Color.grayDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: Spacing.space_10,
  },
  jobImage: {
    width: 180,
    height: 90,
    marginRight: Spacing.space_10,
    resizeMode: 'center',
  },
  jobTextContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  jobTitle: {
    fontSize: 26,
    fontFamily: FontFamily.montserrat_bold,
    marginBottom: Spacing.space_5,
    paddingTop: 20,
    paddingRight: 10,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
},

  jobGeneratorInfo: {
    fontSize: 20,
    fontFamily: FontFamily.montserrat_regular,
    paddingTop: 20,
    paddingRight: 10,
  },
  jobOrderId: {
    fontSize: 18,
    fontFamily: FontFamily.montserrat_regular,
    paddingTop: 20,
    paddingRight: 10,
    paddingBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: Color.white,
    borderRadius: BorderRadius.radius_20,
    padding: Spacing.space_20,
    alignItems: 'center',
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: FontSize.size_large,
    fontFamily: FontFamily.montserrat_bold,
    marginBottom: Spacing.space_20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: Color.gray,
    borderWidth: 1,
    borderRadius: BorderRadius.radius_10,
    paddingHorizontal: 10,
    marginBottom: Spacing.space_20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.space_20,
  },
  modalButtonText: {
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_regular,
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
  infoIcon: {
    width: 20,
    height: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  infoContainer: {
    maxHeight: '50%',
    minHeight: 'auto',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    width: '80%',
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  infoDescription: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    marginBottom: 5, // Adjust this value to reduce spacing below the title
  },
  descriptionText: {
    textAlign: 'left',
    width: '100%',
    marginBottom: 5, // You can adjust this as needed
  },
  infoSpecifications: {
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  specificationsList: {
    paddingLeft: 10,
    alignSelf: 'flex-start',
  },
  specificationText: {
    fontSize: 12,
    marginBottom: 2,
  },
  specificationBullet: {
    fontSize: 12,
    marginBottom: 2,
    alignSelf: 'flex-start', // Align bullets to the start
  },
  progressText: {
    fontSize: FontSize.size_normal,
  },
  stagesContainer: {
    width: '100%',
    maxHeight: 300, // Scrollable area if content exceeds this height
  },
  stageItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  currentStageItem: {
    backgroundColor: '#e0f7fa', // Highlight background for the current stage
  },
  stageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  currentStageCircle: {
    backgroundColor: Color.yellow,
  },
  completedStageCircle: {
    backgroundColor: Color.success, // '#00d084' vivid-green-cyan from APS website
  },
  checkMark: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
  },
  upcomingStageCircle: {
    backgroundColor: 'lightgray',
  },
  stageText: {
    fontSize: 16,
    color: '#333',
  },
  currentStageText: {
    fontWeight: 'bold', // Bold the current stage text
    color: Color.yellow,
  },
  completedStageText: {
    fontWeight: 'bold',
    color: 'light grey',
  },
  upcomingStageText: {
    color: 'light grey',
  },
  helpContainer: {
    position: 'relative',
  },
});
