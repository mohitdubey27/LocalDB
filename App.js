import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <SplashScreen />
    </Provider>
  );
};

export default App;
