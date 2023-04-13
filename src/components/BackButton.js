import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {toggleTheme} from '../utils/toggleTheme';

const BackButton = ({navigation}) => {
  const theme = toggleTheme();
  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPressBack}>
      <Text style={[styles.backText, {color: theme.textColor}]}>{'<-'}</Text>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 20,
    marginLeft: 30,
    height: 30,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  backText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
