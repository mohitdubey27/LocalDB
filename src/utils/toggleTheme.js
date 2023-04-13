import {useColorScheme} from 'react-native';
import {darkColor, lightColor} from './colors';

export const toggleTheme = () => {
  const theme = useColorScheme();
  if (theme === 'dark') {
    return darkColor;
  } else {
    return lightColor;
  }
};
