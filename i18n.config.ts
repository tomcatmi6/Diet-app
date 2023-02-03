import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import pl from './assets/translations/pl';
import en from './assets/translations/en';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    pl: {
        translation: pl,
    },
    en: {
        translation: en,
    },
};

i18n.use(initReactI18next).init({
    resources,
    //language to use if translations in user language are not available
    fallbackLng: 'pl',
    lng: 'pl',
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
});

export default i18n;
