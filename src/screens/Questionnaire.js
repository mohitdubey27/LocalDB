import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CommonButton from '../components/CommonButton';
import Options from '../components/Options';
import {clearQuizState} from '../redux/actions/GetQuizAction';
import ProgressBar from '../components/ProgressBar';
import {AlertForExitQuiz} from '../components/AlertForExitQuiz';
import Lottie from 'lottie-react-native';
import {toggleTheme} from '../utils/toggleTheme';
import Animated, {SlideInRight, Layout} from 'react-native-reanimated';
import {dateTimeStamps, fullDateTime} from '../utils/common';
import saveScoreAction from '../redux/actions/saveScoreAction';

const he = require('he');

const {width} = Dimensions.get('window');

const Questionnaire = ({navigation, route}) => {
  const {username} = route?.params;
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [userResponse, setUserResponse] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const [selectedValue, setSelectedValue] = useState('');
  const [showQuitAlert, setShowQuitAlert] = useState(false);

  const {quizData} = useSelector(state => state.GetQuizReducer);

  const theme = toggleTheme();

  //Saving user selected options
  const saveResponse = response => {
    setSelectedValue(response);
    const responseObject = {
      user_answer: response,
      correct_answer: quizData[index]?.correct_answer,
      question: quizData[index]?.question,
    };
    setUserResponse([...userResponse, responseObject]);
  };

  //Next question
  const nextQuestion = () => {
    setSelectedValue('');
    setSeconds(0);
    //Show score
    if (index + 1 == quizData.length) {
      let score = 0;
      userResponse?.map(item => {
        if (item?.correct_answer === item?.user_answer) {
          score = score + 1;
        }
      });
      const payload = {
        id: dateTimeStamps,
        score: score,
        date: fullDateTime,
        username: username,
      };
      dispatch(saveScoreAction(payload));
      navigation.replace('ScoreScreen', {
        score: score,
        userResponse: userResponse,
      });
    }
    setIndex(index + 1);
  };

  //Exiting Quiz
  const exitQuiz = () => {
    dispatch(clearQuizState());
    navigation.goBack(null);
  };

  //Timer Function
  useEffect(() => {
    if (seconds < 60) {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds]);

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <SafeAreaView
        style={[
          styles.safeAreaStyle,
          {backgroundColor: theme.backgroundColor20},
        ]}>
        <View style={styles.headerView}>
          <Text style={[styles.headerText, {color: theme.textColor}]}>
            Questionnaire
          </Text>
          <Text style={[styles.countText, {color: theme.titleColor}]}>
            {index + 1 + ' / ' + quizData?.length}
          </Text>
        </View>
        <FlatList
          scrollEnabled={false}
          style={{width: width - 20}}
          ListHeaderComponent={
            <Animated.View
              entering={SlideInRight.delay(index * 500)}
              layout={Layout.springify()}
              style={styles.questionView}>
              <Text
                style={[styles.questionStyle, {color: theme.questionColor}]}>
                {index + 1 + ': '}
              </Text>
              <Text
                style={[styles.questionStyle, {color: theme.questionColor}]}>
                {he.decode(quizData[index]?.question)}
              </Text>
            </Animated.View>
          }
          data={quizData[index]?.incorrect_answers}
          renderItem={({item, index}) => (
            <Options
              text={he.decode(item)}
              index={index}
              onPress={() => saveResponse(item)}
              selectedValue={he.decode(selectedValue)}
            />
          )}
          keyExtractor={item => item}
        />
        <CommonButton
          title={index + 1 == quizData.length ? 'Show Score' : 'Next'}
          onPress={nextQuestion}
          backgroundColor={'green'}
        />
        <View style={styles.footer}>
          <CommonButton
            title={'Exit'}
            onPress={() => setShowQuitAlert(true)}
            backgroundColor={'red'}
          />
        </View>
        <ProgressBar
          height={20}
          backgroundColor={theme.progressBackgroundColor}
          percentage={seconds}
        />
      </SafeAreaView>
      <AlertForExitQuiz
        descriptionText={'You want to quit the quiz?'}
        visible={showQuitAlert}
        onPressNo={() => setShowQuitAlert(false)}
        onPressYes={exitQuiz}
      />
      <Lottie
        autoPlay
        loop
        source={require('../../assets/lottieFiles/questionsbackground.json')}
      />
    </View>
  );
};

export default Questionnaire;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  safeAreaStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    width: '90%',
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  questionView: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  questionStyle: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  countText: {
    fontSize: 13,
    fontWeight: '500',
  },
  footer: {
    marginTop: 'auto',
    width: '100%',
    alignItems: 'center',
  },
});
