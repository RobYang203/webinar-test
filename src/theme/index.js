import normalize from './normalize';
import { jss } from 'react-jss';

const theme = {
  ...normalize,
  palette:{
    default:{
      light: '#fff',
      main: '#e3e3e3',
      contrastText: '#152B45',
      dark: '#d5d5d5'
    },
    primary:{
      light: '#1454a1',
      main: '#013B81',
      contrastText: '#fff',
      dark: '#052f62',
    },
    secondary:{
      light: '#fff',
      main: '#e3e3e3',
      contrastText: '#4A4A4A',
      dark: '#d5d5d5'
    },
    info:{
      light: '#abff52',
      main: '#6BB718',
      dark: '#388e3c',
      contrastText: '#fff',
    },
    error:{
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    grey:{
      light: '#fff',
      main: '#e3e3e3',
      contrastText: '#4A4A4A',
      dark: '#d5d5d5'
    },
    textPrimary: '#01254F',
    textSecondary: '#000000A6',
    textThirdly: '#4A4A4A'
  }
};

export default function configureTheme() {
  jss.createStyleSheet(normalize).attach();
  return theme;
};
