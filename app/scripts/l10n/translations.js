// If fallbacks is set to `true`, this is the language that will be used if
// the current language has no available translation.
I18n.defaultLocale = "en-US";
I18n.locale = window.navigator.language || 'en-US';
// Set to false to show missing translations.
I18n.fallbacks = true;
I18n.translations = {
    en: {
        app: {
            title: 'TousLeTemps'
        },
        welcome: 'Welcome to Rec Room!'
    },

    fr: {
        app: {
            title: 'TousLeTemps'
        },
        welcome: 'Bievenue à Rec Room !'
    }
};
