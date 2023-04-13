import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import BackButton from '../components/BackButton';
import {toggleTheme} from '../utils/toggleTheme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonTextInput from '../components/TextInput';
import CommonButton from '../components/CommonButton';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../components/Loader';
import getUserInfoAction from '../redux/actions/getUserInfoAction';
import updateUserAction from '../redux/actions/updateUserAction';
import {AlertForExitQuiz} from '../components/AlertForExitQuiz';
import deleteUserAction from '../redux/actions/deleteUserAction';
import {StackActions} from '@react-navigation/native';
import {clearLoginState} from '../redux/actions/loginUserAction';
import {clearSignUpState} from '../redux/actions/signupUserAction';

const ProfileScreen = ({navigation, route}) => {
  const theme = toggleTheme();
  const dispatch = useDispatch();
  const {username} = route?.params;

  //Reterving data from store
  const {data, loading} = useSelector(state => state.getUserInfoReducer);
  const updateUser = useSelector(state => state.updateUserReducer);
  const deletedUser = useSelector(state => state.deleteUserReducer);

  //Declared State to store values
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUsername] = useState(username);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    dispatch(getUserInfoAction(username));
  }, [username]);

  useEffect(() => {
    if (data && data[0]?.username)
      setName(data[0].name), setEmail(data[0].email);
  }, [data]);

  const onEdit = () => {
    setIsEdit(true);
  };

  const handleSubmit = () => {
    const paylaod = {
      username: userName,
      name: name,
      email: email,
    };
    dispatch(updateUserAction(paylaod));
  };

  const onPressDelete = () => {
    setShowAlert(false);
    dispatch(deleteUserAction(userName));
  };

  useEffect(() => {
    if (deletedUser?.data && deletedUser?.data?.isDeleted) {
      dispatch(clearLoginState());
      dispatch(clearSignUpState());
      navigation.dispatch(StackActions.popToTop());
    }
  }, [deletedUser]);

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <SafeAreaView style={styles.safeAreaStyle}>
        <BackButton navigation={navigation} />
        <Text style={styles.profileText}>Profile</Text>
        <KeyboardAwareScrollView contentContainerStyle={styles.contentView}>
          <CommonTextInput
            title={'Username'}
            placeholder={'Enter the username'}
            value={userName}
            onChangeText={setUsername}
            editable={false}
          />
          <View style={styles.margin} />
          <CommonTextInput
            title={'Name'}
            placeholder={'Enter the name'}
            value={name}
            onChangeText={setName}
            editable={isEdit}
          />
          <View style={styles.margin} />
          <CommonTextInput
            title={'Email'}
            placeholder={'Enter the email'}
            value={email}
            onChangeText={setEmail}
            editable={isEdit}
          />
          <CommonButton
            title={isEdit ? 'Save' : 'Edit'}
            disabled={isEdit && (name?.length < 2 || email?.length < 5)}
            onPress={() => {
              isEdit ? handleSubmit() : onEdit();
            }}
          />
          <CommonButton
            title={'Delete Account'}
            disabled={false}
            backgroundColor={'red'}
            onPress={() => setShowAlert(true)}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
      <AlertForExitQuiz
        descriptionText={'You want to delete your account?'}
        visible={showAlert}
        onPressNo={() => setShowAlert(false)}
        onPressYes={onPressDelete}
      />
      {(loading || updateUser?.loading) && <Loader />}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  safeAreaStyle: {
    flex: 1,
  },
  profileText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 30,
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
