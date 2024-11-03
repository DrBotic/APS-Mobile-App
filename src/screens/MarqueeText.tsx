import React, { useRef, useEffect, useState } from 'react'; // Import useState here
import { Animated, Text, View, StyleSheet, Easing, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const MarqueeText: React.FC<{ text: string }> = ({ text }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [textWidth, setTextWidth] = useState(0); // Initialize textWidth state

  useEffect(() => {
    const startAnimation = () => {
      animatedValue.setValue(0); // Reset animation
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 10000, // Adjust duration for scroll speed
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    };
    startAnimation();
  }, [animatedValue]);

  // Move the full width of the text to the left
  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [width, -textWidth], // Moves from the right side of the screen to the left
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ flexDirection: 'row', transform: [{ translateX }] }}>
        {/* First instance of the text */}
        <Text
          style={styles.marqueeText}
          onLayout={(event) => {
            const { width: measuredWidth } = event.nativeEvent.layout;
            setTextWidth(measuredWidth); // Set the measured width of the text
          }}
        >
          {text}
        </Text>
        {/* Duplicate instance of the text for seamless scrolling */}
        <Text style={styles.marqueeText}>{text}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: '100%',
  },
  marqueeText: {
    fontSize: 20,
    fontWeight: 'bold',
    whiteSpace: 'nowrap', // Not directly applicable in React Native but indicates intent
    // Use a large enough width to prevent wrapping; alternatively, set to a large value
    width: 'auto', // or specify a width if you know the text length
    flexShrink: 0, // Prevents text from shrinking
  },
});

export default MarqueeText;
