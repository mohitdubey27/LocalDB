import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import {toggleTheme} from '../utils/toggleTheme';

const width = Dimensions.get('window').width;

const DropDown = ({title, data, text, id, handleChange, getId}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);

  const theme = toggleTheme();

  const DropdownButton = useRef();

  const selectOption = item => {
    setIsSelected(!isSelected);
    const {id, name} = item;
    handleChange(name);
    getId(id);
  };

  const itemSeprator = () => {
    return <View style={styles.sepratorView} />;
  };

  const openDropdown = () => {
    DropdownButton?.current?.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
  };

  return (
    <View style={styles.dropDownContainer}>
      <Text style={[styles.title, {color: theme.titleColor}]}>{title}</Text>
      <TouchableOpacity
        name={id}
        style={[styles.buttonStyle, {borderColor: theme.borderColor}]}
        ref={DropdownButton}
        onPress={() => {
          openDropdown();
          setIsSelected(!isSelected);
        }}>
        <Text style={[styles.optionText, {color: theme.optionText}]}>
          {text}
        </Text>
      </TouchableOpacity>
      {isSelected && (
        <Modal
          visible={isSelected}
          transparent
          animationType="none"
          animated={false}>
          <TouchableOpacity
            style={[styles.modalContainer, {backgroundColor: 'clear'}]}
            onPress={() => setIsSelected(false)}>
            <View
              style={[
                styles.dropDownView,
                {
                  marginTop: dropdownTop,
                  borderColor: theme.borderColor,
                  backgroundColor: theme.backgroundColor,
                },
              ]}>
              <FlatList
                data={data}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => selectOption(item)}>
                    <Text
                      key={item?.name}
                      style={[
                        styles.dropDownOptionText,
                        {color: theme.dropdownItemColor},
                      ]}>
                      {item?.name}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.name}
                ItemSeparatorComponent={itemSeprator}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropDownContainer: {
    width: width - 60,
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 5,
  },
  buttonStyle: {
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 13,
    fontWeight: '400',
  },
  dropDownView: {
    width: width - 60,
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginTop: 5,
    borderRadius: 10,
    maxHeight: width / 1.5,
    alignSelf: 'center',
    borderWidth: 1,
  },
  optionButton: {
    height: 35,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  sepratorView: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
  },
  dropDownOptionText: {
    fontSize: 13,
    fontWeight: '400',
    color: 'gray',
  },
  modalContainer: {
    backgroundColor: '#0000040',
    height: '100%',
    width: '100%',
  },
});
