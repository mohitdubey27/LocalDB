import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {toggleTheme} from '../utils/toggleTheme';

const width = Dimensions.get('window').width - 40;

const PercentageBar = ({percentage, height, backgroundColor}) => {
  const theme = toggleTheme();
  return (
    <View>
      <View style={{justifyContent: 'center', width: width}}>
        <View
          style={{
            width: width,
            height: height,
            marginVertical: 10,
            borderRadius: 5,
            borderColor: backgroundColor,
            borderWidth: 1,
          }}
        />
        <View
          style={{
            width: `${(percentage / 60)?.toFixed(2) * 100}` + '%',
            height: height,
            marginVertical: 10,
            borderRadius: 5,
            backgroundColor: backgroundColor,
            position: 'absolute',
            bottom: 20,
            top: 0.5,
          }}
        />
        <View
          style={{
            alignSelf: 'flex-end',
            bottom: 10,
          }}>
          <Text style={{color: theme.questionColor}}>
            {'Sec: ' + percentage + '/60'}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default PercentageBar;
