import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenNavigation from '../navigation/ScreenNavigation';
import Lottie from 'lottie-react-native';
import {CustomizeStatusbar} from '../components/CustomizeStatusbar';

const SplashScreen = () => {
  const [isWait, setIsWait] = useState(false);
  //Wait for 3 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWait(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return isWait ? (
    <NavigationContainer>
      <ScreenNavigation />
    </NavigationContainer>
  ) : (
    <View style={styles.container}>
      <CustomizeStatusbar />
      <Lottie
        autoPlay
        loop
        source={require('../../assets/lottieFiles/initialAnimation.json')}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  imageStyle: {
    flex: 1,
  },
});
