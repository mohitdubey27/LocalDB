import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {toggleTheme} from '../utils/toggleTheme';

export const BackbuttonWithTitle = ({onPressBack, title}) => {
  const theme = toggleTheme();
  return (
    <View style={styles.rowView}>
      <TouchableOpacity style={styles.buttonStyle} onPress={onPressBack}>
        <Text style={[styles.buttonText, {color: theme.textColor}]}>
          {'<-'}
        </Text>
      </TouchableOpacity>
      <Text style={[styles.titleStyle, {color: theme.textColor}]}>{title}</Text>
      <View style={styles.buttonStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 40,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
