import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {toggleTheme} from '../../utils/toggleTheme';

const {width} = Dimensions.get('window');

export const TitleWithDropdownFieldSkeleton = () => {
  const theme = toggleTheme();
  return (
    <View style={styles.titleFieldContainer}>
      <SkeletonPlaceholder backgroundColor={theme.skeletonPlaceHholder}>
        <View style={styles.titleText} />
      </SkeletonPlaceholder>
      <View>
        <SkeletonPlaceholder backgroundColor={theme.skeletonPlaceHholder}>
          <View style={styles.dropdownView} />
        </SkeletonPlaceholder>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFieldContainer: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  titleText: {
    height: 16,
    width: 200,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  dropdownView: {
    height: 40,
    width: width - 60,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
});
