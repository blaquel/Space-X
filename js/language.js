/* =========================================================
   SPACE X — 23 LANGUAGE SYSTEM
   File: js/language.js

   23 LANGUAGES:
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

   Features:
   - Remembers language across pages
   - Works with localStorage
   - Automatic translation on page load
   - RTL support
   - English fallback
   - Works with data-translate=""
   - Works with language selector
   ========================================================= */

(() => {

    "use strict";

    const STORAGE_KEY = "spaceXLanguage";

    /* =====================================================
       23 LANGUAGES
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
        fil: "Filipino"

    };


    /* =====================================================
       RTL LANGUAGES
       ===================================================== */

    const rtlLanguages = [
        "ar"
    ];


    /* =====================================================
       TRANSLATIONS
       ===================================================== */

    const translations = {

        /* =================================================
           ENGLISH
           ================================================= */

        en: {

            nav_home: "Home",
            nav_platform: "Platform",
            nav_about: "About",
            nav_login: "Login",
            nav_register: "Create Account",

            hero_eyebrow: "Digital investment platform",

            hero_title: "Move your digital assets",

            hero_title_accent: "forward.",

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

        },


        /* =================================================
           SPANISH
           ================================================= */

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
                "Accede a tu saldo, actividad de cuenta y herramientas desde un panel limpio.",

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


        /* =================================================
           FRENCH
           ================================================= */

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


        /* =================================================
           GERMAN
           ================================================= */

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


        /* =================================================
           PORTUGUESE
           ================================================= */

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


        /* =================================================
           ITALIAN
           ================================================= */

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

        }

    };


    /* =====================================================
       IMPORTANT:
       The remaining 17 languages inherit English first.
       This means the website NEVER shows undefined text.
       Add/replace individual translations below as needed.
       ===================================================== */

    const additionalTranslations = {

        nl: {
            nav_home: "Home",
            nav_platform: "Platform",
            nav_about: "Over ons",
            nav_login: "Inloggen",
            nav_register: "Account aanmaken",
            hero_eyebrow: "Digitaal investeringsplatform",
            hero_title: "Breng uw digitale activa",
            hero_title_accent: "vooruit.",
            hero_create: "Account aanmaken",
            hero_explore: "Platform verkennen",
            market_activity: "MARKTACTIVITEIT",
            market_realtime: "REALTIME WEERGAVE",
            features_title: "Ontworpen voor duidelijkheid.",
            feature_account_title: "Eenvoudige controle",
            feature_activity_title: "Activiteit volgen",
            feature_interface_title: "Moderne interface",
            about_title: "Eén platform.",
            cta_title: "Klaar om te beginnen?",
            cta_button: "Space X-account openen",
            footer_platform: "Platform voor digitale activa"
        },

        tr: {
            nav_home: "Ana Sayfa",
            nav_platform: "Platform",
            nav_about: "Hakkımızda",
            nav_login: "Giriş",
            nav_register: "Hesap Oluştur",
            hero_eyebrow: "Dijital yatırım platformu",
            hero_title: "Dijital varlıklarınızı",
            hero_title_accent: "ileri taşıyın.",
            hero_create: "Hesap Oluştur",
            hero_explore: "Platformu Keşfet",
            market_activity: "PİYASA FAALİYETİ",
            market_realtime: "GERÇEK ZAMANLI GÖRÜNÜM",
            features_title: "Netlik için tasarlandı.",
            feature_account_title: "Basit kontrol",
            feature_activity_title: "Faaliyetleri takip edin",
            feature_interface_title: "Modern arayüz",
            about_title: "Tek platform.",
            cta_title: "Başlamaya hazır mısınız?",
            cta_button: "Space X Hesabı Aç",
            footer_platform: "Dijital Varlık Platformu"
        },

        ru: {
            nav_home: "Главная",
            nav_platform: "Платформа",
            nav_about: "О нас",
            nav_login: "Войти",
            nav_register: "Создать аккаунт",
            hero_eyebrow: "Цифровая инвестиционная платформа",
            hero_title: "Двигайте цифровые активы",
            hero_title_accent: "вперёд.",
            hero_create: "Создать аккаунт",
            hero_explore: "Изучить платформу",
            market_activity: "АКТИВНОСТЬ РЫНКА",
            market_realtime: "В РЕАЛЬНОМ ВРЕМЕНИ",
            features_title: "Создано для ясности.",
            feature_account_title: "Простой контроль",
            feature_activity_title: "Отслеживание активности",
            feature_interface_title: "Современный интерфейс",
            about_title: "Одна платформа.",
            cta_title: "Готовы начать?",
            cta_button: "Открыть аккаунт Space X",
            footer_platform: "Платформа цифровых активов"
        },

        uk: {
            nav_home: "Головна",
            nav_platform: "Платформа",
            nav_about: "Про нас",
            nav_login: "Увійти",
            nav_register: "Створити акаунт",
            hero_eyebrow: "Цифрова інвестиційна платформа",
            hero_title: "Рухайте цифрові активи",
            hero_title_accent: "вперед.",
            hero_create: "Створити акаунт",
            hero_explore: "Переглянути платформу",
            market_activity: "АКТИВНІСТЬ РИНКУ",
            market_realtime: "ПЕРЕГЛЯД У РЕАЛЬНОМУ ЧАСІ",
            features_title: "Створено для ясності.",
            feature_account_title: "Простий контроль",
            feature_activity_title: "Відстеження активності",
            feature_interface_title: "Сучасний інтерфейс",
            about_title: "Одна платформа.",
            cta_title: "Готові почати?",
            cta_button: "Відкрити акаунт Space X",
            footer_platform: "Платформа цифрових активів"
        },

        pl: {
            nav_home: "Strona główna",
            nav_platform: "Platforma",
            nav_about: "O nas",
            nav_login: "Zaloguj się",
            nav_register: "Utwórz konto",
            hero_eyebrow: "Cyfrowa platforma inwestycyjna",
            hero_title: "Przenieś swoje cyfrowe aktywa",
            hero_title_accent: "do przodu.",
            hero_create: "Utwórz konto",
            hero_explore: "Poznaj platformę",
            market_activity: "AKTYWNOŚĆ RYNKU",
            market_realtime: "WIDOK W CZASIE RZECZYWISTYM",
            features_title: "Stworzone dla przejrzystości.",
            feature_account_title: "Prosta kontrola",
            feature_activity_title: "Śledź aktywność",
            feature_interface_title: "Nowoczesny interfejs",
            about_title: "Jedna platforma.",
            cta_title: "Gotowy, aby zacząć?",
            cta_button: "Otwórz konto Space X",
            footer_platform: "Platforma aktywów cyfrowych"
        },

        ar: {
            nav_home: "الرئيسية",
            nav_platform: "المنصة",
            nav_about: "حولنا",
            nav_login: "تسجيل الدخول",
            nav_register: "إنشاء حساب",
            hero_eyebrow: "منصة استثمار رقمية",
            hero_title: "حرّك أصولك الرقمية",
            hero_title_accent: "إلى الأمام.",
            hero_create: "إنشاء حساب",
            hero_explore: "استكشاف المنصة",
            market_activity: "نشاط السوق",
            market_realtime: "عرض مباشر",
            features_title: "مصممة للوضوح.",
            feature_account_title: "تحكم بسيط",
            feature_activity_title: "تتبع النشاط",
            feature_interface_title: "واجهة حديثة",
            about_title: "منصة واحدة.",
            cta_title: "هل أنت مستعد للبدء؟",
            cta_button: "فتح حساب Space X",
            footer_platform: "منصة الأصول الرقمية"
        },

        hi: {
            nav_home: "होम",
            nav_platform: "प्लेटफ़ॉर्म",
            nav_about: "हमारे बारे में",
            nav_login: "लॉगिन",
            nav_register: "खाता बनाएँ",
            hero_eyebrow: "डिजिटल निवेश प्लेटफ़ॉर्म",
            hero_title: "अपनी डिजिटल संपत्तियों को",
            hero_title_accent: "आगे बढ़ाएँ।",
            hero_create: "खाता बनाएँ",
            hero_explore: "प्लेटफ़ॉर्म देखें",
            market_activity: "बाज़ार गतिविधि",
            market_realtime: "रीयल-टाइम दृश्य",
            features_title: "स्पष्टता के लिए बनाया गया।",
            feature_account_title: "सरल नियंत्रण",
            feature_activity_title: "गतिविधि ट्रैक करें",
            feature_interface_title: "आधुनिक इंटरफ़ेस",
            about_title: "एक प्लेटफ़ॉर्म।",
            cta_title: "शुरू करने के लिए तैयार?",
            cta_button: "Space X खाता खोलें",
            footer_platform: "डिजिटल एसेट प्लेटफ़ॉर्म"
        },

        bn: {
            nav_home: "হোম",
            nav_platform: "প্ল্যাটফর্ম",
            nav_about: "আমাদের সম্পর্কে",
            nav_login: "লগইন",
            nav_register: "অ্যাকাউন্ট তৈরি করুন",
            hero_eyebrow: "ডিজিটাল বিনিয়োগ প্ল্যাটফর্ম",
            hero_title: "আপনার ডিজিটাল সম্পদ",
            hero_title_accent: "এগিয়ে নিন।",
            hero_create: "অ্যাকাউন্ট তৈরি করুন",
            hero_explore: "প্ল্যাটফর্ম দেখুন",
            market_activity: "বাজারের কার্যকলাপ",
            market_realtime: "রিয়েল-টাইম ভিউ",
            features_title: "স্পষ্টতার জন্য তৈরি।",
            feature_account_title: "সহজ নিয়ন্ত্রণ",
            feature_activity_title: "কার্যকলাপ ট্র্যাক করুন",
            feature_interface_title: "আধুনিক ইন্টারফেস",
            about_title: "একটি প্ল্যাটফর্ম।",
            cta_title: "শুরু করতে প্রস্তুত?",
            cta_button: "Space X অ্যাকাউন্ট খুলুন",
            footer_platform: "ডিজিটাল সম্পদ প্ল্যাটফর্ম"
        },

        "zh-CN": {
            nav_home: "首页",
            nav_platform: "平台",
            nav_about: "关于我们",
            nav_login: "登录",
            nav_register: "创建账户",
            hero_eyebrow: "数字投资平台",
            hero_title: "推动您的数字资产",
            hero_title_accent: "向前发展。",
            hero_create: "创建账户",
            hero_explore: "探索平台",
            market_activity: "市场活动",
            market_realtime: "实时查看",
            features_title: "为清晰而设计。",
            feature_account_title: "简单控制",
            feature_activity_title: "跟踪活动",
            feature_interface_title: "现代界面",
            about_title: "一个平台。",
            cta_title: "准备开始了吗？",
            cta_button: "开通 Space X 账户",
            footer_platform: "数字资产平台"
        },

        "zh-TW": {
            nav_home: "首頁",
            nav_platform: "平台",
            nav_about: "關於我們",
            nav_login: "登入",
            nav_register: "建立帳戶",
            hero_eyebrow: "數位投資平台",
            hero_title: "推動您的數位資產",
            hero_title_accent: "向前發展。",
            hero_create: "建立帳戶",
            hero_explore: "探索平台",
            market_activity: "市場活動",
            market_realtime: "即時檢視",
            features_title: "為清晰而設計。",
            feature_account_title: "簡單控制",
            feature_activity_title: "追蹤活動",
            feature_interface_title: "現代介面",
            about_title: "一個平台。",
            cta_title: "準備開始了嗎？",
            cta_button: "開啟 Space X 帳戶",
            footer_platform: "數位資產平台"
        },

        ja: {
            nav_home: "ホーム",
            nav_platform: "プラットフォーム",
            nav_about: "概要",
            nav_login: "ログイン",
            nav_register: "アカウント作成",
            hero_eyebrow: "デジタル投資プラットフォーム",
            hero_title: "デジタル資産を",
            hero_title_accent: "前へ進める。",
            hero_create: "アカウントを作成",
            hero_explore: "プラットフォームを見る",
            market_activity: "市場活動",
            market_realtime: "リアルタイム表示",
            features_title: "明確さのために設計。",
            feature_account_title: "シンプルな管理",
            feature_activity_title: "アクティビティを追跡",
            feature_interface_title: "モダンなインターフェース",
            about_title: "ひとつのプラットフォーム。",
            cta_title: "始める準備はできましたか？",
            cta_button: "Space X アカウントを開設",
            footer_platform: "デジタル資産プラットフォーム"
        },

        ko: {
            nav_home: "홈",
            nav_platform: "플랫폼",
            nav_about: "소개",
            nav_login: "로그인",
            nav_register: "계정 만들기",
            hero_eyebrow: "디지털 투자 플랫폼",
            hero_title: "디지털 자산을",
            hero_title_accent: "앞으로 이동하세요.",
            hero_create: "계정 만들기",
            hero_explore: "플랫폼 둘러보기",
            market_activity: "시장 활동",
            market_realtime: "실시간 보기",
            features_title: "명확성을 위해 설계되었습니다.",
            feature_account_title: "간편한 관리",
            feature_activity_title: "활동 추적",
            feature_interface_title: "현대적인 인터페이스",
            about_title: "하나의 플랫폼.",
            cta_title: "시작할 준비가 되셨나요?",
            cta_button: "Space X 계정 열기",
            footer_platform: "디지털 자산 플랫폼"
        },

        vi: {
            nav_home: "Trang chủ",
            nav_platform: "Nền tảng",
            nav_about: "Giới thiệu",
            nav_login: "Đăng nhập",
            nav_register: "Tạo tài khoản",
            hero_eyebrow: "Nền tảng đầu tư kỹ thuật số",
            hero_title: "Đưa tài sản kỹ thuật số",
            hero_title_accent: "tiến về phía trước.",
            hero_create: "Tạo tài khoản",
            hero_explore: "Khám phá nền tảng",
            market_activity: "HOẠT ĐỘNG THỊ TRƯỜNG",
            market_realtime: "XEM THEO THỜI GIAN THỰC",
            features_title: "Được xây dựng để rõ ràng.",
            feature_account_title: "Kiểm soát đơn giản",
            feature_activity_title: "Theo dõi hoạt động",
            feature_interface_title: "Giao diện hiện đại",
            about_title: "Một nền tảng.",
            cta_title: "Sẵn sàng bắt đầu?",
            cta_button: "Mở tài khoản Space X",
            footer_platform: "Nền tảng tài sản kỹ thuật số"
        },

        th: {
            nav_home: "หน้าหลัก",
            nav_platform: "แพลตฟอร์ม",
            nav_about: "เกี่ยวกับเรา",
            nav_login: "เข้าสู่ระบบ",
            nav_register: "สร้างบัญชี",
            hero_eyebrow: "แพลตฟอร์มการลงทุนดิจิทัล",
            hero_title: "ขับเคลื่อนสินทรัพย์ดิจิทัลของคุณ",
            hero_title_accent: "ไปข้างหน้า",
            hero_create: "สร้างบัญชี",
            hero_explore: "สำรวจแพลตฟอร์ม",
            market_activity: "กิจกรรมตลาด",
            market_realtime: "ดูแบบเรียลไทม์",
            features_title: "สร้างขึ้นเพื่อความชัดเจน",
            feature_account_title: "ควบคุมง่าย",
            feature_activity_title: "ติดตามกิจกรรม",
            feature_interface_title: "อินเทอร์เฟซทันสมัย",
            about_title: "แพลตฟอร์มเดียว",
            cta_title: "พร้อมเริ่มต้นหรือยัง?",
            cta_button: "เปิดบัญชี Space X",
            footer_platform: "แพลตฟอร์มสินทรัพย์ดิจิทัล"
        },

        id: {
            nav_home: "Beranda",
            nav_platform: "Platform",
            nav_about: "Tentang",
            nav_login: "Masuk",
            nav_register: "Buat Akun",
            hero_eyebrow: "Platform investasi digital",
            hero_title: "Majukan aset digital Anda",
            hero_title_accent: "ke depan.",
            hero_create: "Buat Akun",
            hero_explore: "Jelajahi Platform",
            market_activity: "AKTIVITAS PASAR",
            market_realtime: "TAMPILAN REAL-TIME",
            features_title: "Dibuat untuk kejelasan.",
            feature_account_title: "Kontrol sederhana",
            feature_activity_title: "Lacak aktivitas",
            feature_interface_title: "Antarmuka modern",
            about_title: "Satu platform.",
            cta_title: "Siap untuk memulai?",
            cta_button: "Buka Akun Space X",
            footer_platform: "Platform Aset Digital"
        },

        ms: {
            nav_home: "Laman Utama",
            nav_platform: "Platform",
            nav_about: "Tentang",
            nav_login: "Log Masuk",
            nav_register: "Cipta Akaun",
            hero_eyebrow: "Platform pelaburan digital",
            hero_title: "Gerakkan aset digital anda",
            hero_title_accent: "ke hadapan.",
            hero_create: "Cipta Akaun",
            hero_explore: "Terokai Platform",
            market_activity: "AKTIVITI PASARAN",
            market_realtime: "PAPARAN MASA NYATA",
            features_title: "Dibina untuk kejelasan.",
            feature_account_title: "Kawalan mudah",
            feature_activity_title: "Jejak aktiviti",
            feature_interface_title: "Antara muka moden",
            about_title: "Satu platform.",
            cta_title: "Bersedia untuk bermula?",
            cta_button: "Buka Akaun Space X",
            footer_platform: "Platform Aset Digital"
        },

        fil: {
            nav_home: "Home",
            nav_platform: "Platform",
            nav_about: "Tungkol sa Amin",
            nav_login: "Mag-login",
            nav_register: "Gumawa ng Account",
            hero_eyebrow: "Digital investment platform",
            hero_title: "Isulong ang iyong digital assets",
            hero_title_accent: "pasulong.",
            hero_create: "Gumawa ng Account",
            hero_explore: "Tuklasin ang Platform",
            market_activity: "AKTIBIDAD NG MARKET",
            market_realtime: "REAL-TIME VIEW",
            features_title: "Ginawa para sa kalinawan.",
            feature_account_title: "Simpleng kontrol",
            feature_activity_title: "Subaybayan ang aktibidad",
            feature_interface_title: "Modernong interface",
            about_title: "Isang platform.",
            cta_title: "Handa nang magsimula?",
            cta_button: "Buksan ang Space X Account",
            footer_platform: "Digital Asset Platform"
        }

    };


    /* =====================================================
       MERGE ALL LANGUAGES
       ===================================================== */

    Object.keys(languageNames).forEach(language => {

        if (language === "en") {
            return;
        }

        translations[language] = {
            ...translations.en,
            ...(additionalTranslations[language] || {})
        };

    });


    /* =====================================================
       GET CURRENT LANGUAGE
       ===================================================== */

    function getCurrentLanguage() {

        try {

            const saved =
                localStorage.getItem(STORAGE_KEY);

            if (
                saved &&
                languageNames[saved]
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


    /* =====================================================
       SAVE LANGUAGE
       ===================================================== */

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


    /* =====================================================
       UPDATE SELECTOR
       ===================================================== */

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


    /* =====================================================
       APPLY RTL / LTR
       ===================================================== */

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


    /* =====================================================
       TRANSLATE ELEMENT
       ===================================================== */

    function translateElement(element, language) {

        const key =
            element.getAttribute(
                "data-translate"
            );

        if (!key) {
            return;
        }

        const selected =
            translations[language] ||
            translations.en;

        const value =
            selected[key] !== undefined
                ? selected[key]
                : translations.en[key];

        if (value !== undefined) {

            element.textContent =
                value;

        }

    }


    /* =====================================================
       TRANSLATE PAGE
       ===================================================== */

    function translatePage(language) {

        if (
            !language ||
            !languageNames[language]
        ) {

            language = "en";

        }


        document
            .querySelectorAll("[data-translate]")
            .forEach(element => {

                translateElement(
                    element,
                    language
                );

            });


        updateDirection(language);

        updateLanguageSelector(language);

        saveLanguage(language);


        /*
         * Update title.
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
         * Tell other scripts.
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
       SET LANGUAGE
       ===================================================== */

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


        saveLanguage(language);

        translatePage(language);

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

            setLanguage(language);

        }
    );


    /* =====================================================
       STORAGE EVENT
       ===================================================== */

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


    /* =====================================================
       INITIALIZE
       ===================================================== */

    function initializeLanguageSystem() {

        const language =
            getCurrentLanguage();

        translatePage(language);

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


    /* =====================================================
       PUBLIC API
       ===================================================== */

    window.SpaceXLanguage = {

        setLanguage(language) {

            setLanguage(language);

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