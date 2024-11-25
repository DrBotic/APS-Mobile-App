# dependenices installed:

# npm install @react-navigation/native
# npm install react-native-screens react-native-safe-area-context
# npm install @react-navigation/native-stack
# npm install @react-navigation/bottom-tabs
# npm install react-native-vector-icons
# npm install --save react-native-vector-icons
# npm i zustand
# npm i immer
# npm i @react-native-async-storage/async-storage
# npm i --save-dev @type/react-native-vector-icons
# npm i lottie-react-native




# Don't know if we need right now:

# npm install react-native-svg
# npm install --save-dev react-native-svg-transformer

# APS Mobile Application Frontend

## Introduction

The APS Mobile Application frontend is a React Native-based mobile app designed to enhance the customer experience for Anderson Power Services. The app enables users to:
- Register an account and manage their profile.
- Register an installation job key and track installation progress.
- View generator and assigned representative details.
- Access company information and see scrolling promotions.
- Submit service requests through an integrated form.

Built with JavaScript and CSS, the app leverages React Native for a cross-platform experience on both Android and iOS, developed using Visual Studio Code (VSCode).

---

## Dependencies

The frontend requires the following software and libraries:
1. **React Native** - Framework for mobile app development.
2. **VSCode** - IDE for development.
3. **Java JDK 17** - Required for Android development.
4. **Node.js (>=18)** - Required for dependency management and running scripts.
5. **Android Studio** - For testing on Android emulators.
6. **Xcode** - For testing on iOS simulators (Mac only).
7. **Package Dependencies** (from `package.json`):
   - Key libraries include `react`, `react-native`, `@react-navigation`, `zustand`, and `lottie-react-native`.
   - Full dependency details are available in the `package.json` file.

---

## Getting Started

### Installation Steps

1. **Clone the Repository**
   - Navigate to the GitHub repository: [APS Mobile App](https://github.com/DrBotic/APS-Mobile-App/tree/main).
   - Click the "Code" button and copy the repository's clone URL.
   - Open VSCode and clone the repository:
     ```bash
     git clone <clone_url>
     cd APS-Mobile-App
     ```

2. **Install Dependencies**
   - Ensure Node.js is installed (`node -v` to verify).
   - Run the following command to install dependencies:
     ```bash
     npm install
     ```

3. **Set Up Development Environment**
   - Follow the [React Native environment setup guide](https://reactnative.dev/docs/set-up-your-environment?os=macos&platform=android) to install:
     - Android Studio (Windows/Mac)
     - Xcode (Mac only)

4. **Run the Application**
   - For Android:
     ```bash
     npm run android
     ```
   - For iOS:
     ```bash
     npm run ios
     ```

### Testing
To run tests:
```bash
npm run test

