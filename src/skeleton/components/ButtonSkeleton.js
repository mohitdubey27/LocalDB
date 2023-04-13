import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {toggleTheme} from '../../utils/toggleTheme';

const {width} = Dimensions.get('window');

export const ButtonSkeleton = () => {
  const theme = toggleTheme();
  return (
    <View>
      <SkeletonPlaceholder backgroundColor={theme.skeletonPlaceHholder}>
        <View style={styles.buttonStyle} />
      </SkeletonPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 40,
    width: width - 60,
    borderRadius: 8,
  },
});
