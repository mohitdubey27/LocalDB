import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {toggleTheme} from '../utils/toggleTheme';
import Animated, {SlideInRight, Layout} from 'react-native-reanimated';

const {width} = Dimensions.get('window');

const Options = ({text, index, onPress, selectedValue}) => {
  const theme = toggleTheme();
  return (
    <Animated.View
      entering={SlideInRight.delay(index * 300)}
      layout={Layout.springify()}>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor:
              selectedValue === text ? 'yellow' : theme.backgroundColor,
            borderColor: theme.borderColor,
          },
        ]}
        onPress={onPress}
        key={text}>
        <Text
          style={[
            styles.optionText,
            {color: selectedValue === text ? 'brown' : theme.titleColor},
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Options;

const styles = StyleSheet.create({
  buttonStyle: {
    width: width - 60,
    justifyContent: 'center',
    borderWidth: 1,
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
    marginLeft: 20,
  },
  optionText: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});
