import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {ButtonSkeleton} from './components/ButtonSkeleton';
import {TitleSkeleton} from './components/TitleSkeleton';
import {TitleWithDropdownFieldSkeleton} from './components/TitleWithDropdownField';

const {width, height} = Dimensions.get('window');

export const SplashScreenSkeleton = () => {
  return (
    <View style={styles.container}>
      <TitleSkeleton />
      <View style={styles.marginTop} />
      <TitleWithDropdownFieldSkeleton />
      <TitleWithDropdownFieldSkeleton />
      <TitleWithDropdownFieldSkeleton />
      <TitleWithDropdownFieldSkeleton />
      <View style={styles.marginTop} />
      <ButtonSkeleton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  marginTop: {
    marginTop: 25,
  },
});
