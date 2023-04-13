import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Animated, {SlideInRight, Layout} from 'react-native-reanimated';
import {toggleTheme} from '../utils/toggleTheme';

const PreviousScoreLists = ({score, date, index}) => {
  const theme = toggleTheme();
  return (
    <Animated.View
      entering={SlideInRight.delay(index * 300)}
      layout={Layout.springify()}
      style={[
        styles.container,
        {
          borderColor: theme.borderColor,
          backgroundColor: theme.backgroundColor,
        },
      ]}>
      <Text style={styles.yourAnswer}>{'Score: ' + score}</Text>
      <Text style={styles.answerText}>{'Date: ' + date}</Text>
    </Animated.View>
  );
};

export default PreviousScoreLists;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: 20,
  },
  answerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'lightgreen',
    marginTop: 10,
    marginLeft: 20,
  },
  yourAnswer: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'lightblue',
    marginTop: 10,
    marginLeft: 20,
  },
});
