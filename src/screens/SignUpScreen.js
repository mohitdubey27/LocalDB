import React, {useEffect} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import BackButton from '../components/BackButton';
import {toggleTheme} from '../utils/toggleTheme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonTextInput from '../components/TextInput';
import {useFormik} from 'formik';
import CommonButton from '../components/CommonButton';
import TextButton from '../components/TextButton';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../components/Loader';
import {createUserAction} from '../redux/actions/signupUserAction';

const SignUpScreen = ({navigation}) => {
  const theme = toggleTheme();
  const dispatch = useDispatch();
  const {loading, data} = useSelector(state => state.createUserReducer);
  const {values, handleChange, handleSubmit} = useFormik({
    initialValues: {
      username: '',
      name: '',
      email: '',
    },
    onSubmit: (data, {resetForm}) => {
      dispatch(createUserAction(data));
      resetForm();
    },
  });

  const onPressLogin = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (data && data?.email) {
      navigation.navigate('ChooseOptionScreen');
    }
  }, [data]);

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <SafeAreaView style={styles.mainContainer}>
        <BackButton navigation={navigation} />
        <Text style={[styles.signUpText, {color: theme.textColor}]}>
          SignUp
        </Text>
        <KeyboardAwareScrollView contentContainerStyle={styles.contentView}>
          <CommonTextInput
            title={'Username'}
            placeholder={'Enter the username'}
            value={values.username}
            onChangeText={handleChange('username')}
          />
          <View style={styles.margin} />
          <CommonTextInput
            title={'Name'}
            placeholder={'Enter the name'}
            value={values.name}
            onChangeText={handleChange('name')}
          />
          <View style={styles.margin} />
          <CommonTextInput
            title={'Email'}
            placeholder={'Enter the email'}
            value={values.email}
            onChangeText={handleChange('email')}
          />
          <CommonButton
            title={'SignUp'}
            disabled={
              values?.username?.length < 2 ||
              values?.name?.length < 2 ||
              values?.email?.length < 5
            }
            onPress={handleSubmit}
          />
          <View style={styles.margin} />
          <TextButton
            label={'Already have an account'}
            buttonText={' Login?'}
            onPress={onPressLogin}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
      {loading && <Loader />}
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  mainContainer: {
    flex: 1,
  },
  signUpText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 30,
    alignSelf: 'flex-start',
  },
  contentView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  margin: {
    height: 20,
  },
});
