import React from 'react';
import {View, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {toggleTheme} from '../../utils/toggleTheme';

export const TitleSkeleton = () => {
  const theme = toggleTheme();
  return (
    <View>
      <SkeletonPlaceholder backgroundColor={theme.skeletonPlaceHholder}>
        <View style={styles.titleStyle} />
      </SkeletonPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    height: 20,
    width: 200,
    borderRadius: 6,
  },
});
