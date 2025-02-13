import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend";

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: "en",
        fallbackLng: "en",
        debug: true, // Enable debugging to check errors in console
        backend: {
            loadPath: "../locales/{{lng}}/translation.json",
            crossDomain: true,
        },
        interpolation: { escapeValue: false },
    });

export default i18n;

export const translate = (key: string): string => {
    return i18n.t(key) || "";
};