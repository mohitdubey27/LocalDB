import React from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import {toggleTheme} from '../utils/toggleTheme';

const {width} = Dimensions.get('window');

const CommonTextInput = ({
  title,
  value,
  placeholder,
  onChangeText,
  kayboardType = 'default',
  editable = true,
}) => {
  const theme = toggleTheme();
  return (
    <View>
      <Text style={[styles.titleText, {color: theme.textColor}]}>{title}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[
          styles.textInput,
          {borderColor: theme.borderColor, color: theme.dropdownItemColor},
        ]}
        placeholderTextColor={theme.placeholderColor}
        keyboardType={kayboardType}
        editable={editable}
      />
    </View>
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 15,
    fontWeight: '500',
  },
  textInput: {
    height: 45,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 8,
    width: width - 60,
  },
  errorText: {
    fontSize: 13,
    marginTop: 5,
    fontWeight: '400',
    color: 'red',
  },
});
