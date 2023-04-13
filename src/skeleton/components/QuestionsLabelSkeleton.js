import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {toggleTheme} from '../../utils/toggleTheme';

const {width} = Dimensions.get('window');

export const QuestionsLabelSkeleton = () => {
  const theme = toggleTheme();
  return (
    <View>
      <View style={styles.rowView}>
        <SkeletonPlaceholder backgroundColor={theme.skeletonPlaceHholder}>
          <View style={styles.questionNumberView} />
        </SkeletonPlaceholder>
        <View>
          <SkeletonPlaceholder backgroundColor={theme.skeletonPlaceHholder}>
            <View style={styles.questionView} />
          </SkeletonPlaceholder>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginHorizontal: 20,
  },
  questionNumberView: {
    height: 24,
    width: 24,
    borderRadius: 5,
  },
  questionView: {
    height: 60,
    width: width - 75,
    borderRadius: 5,
    marginLeft: 10,
  },
});
