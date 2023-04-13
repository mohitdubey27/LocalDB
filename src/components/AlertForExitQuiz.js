import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {toggleTheme} from '../utils/toggleTheme';

const {height, width} = Dimensions.get('window');

export const AlertForExitQuiz = ({
  visible,
  descriptionText,
  onPressNo,
  onPressYes,
}) => {
  const theme = toggleTheme();
  const AlertButton = ({onPressButton, title, color}) => {
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={onPressButton}>
        <Text style={[styles.buttonText, {color: color}]}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal animationType="fade" visible={visible} transparent={true}>
      <View style={styles.container}>
        <View
          style={[
            styles.contentView,
            {
              backgroundColor: theme.backgroundColor,
              borderColor: theme.borderColor,
            },
          ]}>
          <Text style={[styles.titleText, {color: theme.textColor}]}>
            Are you sure?
          </Text>
          <Text style={[styles.descriptionText, {color: theme.textColor}]}>
            {descriptionText}
          </Text>
          <View
            style={[
              styles.horizontalLine,
              {backgroundColor: theme.horizontalLineColor},
            ]}
          />
          <View style={styles.rowView}>
            <AlertButton title={'NO'} color={'red'} onPressButton={onPressNo} />
            <View
              style={[
                styles.verticalLine,
                {backgroundColor: theme.horizontalLineColor},
              ]}
            />
            <AlertButton
              title={'YES'}
              color={'green'}
              onPressButton={onPressYes}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#00000060',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentView: {
    padding: 20,
    borderRadius: 10,
    width: width - 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 15,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
  },
  horizontalLine: {
    height: 1,
    width: width - 70,
    alignSelf: 'center',
    marginTop: 20,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  buttonStyle: {
    height: 35,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalLine: {
    height: 35,
    width: 1,
  },
});
