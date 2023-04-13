import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChooseOptionScreen from '../screens/ChooseOptionScreen';
import Questionnaire from '../screens/Questionnaire';
import ScoreScreen from '../screens/ScoreScreen';
import {CorrectAnswersList} from '../screens/CorrectAnswersList';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PreviousTestsScore from '../screens/PreviousTestsScore';

const stack = createNativeStackNavigator();

const ScreenNavigation = () => {
  return (
    <stack.Navigator
      initialRouteName={'LoginScreen'}
      screenOptions={{headerShown: false}}>
      <stack.Screen name={'LoginScreen'} component={LoginScreen} />
      <stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
      <stack.Screen
        name={'ChooseOptionScreen'}
        component={ChooseOptionScreen}
      />
      <stack.Screen name={'Questionnaire'} component={Questionnaire} />
      <stack.Screen name={'ScoreScreen'} component={ScoreScreen} />
      <stack.Screen
        name={'CorrectAnswersList'}
        component={CorrectAnswersList}
      />
      <stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
      <stack.Screen
        name={'PreviousTestsScore'}
        component={PreviousTestsScore}
      />
    </stack.Navigator>
  );
};

export default ScreenNavigation;
