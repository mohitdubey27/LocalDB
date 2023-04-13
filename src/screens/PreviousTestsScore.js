import React from 'react';
import {View, SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {BackbuttonWithTitle} from '../components/BackbuttonWithTitle';
import PreviousScoreLists from '../components/PreviousScoreLists';
import {toggleTheme} from '../utils/toggleTheme';

const PreviousTestsScore = ({navigation}) => {
  const theme = toggleTheme();
  const {data} = useSelector(state => state.getPreviousScoreReducer);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <SafeAreaView style={styles.safeAreaStyle}>
        <BackbuttonWithTitle
          onPressBack={goBack}
          title={'Previous Tests Score'}
        />
        <FlatList
          style={{marginTop: 20}}
          data={data}
          renderItem={({item, index}) => (
            <PreviousScoreLists
              score={item?.score}
              date={item?.date}
              index={index}
            />
          )}
          keyExtractor={item => item?.date}
          ListFooterComponent={<View style={{marginTop: 30}} />}
          ListEmptyComponent={
            <View style={styles.emptyListView}>
              <Text style={[styles.emptyText, {color: theme.textColor}]}>
                No previous scores found
              </Text>
            </View>
          }
        />
      </SafeAreaView>
    </View>
  );
};

export default PreviousTestsScore;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  safeAreaStyle: {
    flex: 1,
  },
  emptyListView: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    fontWeight: '400',
  },
});
