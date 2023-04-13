import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

export const CustomizeStatusbar = () => {
  const theme = useColorScheme();
  return (
    <StatusBar
      animated
      barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
    />
  );
};
