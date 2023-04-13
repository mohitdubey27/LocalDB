import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import {BackbuttonWithTitle} from '../components/BackbuttonWithTitle';
import {CorrectAnswerComponent} from '../components/CorrectAnswerComponent';
import {toggleTheme} from '../utils/toggleTheme';

const {height, width} = Dimensions.get('window');

export const CorrectAnswersList = ({navigation, route}) => {
  const theme = toggleTheme();
  const {list} = route?.params;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <SafeAreaView style={styles.safeareaStyle}>
        <BackbuttonWithTitle onPressBack={goBack} title={'Answer List'} />
        <FlatList
          style={{marginTop: 20}}
          data={list}
          renderItem={({item, index}) => (
            <CorrectAnswerComponent
              questionNum={index}
              question={item?.question}
              answer={item?.correct_answer}
              user_answer={item?.user_answer}
            />
          )}
          keyExtractor={item => item?.question}
          ListFooterComponent={<View style={{marginTop: 30}} />}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  safeareaStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});
