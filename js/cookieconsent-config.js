import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

// Basic configuration for CookieConsent
CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "uk", // Default to Ukrainian
        translations: {
            uk: {
                consentModal: {
                    title: "Ми використовуємо файли cookie!",
                    description: "Цей веб-сайт використовує файли cookie для покращення вашого досвіду. Натискаючи \"Прийняти все\", ви погоджуєтеся на використання ВСІХ файлів cookie. Однак ви можете відвідати \"Налаштування файлів cookie\", щоб надати контрольований дозвіл.",
                    acceptAllBtn: "Прийняти все",
                    acceptNecessaryBtn: "Відхилити все",
                    showPreferencesBtn: "Налаштування файлів cookie",
                    footer: "<a href=\"privacy.html\" target=\"_blank\">Політика конфіденційності</a>"
                },
                preferencesModal: {
                    title: "Налаштування конфіденційності",
                    acceptAllBtn: "Прийняти все",
                    acceptNecessaryBtn: "Відхилити все",
                    savePreferencesBtn: "Зберегти налаштування",
                    closeIconLabel: "Закрити модальне вікно",
                    serviceCounterLabel: "Сервіс(и)",
                    sections: [
                        {
                            title: "Використання файлів cookie",
                            description: "Ми використовуємо файли cookie, щоб покращити ваш досвід перегляду веб-сайту, показувати персоналізовану рекламу чи контент та аналізувати наш трафік. Натискаючи \"Прийняти все\", ви погоджуєтеся на використання нами файлів cookie."
                        },
                        {
                            title: "Обов'язкові файли cookie <span class=\"badge bg-success\">Завжди активні</span>",
                            description: "Ці файли cookie необхідні для належного функціонування веб-сайту. Без цих файлів cookie веб-сайт не працюватиме належним чином.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Аналітичні файли cookie",
                            description: "Ці файли cookie дозволяють нам аналізувати використання веб-сайту, щоб ми могли вимірювати та покращувати продуктивність.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Більше інформації",
                            description: "З будь-яких питань щодо нашої політики щодо файлів cookie та вашого вибору, будь ласка, <a href=\"#contact\">зв'яжіться з нами</a>."
                        }
                    ]
                }
            }
        }
    }
});

