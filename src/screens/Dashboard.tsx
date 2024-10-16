import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Spacing, Color, FontFamily, FontSize, BorderRadius } from '../theme/themes.ts';
import { ResidentialGeneratorData } from '../data/ResidentialGeneratorData.ts';
import type { ResidentialGenerator } from '../data/ResidentialGeneratorData.ts';
//import { IndustrialGeneratorData } from '../data/ResidentialGeneratorData.ts';
//import type { IndustrialGenerator } from '../data/ResidentialGeneratorData.ts';
//import { CommercialGeneratorData } from '../data/ResidentialGeneratorData.ts';
//import type { CommercialGenerator } from '../data/ResidentialGeneratorData.ts';

const Dashboard = () => {
  const navigation = useNavigation();
  const [showInfo, setShowInfo] = useState(false);
  const [showInstallation, setShowInstallation] = useState(false);
  const [generatorInfo, setGeneratorInfo] = useState<ResidentialGenerator | null>(null);
  const generatorId = 'A1';

  const handleInfoClick = () => {
    const generator = ResidentialGeneratorData.find((item: ResidentialGenerator) => item.id === generatorId);
    setGeneratorInfo(generator || null);
    setShowInfo(true);
  };

  const handleCloseInfo = () => {
    setShowInfo(false);
    setGeneratorInfo(null);
  };

  // Find the generator for the initial display
  const generator = ResidentialGeneratorData.find((item: ResidentialGenerator) => item.id === generatorId);

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

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.logoContainer}>
            <Image 
              source={require('../assets/images/anderson-power-logo.webp')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.spacer}>
            {/* Spacer */}
          </View>

          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.label}>My Generator</Text>
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

            {/* Generator Image Display */}
            {generator && (
              <View style={styles.imageContainer}>
                <Image
                  source={generator.imagelink} // Use imagelink from the generator data
                  style={styles.generatorImage}
                  resizeMode="contain"
                />
              </View>
            )}

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

            <View style={styles.container}>
              {/* Progress Text */}
              <TouchableOpacity onPress={handleOpenInstallationModal}>
                <Text style={styles.progressText}>Progress Bar</Text>
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
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  safeArea: {
    flex: 1,
  },
  logoContainer: {
    backgroundColor: Color.white,
    paddingTop: 20,
    alignItems: 'center',
    paddingBottom: 10,
    width: '100%',
  },
  logo: {
    width: 180,
    height: 60,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  spacer:{
    height: 40,
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
  label: {
    fontSize: FontSize.size_medium,
    fontFamily: FontFamily.montserrat_regular,
    textAlign: 'center',
    flex: 1,
  },
  infoIcon: {
    width: 20,
    height: 20,
  },
  imageContainer: {
    alignItems: 'center',
  },
  generatorImage: {
    width: 150,
    height: 150,
  },
  helpContainer: {
    position: 'relative',
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
});
