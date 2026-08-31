/* =========================================================
   SPACE X — COMPLETE 23 LANGUAGE SYSTEM
   File: js/language.js

   Works with:
   data-translate="..."

   Languages:
   English
   Spanish
   French
   German
   Portuguese
   Italian
   Dutch
   Turkish
   Russian
   Ukrainian
   Polish
   Arabic
   Hindi
   Bengali
   Chinese Simplified
   Chinese Traditional
   Japanese
   Korean
   Vietnamese
   Thai
   Indonesian
   Malay
   Filipino
   ========================================================= */

(() => {

    "use strict";

    const STORAGE_KEY = "spaceXLanguage";


    /* =========================================================
       LANGUAGE NAMES
       ========================================================= */

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
        fil: "Filipino"

    };


    /* =========================================================
       RTL
       ========================================================= */

    const rtlLanguages = [
        "ar"
    ];


    /* =========================================================
       ENGLISH
       ========================================================= */

    const ENGLISH = {

        nav_home:
            "Home",

        nav_platform:
            "Platform",

        nav_about:
            "About",

        nav_login:
            "Login",

        nav_register:
            "Create Account",


        hero_eyebrow:
            "Digital investment platform",

        hero_title:
            "Move your digital assets",

        hero_title_accent:
            "forward.",

        hero_description:
            "Space X brings account management, digital asset activity and investment tools together in one streamlined experience.",

        hero_create:
            "Create Account",

        hero_explore:
            "Explore Platform",


        market_activity:
            "MARKET ACTIVITY",

        market_realtime:
            "REAL-TIME VIEW",


        features_title:
            "Built for clarity.",

        features_description:
            "A focused experience for monitoring your account, managing activity and accessing your Space X tools.",


        feature_account_title:
            "Simple control",

        feature_account_text:
            "Access your balance, account activity and platform tools from a clean dashboard.",


        feature_activity_title:
            "Track activity",

        feature_activity_text:
            "Review deposits, withdrawals and investment activity in one organized environment.",


        feature_interface_title:
            "Modern interface",

        feature_interface_text:
            "A responsive dark interface designed for a consistent experience across mobile and desktop.",


        about_title:
            "One platform.",

        about_description:
            "Space X is designed around a straightforward digital account experience, with the essential tools kept within reach.",


        cta_title:
            "Ready to get started?",

        cta_description:
            "Create your Space X account and access the platform from your preferred device.",

        cta_button:
            "Open Space X Account",


        footer_copyright:
            "© 2026 Space X. All Rights Reserved.",

        footer_platform:
            "Digital Asset Platform"

    };


    /* =========================================================
       ALL 23 LANGUAGES
       ========================================================= */

    const translations = {

        /* =====================================================
           ENGLISH
           ===================================================== */

        en: ENGLISH,


        /* =====================================================
           SPANISH
           ===================================================== */

        es: {

            nav_home: "Inicio",
            nav_platform: "Plataforma",
            nav_about: "Acerca de",
            nav_login: "Iniciar sesión",
            nav_register: "Crear cuenta",

            hero_eyebrow: "Plataforma de inversión digital",
            hero_title: "Mueve tus activos digitales",
            hero_title_accent: "hacia adelante.",

            hero_description:
                "Space X reúne la gestión de cuentas, la actividad de activos digitales y las herramientas de inversión en una experiencia sencilla.",

            hero_create: "Crear cuenta",
            hero_explore: "Explorar plataforma",

            market_activity: "ACTIVIDAD DEL MERCADO",
            market_realtime: "VISTA EN TIEMPO REAL",

            features_title: "Diseñado para la claridad.",

            features_description:
                "Una experiencia enfocada para supervisar tu cuenta, gestionar actividades y acceder a tus herramientas de Space X.",

            feature_account_title: "Control sencillo",

            feature_account_text:
                "Accede a tu saldo, actividad de cuenta y herramientas de plataforma desde un panel limpio.",

            feature_activity_title: "Seguimiento de actividad",

            feature_activity_text:
                "Revisa depósitos, retiros y actividades de inversión en un entorno organizado.",

            feature_interface_title: "Interfaz moderna",

            feature_interface_text:
                "Una interfaz oscura y adaptable diseñada para una experiencia consistente en móviles y ordenadores.",

            about_title: "Una plataforma.",

            about_description:
                "Space X está diseñada para ofrecer una experiencia de cuenta digital sencilla, manteniendo las herramientas esenciales al alcance.",

            cta_title: "¿Listo para comenzar?",

            cta_description:
                "Crea tu cuenta de Space X y accede a la plataforma desde tu dispositivo preferido.",

            cta_button: "Abrir cuenta Space X",

            footer_copyright:
                "© 2026 Space X. Todos los derechos reservados.",

            footer_platform:
                "Plataforma de activos digitales"

        },


        /* =====================================================
           FRENCH
           ===================================================== */

        fr: {

            nav_home: "Accueil",
            nav_platform: "Plateforme",
            nav_about: "À propos",
            nav_login: "Connexion",
            nav_register: "Créer un compte",

            hero_eyebrow:
                "Plateforme d'investissement numérique",

            hero_title:
                "Faites avancer vos actifs",

            hero_title_accent:
                "numériques.",

            hero_description:
                "Space X réunit la gestion de compte, l'activité des actifs numériques et les outils d'investissement dans une expérience fluide.",

            hero_create:
                "Créer un compte",

            hero_explore:
                "Explorer la plateforme",

            market_activity:
                "ACTIVITÉ DU MARCHÉ",

            market_realtime:
                "VUE EN TEMPS RÉEL",

            features_title:
                "Conçu pour la clarté.",

            features_description:
                "Une expérience conçue pour surveiller votre compte, gérer vos activités et accéder à vos outils Space X.",

            feature_account_title:
                "Contrôle simple",

            feature_account_text:
                "Accédez à votre solde, à votre activité et aux outils de la plateforme depuis un tableau de bord clair.",

            feature_activity_title:
                "Suivre l'activité",

            feature_activity_text:
                "Consultez les dépôts, retraits et activités d'investissement dans un environnement organisé.",

            feature_interface_title:
                "Interface moderne",

            feature_interface_text:
                "Une interface sombre et responsive conçue pour une expérience cohérente sur mobile et ordinateur.",

            about_title:
                "Une plateforme.",

            about_description:
                "Space X est conçue autour d'une expérience de compte numérique simple, avec les outils essentiels toujours accessibles.",

            cta_title:
                "Prêt à commencer ?",

            cta_description:
                "Créez votre compte Space X et accédez à la plateforme depuis votre appareil préféré.",

            cta_button:
                "Ouvrir un compte Space X",

            footer_copyright:
                "© 2026 Space X. Tous droits réservés.",

            footer_platform:
                "Plateforme d'actifs numériques"

        },


        /* =====================================================
           GERMAN
           ===================================================== */

        de: {

            nav_home: "Startseite",
            nav_platform: "Plattform",
            nav_about: "Über uns",
            nav_login: "Anmelden",
            nav_register: "Konto erstellen",

            hero_eyebrow:
                "Digitale Investmentplattform",

            hero_title:
                "Bringen Sie Ihre digitalen",

            hero_title_accent:
                "Vermögenswerte voran.",

            hero_description:
                "Space X vereint Kontoverwaltung, Aktivitäten mit digitalen Vermögenswerten und Investmenttools in einer übersichtlichen Erfahrung.",

            hero_create:
                "Konto erstellen",

            hero_explore:
                "Plattform entdecken",

            market_activity:
                "MARKTAKTIVITÄT",

            market_realtime:
                "ECHTZEITANSICHT",

            features_title:
                "Für Klarheit entwickelt.",

            features_description:
                "Eine fokussierte Umgebung zur Überwachung Ihres Kontos, Verwaltung Ihrer Aktivitäten und Nutzung Ihrer Space-X-Tools.",

            feature_account_title:
                "Einfache Kontrolle",

            feature_account_text:
                "Greifen Sie über ein übersichtliches Dashboard auf Guthaben, Kontoaktivitäten und Plattformtools zu.",

            feature_activity_title:
                "Aktivitäten verfolgen",

            feature_activity_text:
                "Überprüfen Sie Einzahlungen, Auszahlungen und Investmentaktivitäten in einer organisierten Umgebung.",

            feature_interface_title:
                "Moderne Oberfläche",

            feature_interface_text:
                "Eine responsive dunkle Oberfläche für eine einheitliche Nutzung auf Mobilgeräten und Desktop.",

            about_title:
                "Eine Plattform.",

            about_description:
                "Space X bietet eine unkomplizierte digitale Kontoerfahrung mit den wichtigsten Tools direkt zur Hand.",

            cta_title:
                "Bereit loszulegen?",

            cta_description:
                "Erstellen Sie Ihr Space-X-Konto und greifen Sie von Ihrem bevorzugten Gerät auf die Plattform zu.",

            cta_button:
                "Space-X-Konto eröffnen",

            footer_copyright:
                "© 2026 Space X. Alle Rechte vorbehalten.",

            footer_platform:
                "Plattform für digitale Vermögenswerte"

        },


        /* =====================================================
           PORTUGUESE
           ===================================================== */

        pt: {

            nav_home: "Início",
            nav_platform: "Plataforma",
            nav_about: "Sobre",
            nav_login: "Entrar",
            nav_register: "Criar conta",

            hero_eyebrow:
                "Plataforma de investimento digital",

            hero_title:
                "Leve seus ativos digitais",

            hero_title_accent:
                "adiante.",

            hero_description:
                "A Space X reúne gestão de contas, atividades de ativos digitais e ferramentas de investimento em uma experiência simplificada.",

            hero_create:
                "Criar conta",

            hero_explore:
                "Explorar plataforma",

            market_activity:
                "ATIVIDADE DO MERCADO",

            market_realtime:
                "VISÃO EM TEMPO REAL",

            features_title:
                "Feita para a clareza.",

            features_description:
                "Uma experiência focada no acompanhamento da sua conta, gerenciamento de atividades e acesso às ferramentas da Space X.",

            feature_account_title:
                "Controle simples",

            feature_account_text:
                "Acesse seu saldo, atividades da conta e ferramentas da plataforma em um painel limpo.",

            feature_activity_title:
                "Acompanhar atividades",

            feature_activity_text:
                "Revise depósitos, saques e atividades de investimento em um ambiente organizado.",

            feature_interface_title:
                "Interface moderna",

            feature_interface_text:
                "Uma interface escura e responsiva para uma experiência consistente em dispositivos móveis e computadores.",

            about_title:
                "Uma plataforma.",

            about_description:
                "A Space X foi criada para oferecer uma experiência simples de conta digital, mantendo as ferramentas essenciais ao alcance.",

            cta_title:
                "Pronto para começar?",

            cta_description:
                "Crie sua conta Space X e acesse a plataforma pelo dispositivo de sua preferência.",

            cta_button:
                "Abrir conta Space X",

            footer_copyright:
                "© 2026 Space X. Todos os direitos reservados.",

            footer_platform:
                "Plataforma de ativos digitais"

        },


        /* =====================================================
           ITALIAN
           ===================================================== */

        it: {

            nav_home: "Home",
            nav_platform: "Piattaforma",
            nav_about: "Chi siamo",
            nav_login: "Accedi",
            nav_register: "Crea account",

            hero_eyebrow:
                "Piattaforma di investimento digitale",

            hero_title:
                "Porta i tuoi asset digitali",

            hero_title_accent:
                "in avanti.",

            hero_description:
                "Space X riunisce gestione dell'account, attività sugli asset digitali e strumenti di investimento in un'esperienza semplice.",

            hero_create:
                "Crea account",

            hero_explore:
                "Esplora la piattaforma",

            market_activity:
                "ATTIVITÀ DI MERCATO",

            market_realtime:
                "VISTA IN TEMPO REALE",

            features_title:
                "Progettata per la chiarezza.",

            features_description:
                "Un'esperienza focalizzata per monitorare il tuo account, gestire le attività e accedere agli strumenti Space X.",

            feature_account_title:
                "Controllo semplice",

            feature_account_text:
                "Accedi al saldo, alle attività dell'account e agli strumenti della piattaforma da una dashboard pulita.",

            feature_activity_title:
                "Monitora attività",

            feature_activity_text:
                "Controlla depositi, prelievi e attività di investimento in un ambiente organizzato.",

            feature_interface_title:
                "Interfaccia moderna",

            feature_interface_text:
                "Un'interfaccia scura e responsive progettata per un'esperienza coerente su mobile e desktop.",

            about_title:
                "Una piattaforma.",

            about_description:
                "Space X è progettata attorno a un'esperienza di account digitale semplice, con gli strumenti essenziali sempre disponibili.",

            cta_title:
                "Pronto per iniziare?",

            cta_description:
                "Crea il tuo account Space X e accedi alla piattaforma dal dispositivo che preferisci.",

            cta_button:
                "Apri account Space X",

            footer_copyright:
                "© 2026 Space X. Tutti i diritti riservati.",

            footer_platform:
                "Piattaforma di asset digitali"

        },


        /* =====================================================
           DUTCH
           ===================================================== */

        nl: {

            nav_home: "Home",
            nav_platform: "Platform",
            nav_about: "Over ons",
            nav_login: "Inloggen",
            nav_register: "Account aanmaken",

            hero_eyebrow:
                "Digitaal investeringsplatform",

            hero_title:
                "Breng uw digitale activa",

            hero_title_accent:
                "vooruit.",

            hero_description:
                "Space X brengt accountbeheer, digitale activiteitsfuncties en investeringstools samen in één gestroomlijnde ervaring.",

            hero_create:
                "Account aanmaken",

            hero_explore:
                "Platform verkennen",

            market_activity:
                "MARKTACTIVITEIT",

            market_realtime:
                "REALTIME WEERGAVE",

            features_title:
                "Ontworpen voor duidelijkheid.",

            features_description:
                "Een gerichte ervaring om uw account te controleren, activiteiten te beheren en toegang te krijgen tot uw Space X-tools.",

            feature_account_title:
                "Eenvoudige controle",

            feature_account_text:
                "Bekijk uw saldo, accountactiviteiten en platformtools vanuit een overzichtelijk dashboard.",

            feature_activity_title:
                "Activiteit volgen",

            feature_activity_text:
                "Bekijk stortingen, opnames en investeringsactiviteiten in één georganiseerde omgeving.",

            feature_interface_title:
                "Moderne interface",

            feature_interface_text:
                "Een responsieve donkere interface voor een consistente ervaring op mobiel en desktop.",

            about_title:
                "Eén platform.",

            about_description:
                "Space X is ontworpen rond een eenvoudige digitale accountomgeving, met essentiële tools binnen handbereik.",

            cta_title:
                "Klaar om te beginnen?",

            cta_description:
                "Maak uw Space X-account aan en krijg toegang tot het platform vanaf uw favoriete apparaat.",

            cta_button:
                "Space X-account openen",

            footer_copyright:
                "© 2026 Space X. Alle rechten voorbehouden.",

            footer_platform:
                "Platform voor digitale activa"

        },


        /* =====================================================
           TURKISH
           ===================================================== */

        tr: {

            nav_home: "Ana Sayfa",
            nav_platform: "Platform",
            nav_about: "Hakkımızda",
            nav_login: "Giriş",
            nav_register: "Hesap Oluştur",

            hero_eyebrow:
                "Dijital yatırım platformu",

            hero_title:
                "Dijital varlıklarınızı",

            hero_title_accent:
                "ileri taşıyın.",

            hero_description:
                "Space X, hesap yönetimini, dijital varlık faaliyetlerini ve yatırım araçlarını tek bir düzenli deneyimde bir araya getirir.",

            hero_create:
                "Hesap Oluştur",

            hero_explore:
                "Platformu Keşfet",

            market_activity:
                "PİYASA FAALİYETİ",

            market_realtime:
                "GERÇEK ZAMANLI GÖRÜNÜM",

            features_title:
                "Netlik için tasarlandı.",

            features_description:
                "Hesabınızı izlemek, faaliyetlerinizi yönetmek ve Space X araçlarınıza erişmek için sade bir deneyim.",

            feature_account_title:
                "Basit kontrol",

            feature_account_text:
                "Bakiyenize, hesap faaliyetlerinize ve platform araçlarına temiz bir panel üzerinden erişin.",

            feature_activity_title:
                "Faaliyetleri takip edin",

            feature_activity_text:
                "Para yatırma, çekme ve yatırım faaliyetlerinizi düzenli bir ortamda inceleyin.",

            feature_interface_title:
                "Modern arayüz",

            feature_interface_text:
                "Mobil ve masaüstünde tutarlı bir deneyim için tasarlanmış duyarlı koyu arayüz.",

            about_title:
                "Tek platform.",

            about_description:
                "Space X, temel araçları kolayca erişilebilir tutan sade bir dijital hesap deneyimi sunmak için tasarlanmıştır.",

            cta_title:
                "Başlamaya hazır mısınız?",

            cta_description:
                "Space X hesabınızı oluşturun ve platforma tercih ettiğiniz cihazdan erişin.",

            cta_button:
                "Space X Hesabı Aç",

            footer_copyright:
                "© 2026 Space X. Tüm hakları saklıdır.",

            footer_platform:
                "Dijital Varlık Platformu"

        },


        /* =====================================================
           RUSSIAN
           ===================================================== */

        ru: {

            nav_home: "Главная",
            nav_platform: "Платформа",
            nav_about: "О нас",
            nav_login: "Войти",
            nav_register: "Создать аккаунт",

            hero_eyebrow:
                "Цифровая инвестиционная платформа",

            hero_title:
                "Двигайте цифровые активы",

            hero_title_accent:
                "вперёд.",

            hero_description:
                "Space X объединяет управление аккаунтом, операции с цифровыми активами и инвестиционные инструменты в одном удобном пространстве.",

            hero_create:
                "Создать аккаунт",

            hero_explore:
                "Изучить платформу",

            market_activity:
                "АКТИВНОСТЬ РЫНКА",

            market_realtime:
                "ПРОСМОТР В РЕАЛЬНОМ ВРЕМЕНИ",

            features_title:
                "Создано для ясности.",

            features_description:
                "Удобная среда для контроля аккаунта, управления активностью и доступа к инструментам Space X.",

            feature_account_title:
                "Простой контроль",

            feature_account_text:
                "Получайте доступ к балансу, активности аккаунта и инструментам платформы через чистую панель.",

            feature_activity_title:
                "Отслеживание активности",

            feature_activity_text:
                "Просматривайте пополнения, выводы и инвестиционную активность в организованной среде.",

            feature_interface_title:
                "Современный интерфейс",

            feature_interface_text:
                "Адаптивный тёмный интерфейс для удобной работы на мобильных устройствах и компьютерах.",

            about_title:
                "Одна платформа.",

            about_description:
                "Space X создана для простой работы с цифровым аккаунтом, а основные инструменты всегда находятся под рукой.",

            cta_title:
                "Готовы начать?",

            cta_description:
                "Создайте аккаунт Space X и получите доступ к платформе с предпочитаемого устройства.",

            cta_button:
                "Открыть аккаунт Space X",

            footer_copyright:
                "© 2026 Space X. Все права защищены.",

            footer_platform:
                "Платформа цифровых активов"

        },


        /* =====================================================
           UKRAINIAN
           ===================================================== */

        uk: {

            nav_home: "Головна",
            nav_platform: "Платформа",
            nav_about: "Про нас",
            nav_login: "Увійти",
            nav_register: "Створити акаунт",

            hero_eyebrow:
                "Цифрова інвестиційна платформа",

            hero_title:
                "Рухайте цифрові активи",

            hero_title_accent:
                "вперед.",

            hero_description:
                "Space X об'єднує керування акаунтом, активність цифрових активів та інвестиційні інструменти в одному зручному середовищі.",

            hero_create:
                "Створити акаунт",

            hero_explore:
                "Переглянути платформу",

            market_activity:
                "АКТИВНІСТЬ РИНКУ",

            market_realtime:
                "ПЕРЕГЛЯД У РЕАЛЬНОМУ ЧАСІ",

            features_title:
                "Створено для ясності.",

            features_description:
                "Зручний простір для контролю акаунта, керування активністю та доступу до інструментів Space X.",

            feature_account_title:
                "Простий контроль",

            feature_account_text:
                "Отримуйте доступ до балансу, активності акаунта та інструментів платформи через чисту панель.",

            feature_activity_title:
                "Відстеження активності",

            feature_activity_text:
                "Переглядайте поповнення, виведення та інвестиційну активність в організованому середовищі.",

            feature_interface_title:
                "Сучасний інтерфейс",

            feature_interface_text:
                "Адаптивний темний інтерфейс для стабільного використання на мобільних пристроях і комп'ютерах.",

            about_title:
                "Одна платформа.",

            about_description:
                "Space X створена для простого цифрового облікового досвіду, а основні інструменти завжди під рукою.",

            cta_title:
                "Готові почати?",

            cta_description:
                "Створіть акаунт Space X і отримайте доступ до платформи з потрібного пристрою.",

            cta_button:
                "Відкрити акаунт Space X",

            footer_copyright:
                "© 2026 Space X. Усі права захищені.",

            footer_platform:
                "Платформа цифрових активів"

        },


        /* =====================================================
           POLISH
           ===================================================== */

        pl: {

            nav_home: "Strona główna",
            nav_platform: "Platforma",
            nav_about: "O nas",
            nav_login: "Zaloguj się",
            nav_register: "Utwórz konto",

            hero_eyebrow:
                "Cyfrowa platforma inwestycyjna",

            hero_title:
                "Przenieś swoje cyfrowe aktywa",

            hero_title_accent:
                "do przodu.",

            hero_description:
                "Space X łączy zarządzanie kontem, aktywność cyfrowych aktywów i narzędzia inwestycyjne w jednym uporządkowanym środowisku.",

            hero_create:
                "Utwórz konto",

            hero_explore:
                "Poznaj platformę",

            market_activity:
                "AKTYWNOŚĆ RYNKU",

            market_realtime:
                "WIDOK W CZASIE RZECZYWISTYM",

            features_title:
                "Stworzone dla przejrzystości.",

            features_description:
                "Skoncentrowane środowisko do monitorowania konta, zarządzania aktywnością i korzystania z narzędzi Space X.",

            feature_account_title:
                "Prosta kontrola",

            feature_account_text:
                "Uzyskaj dostęp do salda, aktywności konta i narzędzi platformy z przejrzystego panelu.",

            feature_activity_title:
                "Śledź aktywność",

            feature_activity_text:
                "Przeglądaj wpłaty, wypłaty i aktywność inwestycyjną w uporządkowanym środowisku.",

            feature_interface_title:
                "Nowoczesny interfejs",

            feature_interface_text:
                "Responsywny ciemny interfejs zapewniający spójne doświadczenie na telefonach i komputerach.",

            about_title:
                "Jedna platforma.",

            about_description:
                "Space X została zaprojektowana z myślą o prostym doświadczeniu cyfrowego konta, z najważniejszymi narzędziami zawsze pod ręką.",

            cta_title:
                "Gotowy, aby zacząć?",

            cta_description:
                "Utwórz konto Space X i uzyskaj dostęp do platformy z wybranego urządzenia.",

            cta_button:
                "Otwórz konto Space X",

            footer_copyright:
                "© 2026 Space X. Wszelkie prawa zastrzeżone.",

            footer_platform:
                "Platforma aktywów cyfrowych"

        },


        /* =====================================================
           ARABIC
           ===================================================== */

        ar: {

            nav_home: "الرئيسية",
            nav_platform: "المنصة",
            nav_about: "من نحن",
            nav_login: "تسجيل الدخول",
            nav_register: "إنشاء حساب",

            hero_eyebrow:
                "منصة استثمار رقمية",

            hero_title:
                "حرّك أصولك الرقمية",

            hero_title_accent:
                "إلى الأمام.",

            hero_description:
                "تجمع Space X بين إدارة الحساب ونشاط الأصول الرقمية وأدوات الاستثمار في تجربة سلسة ومنظمة.",

            hero_create:
                "إنشاء حساب",

            hero_explore:
                "استكشاف المنصة",

            market_activity:
                "نشاط السوق",

            market_realtime:
                "عرض في الوقت الفعلي",

            features_title:
                "مصممة للوضوح.",

            features_description:
                "تجربة مركزة لمراقبة حسابك وإدارة نشاطك والوصول إلى أدوات Space X.",

            feature_account_title:
                "تحكم بسيط",

            feature_account_text:
                "يمكنك الوصول إلى رصيدك ونشاط حسابك وأدوات المنصة من لوحة تحكم واضحة.",

            feature_activity_title:
                "تتبع النشاط",

            feature_activity_text:
                "راجع الإيداعات والسحوبات وأنشطة الاستثمار في بيئة منظمة.",

            feature_interface_title:
                "واجهة حديثة",

            feature_interface_text:
                "واجهة داكنة ومتجاوبة مصممة لتجربة متناسقة على الهاتف والكمبيوتر.",

            about_title:
                "منصة واحدة.",

            about_description:
                "تم تصميم Space X لتوفير تجربة حساب رقمي بسيطة مع إبقاء الأدوات الأساسية في متناولك.",

            cta_title:
                "هل أنت مستعد للبدء؟",

            cta_description:
                "أنشئ حساب Space X الخاص بك وادخل إلى المنصة من جهازك المفضل.",

            cta_button:
                "فتح حساب Space X",

            footer_copyright:
                "© 2026 Space X. جميع الحقوق محفوظة.",

            footer_platform:
                "منصة الأصول الرقمية"

        },


        /* =====================================================
           HINDI
           ===================================================== */

        hi: {

            nav_home: "होम",
            nav_platform: "प्लेटफ़ॉर्म",
            nav_about: "हमारे बारे में",
            nav_login: "लॉगिन",
            nav_register: "खाता बनाएँ",

            hero_eyebrow:
                "डिजिटल निवेश प्लेटफ़ॉर्म",

            hero_title:
                "अपनी डिजिटल संपत्तियों को",

            hero_title_accent:
                "आगे बढ़ाएँ।",

            hero_description:
                "Space X खाता प्रबंधन, डिजिटल संपत्ति गतिविधि और निवेश उपकरणों को एक सरल अनुभव में जोड़ता है।",

            hero_create:
                "खाता बनाएँ",

            hero_explore:
                "प्लेटफ़ॉर्म देखें",

            market_activity:
                "बाज़ार गतिविधि",

            market_realtime:
                "रीयल-टाइम दृश्य",

            features_title:
                "स्पष्टता के लिए बनाया गया।",

            features_description:
                "अपने खाते की निगरानी, गतिविधियों के प्रबंधन और Space X उपकरणों तक पहुँच के लिए एक केंद्रित अनुभव।",

            feature_account_title:
                "सरल नियंत्रण",

            feature_account_text:
                "एक साफ़ डैशबोर्ड से अपना बैलेंस, खाता गतिविधि और प्लेटफ़ॉर्म उपकरण देखें।",

            feature_activity_title:
                "गतिविधि ट्रैक करें",

            feature_activity_text:
                "जमा, निकासी और निवेश गतिविधि को एक व्यवस्थित वातावरण में देखें।",

            feature_interface_title:
                "आधुनिक इंटरफ़ेस",

            feature_interface_text:
                "मोबाइल और डेस्कटॉप पर एक समान अनुभव के लिए बनाया गया उत्तरदायी डार्क इंटरफ़ेस।",

            about_title:
                "एक प्लेटफ़ॉर्म।",

            about_description:
                "Space X को एक सरल डिजिटल खाता अनुभव के लिए बनाया गया है, जिसमें आवश्यक उपकरण आसानी से उपलब्ध हैं।",

            cta_title:
                "शुरू करने के लिए तैयार हैं?",

            cta_description:
                "अपना Space X खाता बनाएँ और अपने पसंदीदा डिवाइस से प्लेटफ़ॉर्म तक पहुँचें।",

            cta_button:
                "Space X खाता खोलें",

            footer_copyright:
                "© 2026 Space X. सर्वाधिकार सुरक्षित।",

            footer_platform:
                "डिजिटल एसेट प्लेटफ़ॉर्म"

        },


        /* =====================================================
           BENGALI
           ===================================================== */

        bn: {

            nav_home: "হোম",
            nav_platform: "প্ল্যাটফর্ম",
            nav_about: "আমাদের সম্পর্কে",
            nav_login: "লগইন",
            nav_register: "অ্যাকাউন্ট তৈরি করুন",

            hero_eyebrow:
                "ডিজিটাল বিনিয়োগ প্ল্যাটফর্ম",

            hero_title:
                "আপনার ডিজিটাল সম্পদ",

            hero_title_accent:
                "এগিয়ে নিন।",

            hero_description:
                "Space X অ্যাকাউন্ট ব্যবস্থাপনা, ডিজিটাল সম্পদ কার্যক্রম এবং বিনিয়োগের সরঞ্জামগুলোকে একটি সহজ অভিজ্ঞতায় একত্রিত করে।",

            hero_create:
                "অ্যাকাউন্ট তৈরি করুন",

            hero_explore:
                "প্ল্যাটফর্ম দেখুন",

            market_activity:
                "বাজারের কার্যকলাপ",

            market_realtime:
                "রিয়েল-টাইম ভিউ",

            features_title:
                "স্পষ্টতার জন্য তৈরি।",

            features_description:
                "আপনার অ্যাকাউন্ট পর্যবেক্ষণ, কার্যক্রম পরিচালনা এবং Space X-এর সরঞ্জাম ব্যবহারের জন্য একটি সহজ অভিজ্ঞতা।",

            feature_account_title:
                "সহজ নিয়ন্ত্রণ",

            feature_account_text:
                "একটি পরিষ্কার ড্যাশবোর্ড থেকে আপনার ব্যালেন্স, অ্যাকাউন্ট কার্যক্রম এবং প্ল্যাটফর্মের সরঞ্জামগুলো দেখুন।",

            feature_activity_title:
                "কার্যকলাপ ট্র্যাক করুন",

            feature_activity_text:
                "জমা, উত্তোলন এবং বিনিয়োগ কার্যক্রম একটি সংগঠিত পরিবেশে পর্যালোচনা করুন।",

            feature_interface_title:
                "আধুনিক ইন্টারফেস",

            feature_interface_text:
                "মোবাইল এবং ডেস্কটপে একই রকম অভিজ্ঞতার জন্য তৈরি একটি রেসপনসিভ ডার্ক ইন্টারফেস।",

            about_title:
                "একটি প্ল্যাটফর্ম।",

            about_description:
                "Space X একটি সহজ ডিজিটাল অ্যাকাউন্ট অভিজ্ঞতার জন্য তৈরি, যেখানে প্রয়োজনীয় সরঞ্জামগুলো সহজেই হাতের কাছে থাকে।",

            cta_title:
                "শুরু করতে প্রস্তুত?",

            cta_description:
                "আপনার Space X অ্যাকাউন্ট তৈরি করুন এবং পছন্দের ডিভাইস থেকে প্ল্যাটফর্মে প্রবেশ করুন।",

            cta_button:
                "Space X অ্যাকাউন্ট খুলুন",

            footer_copyright:
                "© 2026 Space X. সর্বস্বত্ব সংরক্ষিত।",

            footer_platform:
                "ডিজিটাল অ্যাসেট প্ল্যাটফর্ম"

        },


        /* =====================================================
           CHINESE SIMPLIFIED
           ===================================================== */

        "zh-CN": {

            nav_home: "首页",
            nav_platform: "平台",
            nav_about: "关于我们",
            nav_login: "登录",
            nav_register: "创建账户",

            hero_eyebrow:
                "数字投资平台",

            hero_title:
                "推动您的数字资产",

            hero_title_accent:
                "向前发展。",

            hero_description:
                "Space X 将账户管理、数字资产活动和投资工具整合到一个简洁流畅的体验中。",

            hero_create:
                "创建账户",

            hero_explore:
                "探索平台",

            market_activity:
                "市场活动",

            market_realtime:
                "实时查看",

            features_title:
                "为清晰而设计。",

            features_description:
                "专注于账户监控、活动管理以及访问 Space X 工具的简洁体验。",

            feature_account_title:
                "简单控制",

            feature_account_text:
                "通过简洁的控制面板查看余额、账户活动和平台工具。",

            feature_activity_title:
                "跟踪活动",

            feature_activity_text:
                "在有序的环境中查看存款、提款和投资活动。",

            feature_interface_title:
                "现代界面",

            feature_interface_text:
                "响应式深色界面，为移动设备和桌面设备提供一致的体验。",

            about_title:
                "一个平台。",

            about_description:
                "Space X 专注于提供简单直接的数字账户体验，让重要工具始终触手可及。",

            cta_title:
                "准备开始了吗？",

            cta_description:
                "创建您的 Space X 账户，并从您喜欢的设备访问平台。",

            cta_button:
                "开通 Space X 账户",

            footer_copyright:
                "© 2026 Space X. 保留所有权利。",

            footer_platform:
                "数字资产平台"

        },


        /* =====================================================
           CHINESE TRADITIONAL
           ===================================================== */

        "zh-TW": {

            nav_home: "首頁",
            nav_platform: "平台",
            nav_about: "關於我們",
            nav_login: "登入",
            nav_register: "建立帳戶",

            hero_eyebrow:
                "數位投資平台",

            hero_title:
                "推動您的數位資產",

            hero_title_accent:
                "向前發展。",

            hero_description:
                "Space X 將帳戶管理、數位資產活動和投資工具整合到一個簡潔流暢的體驗中。",

            hero_create:
                "建立帳戶",

            hero_explore:
                "探索平台",

            market_activity:
                "市場活動",

            market_realtime:
                "即時檢視",

            features_title:
                "為清晰而設計。",

            features_description:
                "專注於帳戶監控、活動管理以及使用 Space X 工具的簡潔體驗。",

            feature_account_title:
                "簡單控制",

            feature_account_text:
                "透過簡潔的控制面板查看餘額、帳戶活動和平台工具。",

            feature_activity_title:
                "追蹤活動",

            feature_activity_text:
                "在有序的環境中查看存款、提款和投資活動。",

            feature_interface_title:
                "現代介面",

            feature_interface_text:
                "響應式深色介面，為行動裝置和桌面裝置提供一致的體驗。",

            about_title:
                "一個平台。",

            about_description:
                "Space X 專注於提供簡單直接的數位帳戶體驗，讓重要工具始終觸手可及。",

            cta_title:
                "準備開始了嗎？",

            cta_description:
                "建立您的 Space X 帳戶，並從您喜歡的裝置存取平台。",

            cta_button:
                "開啟 Space X 帳戶",

            footer_copyright:
                "© 2026 Space X. 保留所有權利。",

            footer_platform:
                "數位資產平台"

        },


        /* =====================================================
           JAPANESE
           ===================================================== */

        ja: {

            nav_home: "ホーム",
            nav_platform: "プラットフォーム",
            nav_about: "概要",
            nav_login: "ログイン",
            nav_register: "アカウント作成",

            hero_eyebrow:
                "デジタル投資プラットフォーム",

            hero_title:
                "デジタル資産を",

            hero_title_accent:
                "前へ進める。",

            hero_description:
                "Space Xは、アカウント管理、デジタル資産の活動、投資ツールを一つのシンプルな体験にまとめています。",

            hero_create:
                "アカウントを作成",

            hero_explore:
                "プラットフォームを見る",

            market_activity:
                "市場活動",

            market_realtime:
                "リアルタイム表示",

            features_title:
                "明確さのために設計。",

            features_description:
                "アカウントの確認、活動の管理、Space Xツールへのアクセスを簡単に行える体験です。",

            feature_account_title:
                "シンプルな管理",

            feature_account_text:
                "見やすいダッシュボードから残高、アカウント活動、プラットフォームツールにアクセスできます。",

            feature_activity_title:
                "アクティビティを追跡",

            feature_activity_text:
                "入金、出金、投資活動を整理された環境で確認できます。",

            feature_interface_title:
                "モダンなインターフェース",

            feature_interface_text:
                "モバイルとデスクトップで一貫した体験を提供するレスポンシブなダークインターフェース。",

            about_title:
                "ひとつのプラットフォーム。",

            about_description:
                "Space Xは、必要なツールをすぐに利用できるシンプルなデジタルアカウント体験を提供します。",

            cta_title:
                "始める準備はできましたか？",

            cta_description:
                "Space Xアカウントを作成し、お好みのデバイスからプラットフォームにアクセスしてください。",

            cta_button:
                "Space Xアカウントを開設",

            footer_copyright:
                "© 2026 Space X. All Rights Reserved.",

            footer_platform:
                "デジタル資産プラットフォーム"

        },


        /* =====================================================
           KOREAN
           ===================================================== */

        ko: {

            nav_home: "홈",
            nav_platform: "플랫폼",
            nav_about: "소개",
            nav_login: "로그인",
            nav_register: "계정 만들기",

            hero_eyebrow:
                "디지털 투자 플랫폼",

            hero_title:
                "디지털 자산을",

            hero_title_accent:
                "앞으로 이동하세요.",

            hero_description:
                "Space X는 계정 관리, 디지털 자산 활동 및 투자 도구를 하나의 간편한 경험으로 제공합니다.",

            hero_create:
                "계정 만들기",

            hero_explore:
                "플랫폼 둘러보기",

            market_activity:
                "시장 활동",

            market_realtime:
                "실시간 보기",

            features_title:
                "명확성을 위해 설계되었습니다.",

            features_description:
                "계정을 확인하고 활동을 관리하며 Space X 도구에 쉽게 접근할 수 있는 집중된 경험입니다.",

            feature_account_title:
                "간편한 관리",

            feature_account_text:
                "깔끔한 대시보드에서 잔액, 계정 활동 및 플랫폼 도구를 확인하세요.",

            feature_activity_title:
                "활동 추적",

            feature_activity_text:
                "입금, 출금 및 투자 활동을 정리된 환경에서 확인하세요.",

            feature_interface_title:
                "현대적인 인터페이스",

            feature_interface_text:
                "모바일과 데스크톱에서 일관된 경험을 제공하는 반응형 다크 인터페이스입니다.",

            about_title:
                "하나의 플랫폼.",

            about_description:
                "Space X는 필수 도구를 쉽게 이용할 수 있도록 설계된 간단한 디지털 계정 경험을 제공합니다.",

            cta_title:
                "시작할 준비가 되셨나요?",

            cta_description:
                "Space X 계정을 만들고 원하는 기기에서 플랫폼에 접속하세요.",

            cta_button:
                "Space X 계정 열기",

            footer_copyright:
                "© 2026 Space X. 모든 권리 보유.",

            footer_platform:
                "디지털 자산 플랫폼"

        },


        /* =====================================================
           VIETNAMESE
           ===================================================== */

        vi: {

            nav_home: "Trang chủ",
            nav_platform: "Nền tảng",
            nav_about: "Giới thiệu",
            nav_login: "Đăng nhập",
            nav_register: "Tạo tài khoản",

            hero_eyebrow:
                "Nền tảng đầu tư kỹ thuật số",

            hero_title:
                "Đưa tài sản kỹ thuật số",

            hero_title_accent:
                "tiến về phía trước.",

            hero_description:
                "Space X kết hợp quản lý tài khoản, hoạt động tài sản kỹ thuật số và các công cụ đầu tư trong một trải nghiệm đơn giản.",

            hero_create:
                "Tạo tài khoản",

            hero_explore:
                "Khám phá nền tảng",

            market_activity:
                "HOẠT ĐỘNG THỊ TRƯỜNG",

            market_realtime:
                "XEM THEO THỜI GIAN THỰC",

            features_title:
                "Được xây dựng để rõ ràng.",

            features_description:
                "Một trải nghiệm tập trung để theo dõi tài khoản, quản lý hoạt động và truy cập các công cụ Space X.",

            feature_account_title:
                "Kiểm soát đơn giản",

            feature_account_text:
                "Truy cập số dư, hoạt động tài khoản và công cụ nền tảng từ bảng điều khiển rõ ràng.",

            feature_activity_title:
                "Theo dõi hoạt động",

            feature_activity_text:
                "Xem các khoản nạp, rút và hoạt động đầu tư trong một môi trường có tổ chức.",

            feature_interface_title:
                "Giao diện hiện đại",

            feature_interface_text:
                "Giao diện tối đáp ứng được thiết kế để mang lại trải nghiệm nhất quán trên điện thoại và máy tính.",

            about_title:
                "Một nền tảng.",

            about_description:
                "Space X được thiết kế để mang lại trải nghiệm tài khoản kỹ thuật số đơn giản với các công cụ cần thiết luôn trong tầm tay.",

            cta_title:
                "Sẵn sàng bắt đầu?",

            cta_description:
                "Tạo tài khoản Space X và truy cập nền tảng từ thiết bị bạn предпочir.",

            cta_button:
                "Mở tài khoản Space X",

            footer_copyright:
                "© 2026 Space X. Bảo lưu mọi quyền.",

            footer_platform:
                "Nền tảng tài sản kỹ thuật số"

        },


        /* =====================================================
           THAI
           ===================================================== */

        th: {

            nav_home: "หน้าหลัก",
            nav_platform: "แพลตฟอร์ม",
            nav_about: "เกี่ยวกับเรา",
            nav_login: "เข้าสู่ระบบ",
            nav_register: "สร้างบัญชี",

            hero_eyebrow:
                "แพลตฟอร์มการลงทุนดิจิทัล",

            hero_title:
                "ขับเคลื่อนสินทรัพย์ดิจิทัลของคุณ",

            hero_title_accent:
                "ไปข้างหน้า",

            hero_description:
                "Space X รวมการจัดการบัญชี กิจกรรมสินทรัพย์ดิจิทัล และเครื่องมือการลงทุนไว้ในประสบการณ์ที่เรียบง่าย",

            hero_create:
                "สร้างบัญชี",

            hero_explore:
                "สำรวจแพลตฟอร์ม",

            market_activity:
                "กิจกรรมตลาด",

            market_realtime:
                "ดูแบบเรียลไทม์",

            features_title:
                "สร้างขึ้นเพื่อความชัดเจน",

            features_description:
                "ประสบการณ์ที่ช่วยติดตามบัญชี จัดการกิจกรรม และเข้าถึงเครื่องมือ Space X ได้อย่างง่ายดาย",

            feature_account_title:
                "ควบคุมง่าย",

            feature_account_text:
                "เข้าถึงยอดคงเหลือ กิจกรรมบัญชี และเครื่องมือแพลตฟอร์มจากแดชบอร์ดที่สะอาด",

            feature_activity_title:
                "ติดตามกิจกรรม",

            feature_activity_text:
                "ตรวจสอบการฝาก การถอน และกิจกรรมการลงทุนในสภาพแวดล้อมที่เป็นระเบียบ",

            feature_interface_title:
                "อินเทอร์เฟซทันสมัย",

            feature_interface_text:
                "อินเทอร์เฟซสีเข้มแบบตอบสนองที่ออกแบบมาเพื่อประสบการณ์ที่สม่ำเสมอบนมือถือและเดสก์ท็อป",

            about_title:
                "แพลตฟอร์มเดียว",

            about_description:
                "Space X ออกแบบมาเพื่อมอบประสบการณ์บัญชีดิจิทัลที่เรียบง่าย พร้อมเครื่องมือสำคัญที่เข้าถึงได้ง่าย",

            cta_title:
                "พร้อมเริ่มต้นหรือยัง?",

            cta_description:
                "สร้างบัญชี Space X และเข้าถึงแพลตฟอร์มจากอุปกรณ์ที่คุณต้องการ",

            cta_button:
                "เปิดบัญชี Space X",

            footer_copyright:
                "© 2026 Space X สงวนลิขสิทธิ์",

            footer_platform:
                "แพลตฟอร์มสินทรัพย์ดิจิทัล"

        },


        /* =====================================================
           INDONESIAN
           ===================================================== */

        id: {

            nav_home: "Beranda",
            nav_platform: "Platform",
            nav_about: "Tentang Kami",
            nav_login: "Masuk",
            nav_register: "Buat Akun",

            hero_eyebrow:
                "Platform investasi digital",

            hero_title:
                "Majukan aset digital Anda",

            hero_title_accent:
                "ke depan.",

            hero_description:
                "Space X menggabungkan pengelolaan akun, aktivitas aset digital, dan alat investasi dalam satu pengalaman yang sederhana.",

            hero_create:
                "Buat Akun",

            hero_explore:
                "Jelajahi Platform",

            market_activity:
                "AKTIVITAS PASAR",

            market_realtime:
                "TAMPILAN REAL-TIME",

            features_title:
                "Dibuat untuk kejelasan.",

            features_description:
                "Pengalaman terfokus untuk memantau akun, mengelola aktivitas, dan mengakses alat Space X.",

            feature_account_title:
                "Kontrol sederhana",

            feature_account_text:
                "Akses saldo, aktivitas akun, dan alat platform dari dasbor yang bersih.",

            feature_activity_title:
                "Lacak aktivitas",

            feature_activity_text:
                "Tinjau setoran, penarikan, dan aktivitas investasi dalam lingkungan yang terorganisir.",

            feature_interface_title:
                "Antarmuka modern",

            feature_interface_text:
                "Antarmuka gelap responsif yang dirancang untuk pengalaman konsisten di perangkat seluler dan desktop.",

            about_title:
                "Satu platform.",

            about_description:
                "Space X dirancang untuk memberikan pengalaman akun digital yang sederhana dengan alat penting yang mudah dijangkau.",

            cta_title:
                "Siap untuk memulai?",

            cta_description:
                "Buat akun Space X dan akses platform dari perangkat pilihan Anda.",

            cta_button:
                "Buka Akun Space X",

            footer_copyright:
                "© 2026 Space X. Semua hak dilindungi.",

            footer_platform:
                "Platform Aset Digital"

        },


        /* =====================================================
           MALAY
           ===================================================== */

        ms: {

            nav_home: "Laman Utama",
            nav_platform: "Platform",
            nav_about: "Tentang Kami",
            nav_login: "Log Masuk",
            nav_register: "Cipta Akaun",

            hero_eyebrow:
                "Platform pelaburan digital",

            hero_title:
                "Gerakkan aset digital anda",

            hero_title_accent:
                "ke hadapan.",

            hero_description:
                "Space X menggabungkan pengurusan akaun, aktiviti aset digital dan alat pelaburan dalam satu pengalaman yang ringkas.",

            hero_create:
                "Cipta Akaun",

            hero_explore:
                "Terokai Platform",

            market_activity:
                "AKTIVITI PASARAN",

            market_realtime:
                "PAPARAN MASA NYATA",

            features_title:
                "Dibina untuk kejelasan.",

            features_description:
                "Pengalaman yang fokus untuk memantau akaun, mengurus aktiviti dan mengakses alat Space X.",

            feature_account_title:
                "Kawalan mudah",

            feature_account_text:
                "Akses baki, aktiviti akaun dan alat platform daripada papan pemuka yang kemas.",

            feature_activity_title:
                "Jejak aktiviti",

            feature_activity_text:
                "Semak deposit, pengeluaran dan aktiviti pelaburan dalam persekitaran yang teratur.",

            feature_interface_title:
                "Antara muka moden",

            feature_interface_text:
                "Antara muka gelap responsif yang direka untuk pengalaman konsisten pada mudah alih dan desktop.",

            about_title:
                "Satu platform.",

            about_description:
                "Space X direka untuk memberikan pengalaman akaun digital yang mudah dengan alat penting sentiasa mudah dicapai.",

            cta_title:
                "Bersedia untuk bermula?",

            cta_description:
                "Cipta akaun Space X anda dan akses platform daripada peranti pilihan anda.",

            cta_button:
                "Buka Akaun Space X",

            footer_copyright:
                "© 2026 Space X. Hak cipta terpelihara.",

            footer_platform:
                "Platform Aset Digital"

        },


        /* =====================================================
           FILIPINO
           ===================================================== */

        fil: {

            nav_home: "Home",
            nav_platform: "Platform",
            nav_about: "Tungkol sa Amin",
            nav_login: "Mag-login",
            nav_register: "Gumawa ng Account",

            hero_eyebrow:
                "Digital investment platform",

            hero_title:
                "Isulong ang iyong digital assets",

            hero_title_accent:
                "pasulong.",

            hero_description:
                "Pinagsasama ng Space X ang pamamahala ng account, aktibidad ng digital assets at mga investment tool sa isang simple at maayos na karanasan.",

            hero_create:
                "Gumawa ng Account",

            hero_explore:
                "Tuklasin ang Platform",

            market_activity:
                "AKTIBIDAD NG MARKET",

            market_realtime:
                "REAL-TIME VIEW",

            features_title:
                "Ginawa para sa kalinawan.",

            features_description:
                "Isang nakatuong karanasan para subaybayan ang iyong account, pamahalaan ang aktibidad at gamitin ang mga tool ng Space X.",

            feature_account_title:
                "Simpleng kontrol",

            feature_account_text:
                "I-access ang iyong balanse, aktibidad ng account at mga tool ng platform mula sa malinis na dashboard.",

            feature_activity_title:
                "Subaybayan ang aktibidad",

            feature_activity_text:
                "Suriin ang mga deposito, withdrawal at investment activity sa isang organisadong environment.",

            feature_interface_title:
                "Modernong interface",

            feature_interface_text:
                "Isang responsive na dark interface na ginawa para sa pare-parehong karanasan sa mobile at desktop.",

            about_title:
                "Isang platform.",

            about_description:
                "Ang Space X ay idinisenyo para sa simple at madaling digital account experience, na ang mahahalagang tool ay laging madaling ma-access.",

            cta_title:
                "Handa nang magsimula?",

            cta_description:
                "Gumawa ng iyong Space X account at i-access ang platform gamit ang iyong gustong device.",

            cta_button:
                "Buksan ang Space X Account",

            footer_copyright:
                "© 2026 Space X. Nakalaan ang lahat ng karapatan.",

            footer_platform:
                "Digital Asset Platform"

        }

    };


    /* =========================================================
       VALIDATE LANGUAGES
       ========================================================= */

    Object.keys(languageNames).forEach(language => {

        if (!translations[language]) {

            translations[language] = {};

        }

    });


    /* =========================================================
       IMPORTANT FIX
       
       Every language gets every translation key.
       But this is ONLY a safety fallback.
       
       All 23 languages above already contain the
       complete index-page translation set.
       ========================================================= */

    Object.keys(languageNames).forEach(language => {

        if (language === "en") {
            return;
        }

        translations[language] = {

            ...ENGLISH,

            ...translations[language]

        };

    });


    /* =========================================================
       GET CURRENT LANGUAGE
       ========================================================= */

    function getCurrentLanguage() {

        try {

            const saved =
                localStorage.getItem(STORAGE_KEY);

            if (
                saved &&
                Object.prototype.hasOwnProperty.call(
                    languageNames,
                    saved
                )
            ) {

                return saved;

            }

        } catch (error) {

            console.warn(
                "Space X language storage unavailable.",
                error
            );

        }

        return "en";

    }


    /* =========================================================
       SAVE LANGUAGE
       ========================================================= */

    function saveLanguage(language) {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                language
            );

        } catch (error) {

            console.warn(
                "Space X language could not be saved.",
                error
            );

        }

    }


    /* =========================================================
       UPDATE LANGUAGE SELECTOR
       ========================================================= */

    function updateLanguageSelector(language) {

        const selectedName =
            document.getElementById(
                "selectedLanguageName"
            );


        if (
            selectedName &&
            languageNames[language]
        ) {

            selectedName.textContent =
                languageNames[language];

        }


        document
            .querySelectorAll(".language-option")
            .forEach(option => {

                option.classList.toggle(
                    "selected",
                    option.dataset.value === language
                );

            });

    }


    /* =========================================================
       RTL / LTR
       ========================================================= */

    function updateDirection(language) {

        const isRTL =
            rtlLanguages.includes(language);


        document.documentElement.dir =
            isRTL ? "rtl" : "ltr";


        document.documentElement.lang =
            language;


        if (document.body) {

            document.body.dir =
                isRTL ? "rtl" : "ltr";

        }

    }


    /* =========================================================
       TRANSLATE ONE ELEMENT
       ========================================================= */

    function translateElement(
        element,
        language
    ) {

        const key =
            element.getAttribute(
                "data-translate"
            );


        if (!key) {
            return;
        }


        const languagePack =
            translations[language] ||
            translations.en;


        let value =
            languagePack[key];


        if (
            value === undefined ||
            value === null
        ) {

            value =
                translations.en[key];

        }


        if (value !== undefined) {

            /*
             * textContent is intentional.
             * It prevents HTML injection and keeps
             * translations clean.
             */

            element.textContent =
                value;

        }

    }


    /* =========================================================
       TRANSLATE ALL PAGE CONTENT
       ========================================================= */

    function translatePage(language) {

        if (
            !language ||
            !languageNames[language]
        ) {

            language = "en";

        }


        const elements =
            document.querySelectorAll(
                "[data-translate]"
            );


        elements.forEach(element => {

            translateElement(
                element,
                language
            );

        });


        updateDirection(
            language
        );


        updateLanguageSelector(
            language
        );


        saveLanguage(
            language
        );


        /*
         * Update browser title.
         */

        const selected =
            translations[language] ||
            translations.en;


        if (
            selected.hero_eyebrow
        ) {

            document.title =
                "Space X | " +
                selected.hero_eyebrow;

        }


        /*
         * Notify other scripts.
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


    /* =========================================================
       SET LANGUAGE
       ========================================================= */

    function setLanguage(language) {

        if (
            !language ||
            !languageNames[language]
        ) {

            console.warn(
                "Space X: unsupported language:",
                language
            );

            return;

        }


        saveLanguage(
            language
        );


        translatePage(
            language
        );

    }


    /* =========================================================
       CONNECT TO YOUR EXISTING INDEX SELECTOR
       
       Your index.html already dispatches:
       
       spaceXLanguageChanged
       
       so we listen for it here.
       ========================================================= */

    document.addEventListener(
        "spaceXLanguageChanged",
        event => {

            const language =
                event.detail &&
                event.detail.language;


            if (!language) {
                return;
            }


            setLanguage(
                language
            );

        }
    );


    /* =========================================================
       CROSS-TAB LANGUAGE SYNC
       ========================================================= */

    window.addEventListener(
        "storage",
        event => {

            if (
                event.key !== STORAGE_KEY
            ) {

                return;

            }


            if (
                event.newValue &&
                languageNames[event.newValue]
            ) {

                translatePage(
                    event.newValue
                );

            }

        }
    );


    /* =========================================================
       INITIALIZE
       ========================================================= */

    function initializeLanguageSystem() {

        const language =
            getCurrentLanguage();


        translatePage(
            language
        );

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeLanguageSystem,
            {
                once: true
            }
        );

    } else {

        initializeLanguageSystem();

    }


    /* =========================================================
       PUBLIC API
       ========================================================= */

    window.SpaceXLanguage = {

        setLanguage(language) {

            setLanguage(
                language
            );

        },


        getLanguage() {

            return getCurrentLanguage();

        },


        translate() {

            translatePage(
                getCurrentLanguage()
            );

        },


        languages:
            languageNames,


        translations:
            translations

    };


})();