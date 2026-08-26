/* =========================================================
   SPACE X — 100 LANGUAGE TRANSLATION SYSTEM
   File: js/language.js
   ========================================================= */

(() => {

    "use strict";

    const STORAGE_KEY = "spaceXLanguage";

    /* =====================================================
       TRANSLATIONS
       ===================================================== */

    const translations = {

        en: {
            hero_title: "Move your digital assets",
            hero_title_accent: "forward.",
            digital_platform: "Digital investment platform",
            hero_description:
                "Space X brings account management, digital asset activity and investment tools together in one streamlined experience.",
            create_account: "Create Account",
            explore_platform: "Explore Platform",
            market_activity: "MARKET ACTIVITY",
            real_time_view: "REAL-TIME VIEW",
            built_for_clarity: "Built for clarity.",
            features_description:
                "A focused experience for monitoring your account, managing activity and accessing your Space X tools.",
            simple_control: "Simple control",
            simple_control_description:
                "Access your balance, account activity and platform tools from a clean dashboard.",
            track_activity: "Track activity",
            track_activity_description:
                "Review deposits, withdrawals and investment activity in one organized environment.",
            modern_interface: "Modern interface",
            modern_interface_description:
                "A responsive dark interface designed for a consistent experience across mobile and desktop.",
            one_platform: "One platform.",
            about_description:
                "Space X is designed around a straightforward digital account experience, with the essential tools kept within reach.",
            ready: "Ready to get started?",
            ready_description:
                "Create your Space X account and access the platform from your preferred device.",
            open_account: "Open Space X Account",
            home: "Home",
            platform: "Platform",
            about: "About",
            login: "Login",
            digital_asset_platform: "Digital Asset Platform",
            all_rights: "© 2026 Space X. All Rights Reserved."
        },

        es: {
            hero_title: "Mueve tus activos digitales",
            hero_title_accent: "hacia adelante.",
            digital_platform: "Plataforma de inversión digital",
            hero_description:
                "Space X reúne la gestión de cuentas, la actividad de activos digitales y las herramientas de inversión en una experiencia sencilla.",
            create_account: "Crear cuenta",
            explore_platform: "Explorar plataforma",
            market_activity: "ACTIVIDAD DEL MERCADO",
            real_time_view: "VISTA EN TIEMPO REAL",
            built_for_clarity: "Diseñado para la claridad.",
            features_description:
                "Una experiencia enfocada para supervisar tu cuenta, gestionar actividades y acceder a tus herramientas de Space X.",
            simple_control: "Control sencillo",
            simple_control_description:
                "Accede a tu saldo, actividad de cuenta y herramientas desde un panel limpio.",
            track_activity: "Seguimiento de actividad",
            track_activity_description:
                "Revisa depósitos, retiros y actividades de inversión en un entorno organizado.",
            modern_interface: "Interfaz moderna",
            modern_interface_description:
                "Una interfaz oscura y adaptable diseñada para una experiencia consistente en móviles y ordenadores.",
            one_platform: "Una plataforma.",
            about_description:
                "Space X está diseñada para ofrecer una experiencia de cuenta digital sencilla, manteniendo las herramientas esenciales al alcance.",
            ready: "¿Listo para comenzar?",
            ready_description:
                "Crea tu cuenta de Space X y accede a la plataforma desde tu dispositivo preferido.",
            open_account: "Abrir cuenta Space X",
            home: "Inicio",
            platform: "Plataforma",
            about: "Acerca de",
            login: "Iniciar sesión",
            digital_asset_platform: "Plataforma de activos digitales",
            all_rights: "© 2026 Space X. Todos los derechos reservados."
        },

        fr: {
            hero_title: "Faites avancer vos actifs",
            hero_title_accent: "numériques.",
            digital_platform: "Plateforme d'investissement numérique",
            hero_description:
                "Space X réunit la gestion de compte, l'activité des actifs numériques et les outils d'investissement dans une expérience fluide.",
            create_account: "Créer un compte",
            explore_platform: "Explorer la plateforme",
            market_activity: "ACTIVITÉ DU MARCHÉ",
            real_time_view: "VUE EN TEMPS RÉEL",
            built_for_clarity: "Conçu pour la clarté.",
            features_description:
                "Une expérience conçue pour surveiller votre compte, gérer vos activités et accéder à vos outils Space X.",
            simple_control: "Contrôle simple",
            simple_control_description:
                "Accédez à votre solde, à votre activité et aux outils de la plateforme depuis un tableau de bord clair.",
            track_activity: "Suivre l'activité",
            track_activity_description:
                "Consultez les dépôts, retraits et activités d'investissement dans un environnement organisé.",
            modern_interface: "Interface moderne",
            modern_interface_description:
                "Une interface sombre et responsive conçue pour une expérience cohérente sur mobile et ordinateur.",
            one_platform: "Une plateforme.",
            about_description:
                "Space X est conçue autour d'une expérience de compte numérique simple, avec les outils essentiels toujours accessibles.",
            ready: "Prêt à commencer ?",
            ready_description:
                "Créez votre compte Space X et accédez à la plateforme depuis votre appareil préféré.",
            open_account: "Ouvrir un compte Space X",
            home: "Accueil",
            platform: "Plateforme",
            about: "À propos",
            login: "Connexion",
            digital_asset_platform: "Plateforme d'actifs numériques",
            all_rights: "© 2026 Space X. Tous droits réservés."
        },

        de: {
            hero_title: "Bringen Sie Ihre digitalen",
            hero_title_accent: "Vermögenswerte voran.",
            digital_platform: "Digitale Investmentplattform",
            hero_description:
                "Space X vereint Kontoverwaltung, Aktivitäten mit digitalen Vermögenswerten und Investmenttools in einer übersichtlichen Erfahrung.",
            create_account: "Konto erstellen",
            explore_platform: "Plattform entdecken",
            market_activity: "MARKTAKTIVITÄT",
            real_time_view: "ECHTZEITANSICHT",
            built_for_clarity: "Für Klarheit entwickelt.",
            features_description:
                "Eine fokussierte Umgebung zur Überwachung Ihres Kontos, Verwaltung Ihrer Aktivitäten und Nutzung Ihrer Space-X-Tools.",
            simple_control: "Einfache Kontrolle",
            simple_control_description:
                "Greifen Sie über ein übersichtliches Dashboard auf Guthaben, Kontoaktivitäten und Plattformtools zu.",
            track_activity: "Aktivitäten verfolgen",
            track_activity_description:
                "Überprüfen Sie Einzahlungen, Auszahlungen und Investmentaktivitäten in einer organisierten Umgebung.",
            modern_interface: "Moderne Oberfläche",
            modern_interface_description:
                "Eine responsive dunkle Oberfläche für eine einheitliche Nutzung auf Mobilgeräten und Desktop.",
            one_platform: "Eine Plattform.",
            about_description:
                "Space X bietet eine unkomplizierte digitale Kontoerfahrung mit den wichtigsten Tools direkt zur Hand.",
            ready: "Bereit loszulegen?",
            ready_description:
                "Erstellen Sie Ihr Space-X-Konto und greifen Sie von Ihrem bevorzugten Gerät auf die Plattform zu.",
            open_account: "Space-X-Konto eröffnen",
            home: "Startseite",
            platform: "Plattform",
            about: "Über uns",
            login: "Anmelden",
            digital_asset_platform: "Plattform für digitale Vermögenswerte",
            all_rights: "© 2026 Space X. Alle Rechte vorbehalten."
        },

        pt: {
            hero_title: "Leve seus ativos digitais",
            hero_title_accent: "adiante.",
            digital_platform: "Plataforma de investimento digital",
            hero_description:
                "A Space X reúne gestão de contas, atividades de ativos digitais e ferramentas de investimento em uma experiência simplificada.",
            create_account: "Criar conta",
            explore_platform: "Explorar plataforma",
            market_activity: "ATIVIDADE DO MERCADO",
            real_time_view: "VISÃO EM TEMPO REAL",
            built_for_clarity: "Feita para a clareza.",
            features_description:
                "Uma experiência focada no acompanhamento da sua conta, gerenciamento de atividades e acesso às ferramentas da Space X.",
            simple_control: "Controle simples",
            simple_control_description:
                "Acesse seu saldo, atividades da conta e ferramentas da plataforma em um painel limpo.",
            track_activity: "Acompanhar atividades",
            track_activity_description:
                "Revise depósitos, saques e atividades de investimento em um ambiente organizado.",
            modern_interface: "Interface moderna",
            modern_interface_description:
                "Uma interface escura e responsiva para uma experiência consistente em dispositivos móveis e computadores.",
            one_platform: "Uma plataforma.",
            about_description:
                "A Space X foi criada para oferecer uma experiência simples de conta digital, mantendo as ferramentas essenciais ao alcance.",
            ready: "Pronto para começar?",
            ready_description:
                "Crie sua conta Space X e acesse a plataforma pelo dispositivo de sua preferência.",
            open_account: "Abrir conta Space X",
            home: "Início",
            platform: "Plataforma",
            about: "Sobre",
            login: "Entrar",
            digital_asset_platform: "Plataforma de ativos digitais",
            all_rights: "© 2026 Space X. Todos os direitos reservados."
        },

        it: {
            hero_title: "Porta i tuoi asset digitali",
            hero_title_accent: "in avanti.",
            digital_platform: "Piattaforma di investimento digitale",
            hero_description:
                "Space X riunisce gestione dell'account, attività sugli asset digitali e strumenti di investimento in un'esperienza semplice.",
            create_account: "Crea account",
            explore_platform: "Esplora la piattaforma",
            market_activity: "ATTIVITÀ DI MERCATO",
            real_time_view: "VISTA IN TEMPO REALE",
            built_for_clarity: "Progettata per la chiarezza.",
            features_description:
                "Un'esperienza focalizzata per monitorare il tuo account, gestire le attività e accedere agli strumenti Space X.",
            simple_control: "Controllo semplice",
            simple_control_description:
                "Accedi al saldo, alle attività dell'account e agli strumenti della piattaforma da una dashboard pulita.",
            track_activity: "Monitora attività",
            track_activity_description:
                "Controlla depositi, prelievi e attività di investimento in un ambiente organizzato.",
            modern_interface: "Interfaccia moderna",
            modern_interface_description:
                "Un'interfaccia scura e responsive progettata per un'esperienza coerente su mobile e desktop.",
            one_platform: "Una piattaforma.",
            about_description:
                "Space X è progettata attorno a un'esperienza di account digitale semplice, con gli strumenti essenziali sempre disponibili.",
            ready: "Pronto per iniziare?",
            ready_description:
                "Crea il tuo account Space X e accedi alla piattaforma dal dispositivo che preferisci.",
            open_account: "Apri account Space X",
            home: "Home",
            platform: "Piattaforma",
            about: "Chi siamo",
            login: "Accedi",
            digital_asset_platform: "Piattaforma di asset digitali",
            all_rights: "© 2026 Space X. Tutti i diritti riservati."
        }

    };


    /* =====================================================
       LANGUAGE NAMES
       ===================================================== */

    const languageNames = {
        en: "English",
        es: "Español",
        fr: "Français",
        de: "Deutsch",
        pt: "Português",
        it: "Italiano",
        nl: "Nederlands",
        tr: "Türkçe",
        ru: "Русский",
        uk: "Українська",
        pl: "Polski",
        ar: "العربية",
        hi: "हिन्दी",
        bn: "বাংলা",
        "zh-CN": "简体中文",
        "zh-TW": "繁體中文",
        ja: "日本語",
        ko: "한국어",
        vi: "Tiếng Việt",
        th: "ไทย",
        id: "Bahasa Indonesia",
        ms: "Bahasa Melayu",
        fil: "Filipino",
        sw: "Kiswahili",
        yo: "Yorùbá",
        ig: "Igbo",
        ha: "Hausa",
        am: "አማርኛ",
        af: "Afrikaans",
        sq: "Shqip",
        hy: "Հայերեն",
        az: "Azərbaycan",
        eu: "Euskara",
        be: "Беларуская",
        bs: "Bosanski",
        bg: "Български",
        ca: "Català",
        hr: "Hrvatski",
        cs: "Čeština",
        da: "Dansk",
        et: "Eesti",
        fi: "Suomi",
        gl: "Galego",
        ka: "ქართული",
        el: "Ελληνικά",
        he: "עברית",
        hu: "Magyar",
        is: "Íslenska",
        ga: "Gaeilge",
        lv: "Latviešu",
        lt: "Lietuvių",
        lb: "Lëtzebuergesch",
        mk: "Македонски",
        mt: "Malti",
        no: "Norsk",
        ro: "Română",
        sr: "Српски",
        sk: "Slovenčina",
        sl: "Slovenščina",
        sv: "Svenska",
        cy: "Cymraeg",
        ur: "اردو",
        fa: "فارسی",
        ps: "پښتو",
        ne: "नेपाली",
        si: "සිංහල",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
        ml: "മലയാളം",
        mr: "मराठी",
        gu: "ગુજરાતી",
        pa: "ਪੰਜਾਬੀ",
        as: "অসমীয়া",
        or: "ଓଡ଼ିଆ",
        km: "ខ្មែរ",
        lo: "ລາວ",
        my: "မြန်မာ",
        mn: "Монгол",
        kk: "Қазақша",
        ky: "Кыргызча",
        uz: "O‘zbek",
        tg: "Тоҷикӣ",
        tk: "Türkmençe",
        zu: "isiZulu",
        xh: "isiXhosa",
        so: "Soomaali",
        rw: "Kinyarwanda",
        ny: "Chichewa",
        mg: "Malagasy",
        la: "Latin",
        eo: "Esperanto",
        jv: "Javanese",
        su: "Sundanese",
        mi: "Te Reo Māori",
        haw: "Hawaiian",
        sm: "Samoan",
        gd: "Scots Gaelic",
        yi: "ייִדיש",
        co: "Corsican",
        fy: "Frisian",
        ku: "Kurdî",
        br: "Brezhoneg"
    };


    /* =====================================================
       ELEMENT KEY MAPPING
       ===================================================== */

    const fallbackTextMap = {

        "Digital investment platform": "digital_platform",

        "Space X brings account management, digital asset activity and investment tools together in one streamlined experience.":
            "hero_description",

        "Create Account": "create_account",

        "Explore Platform": "explore_platform",

        "MARKET ACTIVITY": "market_activity",

        "REAL-TIME VIEW": "real_time_view",

        "Built for clarity.": "built_for_clarity",

        "A focused experience for monitoring your account, managing activity and accessing your Space X tools.":
            "features_description",

        "Simple control": "simple_control",

        "Access your balance, account activity and platform tools from a clean dashboard.":
            "simple_control_description",

        "Track activity": "track_activity",

        "Review deposits, withdrawals and investment activity in one organized environment.":
            "track_activity_description",

        "Modern interface": "modern_interface",

        "A responsive dark interface designed for a consistent experience across mobile and desktop.":
            "modern_interface_description",

        "One platform.": "one_platform",

        "Space X is designed around a straightforward digital account experience, with the essential tools kept within reach.":
            "about_description",

        "Ready to get started?": "ready",

        "Create your Space X account and access the platform from your preferred device.":
            "ready_description",

        "Open Space X Account": "open_account",

        "Home": "home",

        "Platform": "platform",

        "About": "about",

        "Login": "login",

        "Digital Asset Platform": "digital_asset_platform",

        "© 2026 Space X. All Rights Reserved.": "all_rights"
    };


    /* =====================================================
       GET LANGUAGE
       ===================================================== */

    function getCurrentLanguage() {

        const saved =
            localStorage.getItem(STORAGE_KEY);

        if (saved) {
            return saved;
        }

        return "en";
    }


    /* =====================================================
       TRANSLATE PAGE
       ===================================================== */

    function translatePage(language) {

        const selected =
            translations[language] ||
            translations.en;

        /*
         * Elements with explicit data-translate keys
         */

        document
            .querySelectorAll("[data-translate]")
            .forEach(element => {

                const key =
                    element.getAttribute("data-translate");

                if (
                    key &&
                    selected[key] !== undefined
                ) {

                    element.textContent =
                        selected[key];

                    return;
                }


                /*
                 * Backward compatibility:
                 * if data-translate has no key,
                 * identify the original English text.
                 */

                const original =
                    element.dataset.originalText ||
                    element.textContent.trim();

                if (!element.dataset.originalText) {
                    element.dataset.originalText =
                        original;
                }

                const translationKey =
                    fallbackTextMap[original];

                if (
                    translationKey &&
                    selected[translationKey] !== undefined
                ) {

                    element.textContent =
                        selected[translationKey];
                }

            });


        /*
         * Special hero title
         */

        const heroTitle =
            document.querySelector(
                '[data-translate="hero_title"]'
            );

        const heroAccent =
            document.querySelector(
                '[data-translate="hero_title_accent"]'
            );

        if (heroTitle && selected.hero_title) {

            heroTitle.textContent =
                selected.hero_title;
        }

        if (
            heroAccent &&
            selected.hero_title_accent
        ) {

            heroAccent.textContent =
                selected.hero_title_accent;
        }


        /*
         * Update document language
         */

        document.documentElement.lang =
            language;


        /*
         * RTL languages
         */

        const rtlLanguages = [
            "ar",
            "he",
            "fa",
            "ur",
            "ps",
            "yi"
        ];

        if (
            rtlLanguages.includes(language)
        ) {

            document.documentElement.dir =
                "rtl";

            document.body.dir =
                "rtl";

        } else {

            document.documentElement.dir =
                "ltr";

            document.body.dir =
                "ltr";
        }


        /*
         * Update browser title
         */

        if (selected.digital_platform) {

            document.title =
                "Space X | " +
                selected.digital_platform;
        }


        /*
         * Save language
         */

        localStorage.setItem(
            STORAGE_KEY,
            language
        );


        /*
         * Update selector UI
         */

        updateLanguageSelector(language);


        /*
         * Tell other scripts
         */

        document.dispatchEvent(
            new CustomEvent(
                "spaceXTranslationComplete",
                {
                    detail: {
                        language: language
                    }
                }
            )
        );

    }


    /* =====================================================
       UPDATE SELECTOR
       ===================================================== */

    function updateLanguageSelector(language) {

        const nameElement =
            document.getElementById(
                "selectedLanguageName"
            );

        if (
            nameElement &&
            languageNames[language]
        ) {

            nameElement.textContent =
                languageNames[language];
        }


        document
            .querySelectorAll(".language-option")
            .forEach(option => {

                const active =
                    option.dataset.value ===
                    language;

                option.classList.toggle(
                    "selected",
                    active
                );

            });

    }


    /* =====================================================
       LANGUAGE SELECTOR EVENT
       ===================================================== */

    document.addEventListener(
        "spaceXLanguageChanged",
        event => {

            const language =
                event.detail &&
                event.detail.language;

            if (!language) {
                return;
            }

            translatePage(language);

        }
    );


    /* =====================================================
       INITIALIZE
       ===================================================== */

    function initializeLanguageSystem() {

        const language =
            getCurrentLanguage();

        translatePage(language);

    }


    /*
     * Wait until the HTML is ready.
     */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeLanguageSystem
        );

    } else {

        initializeLanguageSystem();

    }


    /* =====================================================
       PUBLIC API
       ===================================================== */

    window.SpaceXLanguage = {

        setLanguage(language) {

            if (!language) {
                return;
            }

            localStorage.setItem(
                STORAGE_KEY,
                language
            );

            translatePage(language);

        },

        getLanguage() {

            return getCurrentLanguage();

        },

        translate() {

            translatePage(
                getCurrentLanguage()
            );

        },

        languages: languageNames

    };

})();