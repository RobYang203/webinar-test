import normalize from './normalize';
import { jss } from 'react-jss';

const theme = {
  ...normalize,
  palette: {
    default: {
      light: '#fff',
      main: '#e3e3e3',
      contrastText: '#152B45',
      dark: '#d5d5d5',
    },
    primary: {
      light: '#4a93f3',
      main: '#013B81',
      contrastText: '#fff',
      dark: '#052f62',
    },
    secondary: {
      light: '#e1dfdf',
      main: '#C6C6C6',
      contrastText: '#4A4A4A',
      dark: '#979696',
    },
    info: {
      light: '#abff52',
      main: '#6BB718',
      dark: '#388e3c',
      contrastText: '#fff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    grey: {
      light: '#fff',
      main: '#e9e9e9',
      contrastText: '#4A4A4A',
      dark: '#d5d5d5',
    },
    textPrimary: '#01254F',
    textSecondary: '#000000A6',
    textThirdly: '#4A4A4A',
  },
  commonStyles: {
    pageRootStyle: {
      width: '100vw',
      height: 'calc(100vh - 100px)',
      paddingTop: 100,
    },
  },
  params: {
    mobileWidth: 500,
  },
};

export default function configureTheme() {
  jss.createStyleSheet(normalize).attach();
  return theme;
}
