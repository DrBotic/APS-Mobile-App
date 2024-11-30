# APS Mobile Application Front-End

## Introduction
This repository contains the front-end code for the APS mobile application. The app is designed to track the installation process of Anderson Power Services' generators, providing transparency for both clients and the business.

## Dependencies
1. **Visual Studio Code**: Recommended for collaboration and development.  
   Download here: [Visual Studio Code](https://code.visualstudio.com/Download)
2. **Java 17-20**: Required for compatibility with back-end services.  
   Download here: [Java JDK 17-20](https://www.oracle.com/java/technologies/javase/jdk20-archive-downloads.html)
3. **Node.js**: Required to run the React Native front-end application.  
   Download here: [Node.js](https://nodejs.org/)
4. **React Native CLI**: Install globally via Node.js for React Native development.  
   Command: `npm install -g react-native-cli`
5. **Android Studio/Xcode**: Required for Android/iOS emulation.  
   - [Android Studio](https://developer.android.com/studio)  
   - [Xcode](https://developer.apple.com/xcode/) (for macOS)

## Getting Started

### Prerequisites
1. Install **Java 17-20** on your local machine.  
   Download here: [Java JDK 17-20](https://www.oracle.com/java/technologies/javase/jdk20-archive-downloads.html)
2. Install **Node.js**.  
   Download here: [Node.js](https://nodejs.org/)
3. Install dependencies: Run `npm install` after cloning the repository.

### Setting Up the Database Connection
1. Ensure the back-end server is configured and running.  
2. Obtain the API endpoint for database communication from the back-end team.  
3. Update the `.env` file in the project root directory with the correct API URL:
   ```plaintext
   API_BASE_URL=<your-backend-api-endpoint>

### Installation
1. Clone the repository `git clone https://github.com/IbrahimaDiallo32/Anderson-Power-Services-Mobile-App.git`.
2. Navigate to the project directory: `cd Anderson-Power-Services-Mobile-App`.
3. Open the project in Visual Studio Code.
4. Ensure Java 17-20 is selected as the project JDK for Visual Studio Code.
5. Install the project dependencies: `npm install`.
6. Start the development server: `npx react-native start` or `npm start`.
7. Run the app on a simulator or connected device: [Android] `npx react-native run-android` or [iOS] `npx react-native run-ios`.

### Setting up Android Studio 
1. Download Android Studio [Android Studio Download](https://developer.android.com/studio).
2. While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

   - Android SDK
   - Android SDK Platform
   - Android Virtual Device
  
3. Open android studio and click "More Actions". 
4. Select "SDK Manager".
5. Select the "SDK Platforms" tab
6. Look for and expand the Android 15 (VanillaIceCream).
7. Make sure the following is checked

   - Android SDK Platform 35
   - Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image or (for Apple M1 Silicon) Google APIs ARM 64 v8a System Image
  
8. Select the "SDK Tools" tab.
9. Check the "Show Package Details" box.
10. Look for and expand the "Android SDK Build-Tools".
11. Make sure that 35.0.0 is selected.
12. Now click "Apply". 

### Tips and tools
1. Youtube Video to use as a reference to set up [React Native Environment Setup in Windows (10,11) 2024](https://youtu.be/4onhZMbF2NI?si=Bhz92ZT-X1lBmsKZ).
2. If you are having issues, Try `npx react-native doctor`
3. Make sure you have all the correct paths.
4. If you still have issues, we recommend troubleshooting using Chat GPT and Stack Overflow.

