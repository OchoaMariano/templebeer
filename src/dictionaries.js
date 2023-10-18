import 'server-only';

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    es: () => import('./dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
    if (locale === 'select-country' || !dictionaries[locale]) {
        console.warn(`Skipping dictionary load for locale "${locale}"`);
        return {};  // Devuelve un diccionario vacío o algún valor por defecto si es necesario
    }
    
    return await dictionaries[locale]();
};
