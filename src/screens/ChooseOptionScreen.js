import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import DropDown from '../components/DropDown';
import {useFormik} from 'formik';
import {
  numberOfQuestion,
  CategoryData,
  DifficultyData,
  TypeData,
} from '../utils/constant';
import CommonButton from '../components/CommonButton';
import {useDispatch, useSelector} from 'react-redux';
import {GetQuizAction, clearQuizState} from '../redux/actions/GetQuizAction';
import {QuestionnaireSkeleton} from '../skeleton/QuestionnaireSkeleton';
import {toggleTheme} from '../utils/toggleTheme';
import {CustomizeStatusbar} from '../components/CustomizeStatusbar';
import Lottie from 'lottie-react-native';
import getPreviousScoresAction from '../redux/actions/getPreviousScoresAction';
import TextButton from '../components/TextButton';

const ChooseOptionScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const theme = toggleTheme();
  const {quizLoadingStatus} = useSelector(state => state.GetQuizReducer);
  const {data} = useSelector(state => state.loginUserReducer);
  const signupData = useSelector(state => state.createUserReducer);

  const [username, setUsername] = useState('');

  const {values, handleChange, handleSubmit} = useFormik({
    initialValues: {
      numberOfQues: '10',
      questionId: '10',
      selectCategory: 'Any Category',
      categoryId: '0',
      selectDifficulty: 'Any Difficulty',
      difficultyId: '0',
      selectType: 'Any Type',
      typeId: '0',
    },
    onSubmit: (data, {resetForm}) => {
      dispatch(clearQuizState());
      dispatch(GetQuizAction(data));
      resetForm();
    },
  });

  if (quizLoadingStatus == 'loaded') {
    navigation.navigate('Questionnaire', {username: username});
  }

  const gotoProfile = () => {
    navigation.navigate('ProfileScreen', {username: username});
  };

  useEffect(() => {
    if (data && data[0]?.username) {
      setUsername(data[0]?.username);
    } else {
      setUsername(signupData?.data?.username);
    }
  }, [data, signupData]);

  useEffect(() => {
    if (username !== '' && username !== undefined)
      dispatch(getPreviousScoresAction(username));
  }, [username]);

  const gotoPreviousScore = () => {
    navigation.navigate('PreviousTestsScore');
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <CustomizeStatusbar />
      <SafeAreaView style={styles.safeAreaStyle}>
        <Text style={[styles.welcomeText, {color: theme.textColor}]}>
          Welcome {username}
        </Text>
        <Text style={[styles.titleText, {color: theme?.textColor}]}>
          Prefrences
        </Text>
        <DropDown
          id={'numberOfQues'}
          title={'Number of Questions:'}
          data={numberOfQuestion}
          text={values.numberOfQues}
          handleChange={handleChange('numberOfQues')}
          getId={handleChange('questionId')}
        />
        <DropDown
          id={'selectCategory'}
          title={'Select Category:'}
          data={CategoryData}
          text={values.selectCategory}
          handleChange={handleChange('selectCategory')}
          getId={handleChange('categoryId')}
        />
        <DropDown
          id={'selectDifficulty'}
          title={'Select Difficulty:'}
          data={DifficultyData}
          text={values.selectDifficulty}
          handleChange={handleChange('selectDifficulty')}
          getId={handleChange('difficultyId')}
        />
        <DropDown
          id={'selectType'}
          title={'Select Type:'}
          data={TypeData}
          text={values.selectType}
          handleChange={handleChange('selectType')}
          getId={handleChange('typeId')}
        />
        <CommonButton title={'Continue'} onPress={handleSubmit} />
        <CommonButton
          title={'Previous Scores'}
          onPress={gotoPreviousScore}
          backgroundColor={'pink'}
        />
        <TextButton
          label={'Check '}
          buttonText={'Profile'}
          onPress={gotoProfile}
        />
      </SafeAreaView>
      {quizLoadingStatus == 'loading' && <QuestionnaireSkeleton />}
      {/* <Lottie
        autoPlay
        loop
        source={require('../../assets/lottieFiles/initialAnimation.json')}
      /> */}
    </View>
  );
};

export default ChooseOptionScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  safeAreaStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
