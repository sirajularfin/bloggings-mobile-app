import { Language } from './constants';

export const translations: Record<Lowercase<Language>, Record<string, string>> = {
  en: require('../../locales/messages/en.json') as Record<string, string>,
};
