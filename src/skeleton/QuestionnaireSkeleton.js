import React from 'react';
import {View, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {toggleTheme} from '../utils/toggleTheme';
import {ButtonSkeleton} from './components/ButtonSkeleton';
import {QuestionnaireHeaderSkeleton} from './components/QuestionnaireHeaderSkeleton';
import {QuestionsLabelSkeleton} from './components/QuestionsLabelSkeleton';

const {width, height} = Dimensions.get('window');

export const QuestionnaireSkeleton = () => {
  const theme = toggleTheme();
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <QuestionnaireHeaderSkeleton />
      <QuestionsLabelSkeleton />
      <View style={styles.optionsView}>
        <ButtonSkeleton />
        <ButtonSkeleton />
        <ButtonSkeleton />
        <ButtonSkeleton />
      </View>

      <View style={styles.bottomView}>
        <View>
          <ButtonSkeleton />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  optionsView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    height: 210,
  },
  bottomView: {
    marginTop: 'auto',
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
