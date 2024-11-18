import React, { useRef, useEffect, useState } from 'react';
import { Animated, Text, View, StyleSheet, Easing, Dimensions } from 'react-native';
import { useDarkMode } from '../components/DarkModeContext.tsx';

const { width } = Dimensions.get('window');

const MarqueeText: React.FC<{ text: string }> = ({ text }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [textWidth, setTextWidth] = useState(0);
  
  // Get dark mode status and determine styles
  const { isDarkMode } = useDarkMode();
  const styles = isDarkMode ? darkStyles : lightStyles;

  useEffect(() => {
    const startAnimation = () => {
      animatedValue.setValue(0);
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 10000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    };
    startAnimation();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [width, -textWidth],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ flexDirection: 'row', transform: [{ translateX }] }}>
        <Text
          style={styles.marqueeText}
          onLayout={(event) => {
            const { width: measuredWidth } = event.nativeEvent.layout;
            setTextWidth(measuredWidth);
          }}
        >
          {text}
        </Text>
        <Text style={styles.marqueeText}>{text}</Text>
      </Animated.View>
    </View>
  );
};

const lightStyles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: '100%',
  },
  marqueeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000', // Set text color for light mode
    flexShrink: 0,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: '100%',
  },
  marqueeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF', // Set text color for dark mode
    flexShrink: 0,
  },
});

export default MarqueeText;
