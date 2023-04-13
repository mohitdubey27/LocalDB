import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CommonButton from '../components/CommonButton';
import Loader from '../components/Loader';
import TextButton from '../components/TextButton';
import CommonTextInput from '../components/TextInput';
import {loginUserAction} from '../redux/actions/loginUserAction';
import {toggleTheme} from '../utils/toggleTheme';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, data} = useSelector(state => state.loginUserReducer);
  const theme = toggleTheme();
  const [userName, setUserName] = useState('');

  const onPressLogin = () => {
    dispatch(loginUserAction(userName));
  };

  const onPressSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  useEffect(() => {
    if (data && data[0]?.username) {
      navigation.navigate('ChooseOptionScreen');
    }
  }, [data]);

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Text style={[styles.loginText, {color: theme.textColor}]}>Login</Text>
        <View style={styles.textContainer}>
          <CommonTextInput
            title={'Username'}
            placeholder={'Please enter username'}
            value={userName}
            onChangeText={setUserName}
          />
          <CommonButton
            title={'Login'}
            onPress={onPressLogin}
            disabled={userName?.length < 2}
          />
        </View>
        <TextButton
          label={"Don't have an account"}
          buttonText={' SignUp?'}
          onPress={onPressSignUp}
        />
      </SafeAreaView>
      {loading && <Loader />}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 30,
    alignSelf: 'flex-start',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
