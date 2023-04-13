import React from 'react';
import {Dimensions, Pressable, Text, StyleSheet} from 'react-native';
import {toggleTheme} from '../utils/toggleTheme';

const {width} = Dimensions.get('window');

const TextButton = ({label, buttonText, onPress, style}) => {
  const theme = toggleTheme();
  return (
    <Pressable style={[styles.buttonStyle, style]} onPress={onPress}>
      <Text style={[styles.buttonLabel1, {color: theme.textColor}]}>
        {label}
        <Text style={styles.buttonLabel2}>{buttonText}</Text>
      </Text>
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  buttonStyle: {
    width: width - 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel1: {
    fontSize: 14,
    fontWeight: '400',
  },
  buttonLabel2: {
    fontSize: 14,
    fontWeight: '400',
    color: 'blue',
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
  },
});
