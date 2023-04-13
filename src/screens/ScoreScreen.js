import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CommonButton from '../components/CommonButton';
import {clearQuizState} from '../redux/actions/GetQuizAction';
import Lottie from 'lottie-react-native';
import {toggleTheme} from '../utils/toggleTheme';

const ScoreScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const theme = toggleTheme();
  const {quizData} = useSelector(state => state.GetQuizReducer);
  const {score, userResponse} = route.params;

  const [showCelebrationAnimation, setCelebrationAnimation] = useState(false);

  const takeQuizAgain = () => {
    dispatch(clearQuizState());
    navigation.goBack(null);
  };

  useEffect(() => {
    if (
      quizData?.length - score === 0 ||
      quizData?.length - score === 1 ||
      quizData?.length - score === 2 ||
      quizData?.length - score === 3
    ) {
      setCelebrationAnimation(true);
    }
  }, [score]);

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <SafeAreaView style={styles.safeAreaStyle}>
        <Text style={[styles.scoreText, {color: theme.textColor}]}>
          Score: {score}
        </Text>
        <CommonButton
          title={'See Answer'}
          onPress={() =>
            navigation.navigate('CorrectAnswersList', {list: userResponse})
          }
        />
        <View style={{marginTop: 20}} />
        <CommonButton
          title={'Take Quiz Again'}
          onPress={() => takeQuizAgain()}
        />
      </SafeAreaView>

      {showCelebrationAnimation && (
        <Lottie
          source={require('../../assets/lottieFiles/congrats.json')}
          autoPlay={true}
          loop={false}
        />
      )}
    </View>
  );
};

export default ScoreScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  safeAreaStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
