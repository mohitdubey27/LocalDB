import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {SlideInRight, Layout} from 'react-native-reanimated';
import {toggleTheme} from '../utils/toggleTheme';

const he = require('he');

export const CorrectAnswerComponent = ({
  questionNum,
  question,
  answer,
  user_answer,
}) => {
  const theme = toggleTheme();
  return (
    <Animated.View
      entering={SlideInRight.delay(questionNum * 300)}
      layout={Layout.springify()}
      style={[
        styles.container,
        {
          borderColor: theme.borderColor,
          backgroundColor: theme.backgroundColor,
        },
      ]}>
      <View style={styles.questionView}>
        <Text style={[styles.questionStyle, {color: theme.questionColor}]}>
          {questionNum + 1 + ': '}
        </Text>
        <Text style={[styles.questionStyle, {color: theme.questionColor}]}>
          {he.decode(question)}
        </Text>
      </View>
      <Text style={styles.yourAnswer}>
        {'Your Answer: ' + he.decode(user_answer)}
      </Text>
      <Text style={styles.answerText}>
        {'Correct Answer: ' + he.decode(answer)}
      </Text>
    </Animated.View>
  );
};

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
  questionView: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  questionStyle: {
    fontSize: 15,
    fontWeight: 'normal',
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
