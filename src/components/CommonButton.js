import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';

const {width} = Dimensions.get('window');

const CommonButton = ({title, onPress, backgroundColor, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: backgroundColor ? backgroundColor : 'orange',
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    borderRadius: 10,
    width: width - 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
});
