import messages from './en/messages';
import i18n from './i18n';

const t = (key: keyof typeof messages) => {
  return i18n.t(key);
};

export default t;
