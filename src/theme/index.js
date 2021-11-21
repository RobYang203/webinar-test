import normalize from './normalize';
import { jss } from 'react-jss';

const theme = {
  ...normalize,
};

export default function configureTheme() {
  jss.createStyleSheet(theme).attach();
  return theme;
};
