import React from 'react';
import {View, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {toggleTheme} from '../../utils/toggleTheme';
import {TitleSkeleton} from './TitleSkeleton';

export const QuestionnaireHeaderSkeleton = () => {
  const theme = toggleTheme();
  return (
    <View style={styles.rowView}>
      <TitleSkeleton />
      <SkeletonPlaceholder backgroundColor={theme.skeletonPlaceHholder}>
        <View style={styles.countView} />
      </SkeletonPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20,
  },
  countView: {
    height: 20,
    width: 70,
    borderRadius: 30,
  },
});
