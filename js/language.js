/* =========================================================
   SPACE X — GLOBAL 23 LANGUAGE SYSTEM
   File: js/language.js

   ONE LANGUAGE SELECTED ON INDEX = ALL PAGES

   Supported pages:
   - Index
   - Register
   - Login
   - Dashboard
   - Deposit
   - Invest
   - Withdraw
   - Wallet
   - History
   - Support
   - Bank Transfer
   - Crypto
   - Gift Card
   - Withdraw Crypto
   - Withdraw PayPal
   - Withdraw Cash App

   Supported languages:
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

   FEATURES:
   - Language selected on index applies everywhere
   - localStorage persistence
   - No language selector required on other pages
   - Automatic translation on page load
   - Placeholder translation
   - Button translation
   - RTL Arabic support
   - English fallback
   - Dynamic elements supported
   ========================================================= */

(() => {

    "use strict";

    /* =====================================================
       STORAGE
       ===================================================== */

    const STORAGE_KEY = "spaceXLanguage";


    /* =====================================================
       LANGUAGE LIST
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
       RTL
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

            /* ================= INDEX ================= */

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

            hero_create: "Create Account",
            hero_explore: "Explore Platform",

            market_activity: "MARKET ACTIVITY",
            market_realtime: "REAL-TIME VIEW",

            features_title: "Built for clarity.",

            features_description:
                "A focused experience for monitoring your account, managing activity and accessing your Space X tools.",

            feature_account_title: "Simple control",

            feature_account_text:
                "Access your balance, account activity and platform tools from a clean dashboard.",

            feature_activity_title: "Track activity",

            feature_activity_text:
                "Review deposits, withdrawals and investment activity in one organized environment.",

            feature_interface_title: "Modern interface",

            feature_interface_text:
                "A responsive dark interface designed for a consistent experience across mobile and desktop.",

            about_title: "One platform.",

            about_description:
                "Space X is designed around a straightforward digital account experience, with the essential tools kept within reach.",

            cta_title: "Ready to get started?",

            cta_description:
                "Create your Space X account and access the platform from your preferred device.",

            cta_button: "Open Space X Account",

            footer_copyright:
                "© 2026 Space X. All Rights Reserved.",

            footer_platform:
                "Digital Asset Platform",


            /* ================= REGISTER ================= */

            register_eyebrow: "New Member",

            register_title:
                "Create your account.",

            register_subtitle:
                "Set up your Space X account and access your personal investment dashboard.",

            register_email_label:
                "EMAIL ADDRESS",

            register_email_placeholder:
                "Enter your email",

            register_username_label:
                "USERNAME",

            register_username_placeholder:
                "Choose a username",

            register_password_label:
                "PASSWORD",

            register_password_placeholder:
                "Create a password",

            register_confirm_password_label:
                "CONFIRM PASSWORD",

            register_confirm_password_placeholder:
                "Confirm your password",

            register_show: "Show",
            register_hide: "Hide",

            register_button: "Create Account",

            register_existing:
                "Already have an account?",

            register_signin:
                "Sign in",

            register_secure:
                "Secure account creation",

            register_loader_title:
                "Creating your account...",

            register_loader_text:
                "Please wait while Space X sets up your account.",

            register_success_title:
                "Account Created",

            register_success_text:
                "Welcome to Space X. Your account has been created successfully.",

            register_continue:
                "Continue to Dashboard",

            register_error_required:
                "Please complete all fields.",

            register_error_username:
                "Username must contain at least 3 characters.",

            register_error_password_match:
                "Passwords do not match.",

            register_error_password_length:
                "Password must be at least 6 characters.",

            register_error_email_exists:
                "This email is already registered.",

            register_error_invalid_email:
                "Please enter a valid email address.",

            register_error_network:
                "Network connection failed. Please check your internet connection.",

            register_error_general:
                "Registration failed. Please try again.",


            /* ================= LOGIN ================= */

            login_eyebrow: "Member Access",

            login_title:
                "Welcome back.",

            login_subtitle:
                "Sign in to continue to your Space X account.",

            login_email_label:
                "EMAIL ADDRESS",

            login_email_placeholder:
                "Enter your email",

            login_password_label:
                "PASSWORD",

            login_password_placeholder:
                "Enter your password",

            login_show: "Show",
            login_hide: "Hide",

            login_button: "Sign In",

            login_new_user:
                "New to Space X?",

            login_create_account:
                "Create an account",

            login_secure:
                "Secure account authentication",

            login_loader_title:
                "Signing you in securely...",

            login_loader_text:
                "Please wait while Space X authenticates your account.",

            login_success_title:
                "Welcome back",

            login_success_text:
                "Your Space X account has been authenticated successfully.",

            login_continue:
                "Continue to Dashboard",

            login_error_required:
                "Please enter your email address and password.",

            login_error_general:
                "Unable to sign in. Please check your email and password.",

            login_error_invalid:
                "The email or password is incorrect.",

            login_error_invalid_email:
                "Please enter a valid email address.",

            login_error_too_many:
                "Too many attempts. Please try again later.",

            login_error_network:
                "Network connection failed. Please check your internet connection.",


            /* ================= COMMON ================= */

            common_home: "Home",
            common_back: "Back",
            common_next: "Next",
            common_continue: "Continue",
            common_cancel: "Cancel",
            common_close: "Close",
            common_confirm: "Confirm",
            common_submit: "Submit",
            common_save: "Save",
            common_loading: "Loading...",
            common_success: "Success",
            common_error: "Error",
            common_pending: "Pending",
            common_completed: "Completed",
            common_failed: "Failed",
            common_active: "Active",
            common_inactive: "Inactive",
            common_copy: "Copy",
            common_copied: "Copied",
            common_search: "Search",
            common_amount: "Amount",
            common_status: "Status",
            common_date: "Date",
            common_time: "Time",
            common_details: "Details",
            common_total: "Total",
            common_balance: "Balance",
            common_account: "Account",
            common_username: "Username",
            common_email: "Email",
            common_logout: "Logout",


            /* ================= DASHBOARD ================= */

            dashboard_title: "Dashboard",

            dashboard_welcome:
                "Welcome back",

            dashboard_balance:
                "Available Balance",

            dashboard_total_referrals:
                "Total Referrals",

            dashboard_referral_bonus:
                "Referral Bonus",

            dashboard_total_investment:
                "Total Investment",

            dashboard_active_plan:
                "Active Plan",

            dashboard_activate:
                "Activate",

            dashboard_activated:
                "Activated",

            dashboard_withdraw:
                "Withdraw",

            dashboard_deposit:
                "Deposit",

            dashboard_invest:
                "Invest",

            dashboard_wallet:
                "Wallet",

            dashboard_history:
                "History",

            dashboard_profile:
                "Profile",

            dashboard_support:
                "Support",

            dashboard_referral:
                "Referral Link",

            dashboard_referral_copy:
                "Copy",

            dashboard_status:
                "Account Status",

            dashboard_pending:
                "Pending Activation",

            dashboard_verified:
                "Account Activated",

            dashboard_recent_activity:
                "Recent Activity",

            dashboard_view_history:
                "View History",


            /* ================= DEPOSIT ================= */

            deposit_title:
                "Deposit",

            deposit_subtitle:
                "Add funds to your Space X account.",

            deposit_amount:
                "Deposit Amount",

            deposit_method:
                "Payment Method",

            deposit_bank:
                "Bank Transfer",

            deposit_crypto:
                "Crypto",

            deposit_gift_card:
                "Gift Card",

            deposit_continue:
                "Continue",

            deposit_submit:
                "Submit Deposit",

            deposit_reference:
                "Transaction Reference",

            deposit_upload:
                "Upload Proof",

            deposit_pending:
                "Your deposit is being reviewed.",

            deposit_success:
                "Deposit request submitted successfully.",


            /* ================= INVEST ================= */

            invest_title:
                "Investment",

            invest_subtitle:
                "Choose an investment option.",

            invest_amount:
                "Investment Amount",

            invest_plan:
                "Investment Plan",

            invest_duration:
                "Duration",

            invest_return:
                "Expected Return",

            invest_start:
                "Start Investment",

            invest_active:
                "Active Investment",

            invest_completed:
                "Completed Investment",

            invest_pending:
                "Pending Investment",

            invest_confirm:
                "Confirm Investment",

            invest_success:
                "Investment submitted successfully.",


            /* ================= WITHDRAW ================= */

            withdraw_title:
                "Withdraw",

            withdraw_subtitle:
                "Withdraw funds from your Space X account.",

            withdraw_method:
                "Withdrawal Method",

            withdraw_bank:
                "Bank Transfer",

            withdraw_crypto:
                "Crypto",

            withdraw_paypal:
                "PayPal",

            withdraw_cashapp:
                "Cash App",

            withdraw_amount:
                "Withdrawal Amount",

            withdraw_available:
                "Available Balance",

            withdraw_submit:
                "Submit Withdrawal",

            withdraw_confirm:
                "Confirm Withdrawal",

            withdraw_pending:
                "Withdrawal Pending",

            withdraw_success:
                "Withdrawal request submitted successfully.",

            withdraw_insufficient:
                "Insufficient balance.",


            /* ================= WALLET ================= */

            wallet_title:
                "Wallet",

            wallet_balance:
                "Wallet Balance",

            wallet_available:
                "Available Balance",

            wallet_deposit:
                "Deposit",

            wallet_withdraw:
                "Withdraw",

            wallet_transfer:
                "Transfer",

            wallet_transactions:
                "Transactions",

            wallet_empty:
                "No transactions yet.",


            /* ================= HISTORY ================= */

            history_title:
                "History",

            history_all:
                "All",

            history_deposits:
                "Deposits",

            history_withdrawals:
                "Withdrawals",

            history_investments:
                "Investments",

            history_referrals:
                "Referrals",

            history_no_activity:
                "No activity found.",


            /* ================= SUPPORT ================= */

            support_title:
                "Support",

            support_subtitle:
                "How can we help you?",

            support_contact:
                "Contact Support",

            support_message:
                "Message",

            support_send:
                "Send Message",

            support_faq:
                "Frequently Asked Questions",

            support_help:
                "Help Center",

            support_response:
                "Our support team will respond as soon as possible.",


            /* ================= BANK TRANSFER ================= */

            bank_transfer_title:
                "Bank Transfer",

            bank_transfer_subtitle:
                "Deposit using a bank transfer.",

            bank_transfer_account_name:
                "Account Name",

            bank_transfer_account_number:
                "Account Number",

            bank_transfer_bank_name:
                "Bank Name",

            bank_transfer_amount:
                "Amount",

            bank_transfer_reference:
                "Reference",

            bank_transfer_confirm:
                "I have completed the transfer",

            bank_transfer_submit:
                "Submit Transfer",


            /* ================= CRYPTO ================= */

            crypto_title:
                "Crypto",

            crypto_subtitle:
                "Deposit using cryptocurrency.",

            crypto_network:
                "Network",

            crypto_address:
                "Wallet Address",

            crypto_amount:
                "Amount",

            crypto_copy_address:
                "Copy Address",

            crypto_transaction_hash:
                "Transaction Hash",

            crypto_submit:
                "Submit Transaction",


            /* ================= GIFT CARD ================= */

            giftcard_title:
                "Gift Card",

            giftcard_subtitle:
                "Deposit using a gift card.",

            giftcard_type:
                "Gift Card Type",

            giftcard_code:
                "Gift Card Code",

            giftcard_amount:
                "Gift Card Amount",

            giftcard_submit:
                "Submit Gift Card",

            giftcard_pending:
                "Gift card submission is being reviewed.",


            /* ================= WITHDRAW CRYPTO ================= */

            withdraw_crypto_title:
                "Withdraw Crypto",

            withdraw_crypto_subtitle:
                "Send your funds to a cryptocurrency wallet.",

            withdraw_crypto_network:
                "Network",

            withdraw_crypto_address:
                "Wallet Address",

            withdraw_crypto_amount:
                "Amount",

            withdraw_crypto_submit:
                "Submit Withdrawal",

            withdraw_crypto_confirm:
                "Confirm Crypto Withdrawal",


            /* ================= WITHDRAW PAYPAL ================= */

            withdraw_paypal_title:
                "Withdraw with PayPal",

            withdraw_paypal_subtitle:
                "Withdraw your funds to your PayPal account.",

            withdraw_paypal_email:
                "PayPal Email",

            withdraw_paypal_amount:
                "Amount",

            withdraw_paypal_submit:
                "Submit Withdrawal",

            withdraw_paypal_confirm:
                "Confirm PayPal Withdrawal",


            /* ================= WITHDRAW CASH APP ================= */

            withdraw_cashapp_title:
                "Withdraw with Cash App",

            withdraw_cashapp_subtitle:
                "Withdraw your funds to your Cash App account.",

            withdraw_cashapp_tag:
                "Cash App $Cashtag",

            withdraw_cashapp_amount:
                "Amount",

            withdraw_cashapp_submit:
                "Submit Withdrawal",

            withdraw_cashapp_confirm:
                "Confirm Cash App Withdrawal"

        }

    };


    /* =====================================================
       SPANISH
       ===================================================== */

    translations.es = {

        ...translations.en,

        nav_home: "Inicio",
        nav_platform: "Plataforma",
        nav_about: "Acerca de",
        nav_login: "Iniciar sesión",
        nav_register: "Crear cuenta",

        hero_eyebrow: "Plataforma de inversión digital",
        hero_title: "Mueve tus activos digitales",
        hero_title_accent: "hacia adelante.",
        hero_description: "Space X reúne la gestión de cuentas, la actividad de activos digitales y las herramientas de inversión en una experiencia sencilla.",
        hero_create: "Crear cuenta",
        hero_explore: "Explorar plataforma",

        register_eyebrow: "Nuevo miembro",
        register_title: "Crea tu cuenta.",
        register_subtitle: "Configura tu cuenta de Space X y accede a tu panel de inversión personal.",
        register_email_label: "CORREO ELECTRÓNICO",
        register_email_placeholder: "Introduce tu correo electrónico",
        register_username_label: "NOMBRE DE USUARIO",
        register_username_placeholder: "Elige un nombre de usuario",
        register_password_label: "CONTRASEÑA",
        register_password_placeholder: "Crea una contraseña",
        register_confirm_password_label: "CONFIRMAR CONTRASEÑA",
        register_confirm_password_placeholder: "Confirma tu contraseña",
        register_show: "Mostrar",
        register_hide: "Ocultar",
        register_button: "Crear cuenta",
        register_existing: "¿Ya tienes una cuenta?",
        register_signin: "Iniciar sesión",
        register_secure: "Creación segura de cuenta",

        login_eyebrow: "Acceso de miembros",
        login_title: "Bienvenido de nuevo.",
        login_subtitle: "Inicia sesión para continuar con tu cuenta de Space X.",
        login_email_label: "CORREO ELECTRÓNICO",
        login_email_placeholder: "Introduce tu correo electrónico",
        login_password_label: "CONTRASEÑA",
        login_password_placeholder: "Introduce tu contraseña",
        login_show: "Mostrar",
        login_hide: "Ocultar",
        login_button: "Iniciar sesión",
        login_new_user: "¿Nuevo en Space X?",
        login_create_account: "Crear una cuenta",
        login_secure: "Autenticación segura de la cuenta",

        dashboard_title: "Panel",
        dashboard_welcome: "Bienvenido de nuevo",
        dashboard_balance: "Saldo disponible",
        dashboard_total_referrals: "Referidos totales",
        dashboard_referral_bonus: "Bono por referidos",
        dashboard_total_investment: "Inversión total",
        dashboard_active_plan: "Plan activo",
        dashboard_activate: "Activar",
        dashboard_activated: "Activado",
        dashboard_withdraw: "Retirar",
        dashboard_deposit: "Depositar",
        dashboard_invest: "Invertir",
        dashboard_wallet: "Billetera",
        dashboard_history: "Historial",
        dashboard_support: "Soporte",

        deposit_title: "Depositar",
        deposit_subtitle: "Añade fondos a tu cuenta de Space X.",
        deposit_amount: "Importe del depósito",
        deposit_method: "Método de pago",
        deposit_bank: "Transferencia bancaria",
        deposit_crypto: "Cripto",
        deposit_gift_card: "Tarjeta regalo",
        deposit_continue: "Continuar",
        deposit_submit: "Enviar depósito",

        invest_title: "Inversión",
        invest_subtitle: "Elige una opción de inversión.",
        invest_amount: "Importe de inversión",
        invest_plan: "Plan de inversión",
        invest_duration: "Duración",
        invest_return: "Rendimiento esperado",
        invest_start: "Iniciar inversión",

        withdraw_title: "Retirar",
        withdraw_subtitle: "Retira fondos de tu cuenta de Space X.",
        withdraw_method: "Método de retiro",
        withdraw_bank: "Transferencia bancaria",
        withdraw_crypto: "Cripto",
        withdraw_paypal: "PayPal",
        withdraw_cashapp: "Cash App",
        withdraw_amount: "Importe del retiro",
        withdraw_available: "Saldo disponible",
        withdraw_submit: "Enviar retiro",
        withdraw_confirm: "Confirmar retiro",

        wallet_title: "Billetera",
        wallet_balance: "Saldo de la billetera",
        wallet_available: "Saldo disponible",
        wallet_deposit: "Depositar",
        wallet_withdraw: "Retirar",
        wallet_transactions: "Transacciones",

        history_title: "Historial",
        history_all: "Todo",
        history_deposits: "Depósitos",
        history_withdrawals: "Retiros",
        history_investments: "Inversiones",
        history_referrals: "Referidos",
        history_no_activity: "No se encontró actividad.",

        support_title: "Soporte",
        support_subtitle: "¿Cómo podemos ayudarte?",
        support_contact: "Contactar con soporte",
        support_message: "Mensaje",
        support_send: "Enviar mensaje",
        support_faq: "Preguntas frecuentes",

        bank_transfer_title: "Transferencia bancaria",
        bank_transfer_account_name: "Nombre de la cuenta",
        bank_transfer_account_number: "Número de cuenta",
        bank_transfer_bank_name: "Nombre del banco",
        bank_transfer_amount: "Importe",
        bank_transfer_submit: "Enviar transferencia",

        crypto_title: "Cripto",
        crypto_subtitle: "Deposita usando criptomonedas.",
        crypto_network: "Red",
        crypto_address: "Dirección de billetera",
        crypto_amount: "Importe",
        crypto_copy_address: "Copiar dirección",
        crypto_submit: "Enviar transacción",

        giftcard_title: "Tarjeta regalo",
        giftcard_subtitle: "Deposita usando una tarjeta regalo.",
        giftcard_type: "Tipo de tarjeta regalo",
        giftcard_code: "Código de tarjeta regalo",
        giftcard_amount: "Importe de la tarjeta",
        giftcard_submit: "Enviar tarjeta regalo",

        withdraw_crypto_title: "Retirar cripto",
        withdraw_crypto_subtitle: "Envía tus fondos a una billetera de criptomonedas.",
        withdraw_crypto_network: "Red",
        withdraw_crypto_address: "Dirección de billetera",
        withdraw_crypto_amount: "Importe",
        withdraw_crypto_submit: "Enviar retiro",

        withdraw_paypal_title: "Retirar con PayPal",
        withdraw_paypal_subtitle: "Retira tus fondos a tu cuenta de PayPal.",
        withdraw_paypal_email: "Correo de PayPal",
        withdraw_paypal_amount: "Importe",
        withdraw_paypal_submit: "Enviar retiro",

        withdraw_cashapp_title: "Retirar con Cash App",
        withdraw_cashapp_subtitle: "Retira tus fondos a tu cuenta de Cash App.",
        withdraw_cashapp_tag: "Cashtag de Cash App",
        withdraw_cashapp_amount: "Importe",
        withdraw_cashapp_submit: "Enviar retiro"

    };


    /* =====================================================
       FRENCH
       ===================================================== */

    translations.fr = {

        ...translations.en,

        nav_home: "Accueil",
        nav_platform: "Plateforme",
        nav_about: "À propos",
        nav_login: "Connexion",
        nav_register: "Créer un compte",

        hero_eyebrow: "Plateforme d'investissement numérique",
        hero_title: "Faites avancer vos actifs numériques",
        hero_title_accent: "vers l'avant.",
        hero_create: "Créer un compte",
        hero_explore: "Explorer la plateforme",

        register_eyebrow: "Nouveau membre",
        register_title: "Créez votre compte.",
        register_subtitle: "Configurez votre compte Space X et accédez à votre tableau de bord d'investissement personnel.",
        register_email_label: "ADRESSE E-MAIL",
        register_email_placeholder: "Entrez votre adresse e-mail",
        register_username_label: "NOM D'UTILISATEUR",
        register_username_placeholder: "Choisissez un nom d'utilisateur",
        register_password_label: "MOT DE PASSE",
        register_password_placeholder: "Créez un mot de passe",
        register_confirm_password_label: "CONFIRMER LE MOT DE PASSE",
        register_confirm_password_placeholder: "Confirmez votre mot de passe",
        register_show: "Afficher",
        register_hide: "Masquer",
        register_button: "Créer un compte",
        register_existing: "Vous avez déjà un compte ?",
        register_signin: "Se connecter",

        login_eyebrow: "Accès membre",
        login_title: "Bon retour.",
        login_subtitle: "Connectez-vous pour continuer vers votre compte Space X.",
        login_email_label: "ADRESSE E-MAIL",
        login_email_placeholder: "Entrez votre adresse e-mail",
        login_password_label: "MOT DE PASSE",
        login_password_placeholder: "Entrez votre mot de passe",
        login_show: "Afficher",
        login_hide: "Masquer",
        login_button: "Se connecter",
        login_new_user: "Nouveau sur Space X ?",
        login_create_account: "Créer un compte",

        dashboard_title: "Tableau de bord",
        dashboard_welcome: "Bon retour",
        dashboard_balance: "Solde disponible",
        dashboard_total_referrals: "Total des parrainages",
        dashboard_referral_bonus: "Bonus de parrainage",
        dashboard_total_investment: "Investissement total",
        dashboard_active_plan: "Plan actif",
        dashboard_activate: "Activer",
        dashboard_activated: "Activé",
        dashboard_withdraw: "Retirer",
        dashboard_deposit: "Déposer",
        dashboard_invest: "Investir",
        dashboard_wallet: "Portefeuille",
        dashboard_history: "Historique",
        dashboard_support: "Assistance",

        deposit_title: "Dépôt",
        deposit_subtitle: "Ajoutez des fonds à votre compte Space X.",
        deposit_amount: "Montant du dépôt",
        deposit_method: "Méthode de paiement",
        deposit_bank: "Virement bancaire",
        deposit_crypto: "Crypto",
        deposit_gift_card: "Carte cadeau",
        deposit_continue: "Continuer",
        deposit_submit: "Envoyer le dépôt",

        invest_title: "Investissement",
        invest_subtitle: "Choisissez une option d'investissement.",
        invest_amount: "Montant de l'investissement",
        invest_plan: "Plan d'investissement",
        invest_duration: "Durée",
        invest_return: "Rendement attendu",
        invest_start: "Démarrer l'investissement",

        withdraw_title: "Retrait",
        withdraw_subtitle: "Retirez des fonds de votre compte Space X.",
        withdraw_method: "Méthode de retrait",
        withdraw_bank: "Virement bancaire",
        withdraw_crypto: "Crypto",
        withdraw_paypal: "PayPal",
        withdraw_cashapp: "Cash App",
        withdraw_amount: "Montant du retrait",
        withdraw_available: "Solde disponible",
        withdraw_submit: "Envoyer le retrait",
        withdraw_confirm: "Confirmer le retrait",

        wallet_title: "Portefeuille",
        wallet_balance: "Solde du portefeuille",
        wallet_available: "Solde disponible",
        wallet_deposit: "Dépôt",
        wallet_withdraw: "Retrait",
        wallet_transactions: "Transactions",

        history_title: "Historique",
        history_all: "Tout",
        history_deposits: "Dépôts",
        history_withdrawals: "Retraits",
        history_investments: "Investissements",
        history_referrals: "Parrainages",
        history_no_activity: "Aucune activité trouvée.",

        support_title: "Assistance",
        support_subtitle: "Comment pouvons-nous vous aider ?",
        support_contact: "Contacter l'assistance",
        support_message: "Message",
        support_send: "Envoyer le message",
        support_faq: "Questions fréquentes",

        bank_transfer_title: "Virement bancaire",
        bank_transfer_account_name: "Nom du compte",
        bank_transfer_account_number: "Numéro de compte",
        bank_transfer_bank_name: "Nom de la banque",
        bank_transfer_amount: "Montant",
        bank_transfer_submit: "Envoyer le virement",

        crypto_title: "Crypto",
        crypto_subtitle: "Déposez avec une cryptomonnaie.",
        crypto_network: "Réseau",
        crypto_address: "Adresse du portefeuille",
        crypto_amount: "Montant",
        crypto_copy_address: "Copier l'adresse",
        crypto_submit: "Envoyer la transaction",

        giftcard_title: "Carte cadeau",
        giftcard_subtitle: "Déposez avec une carte cadeau.",
        giftcard_type: "Type de carte cadeau",
        giftcard_code: "Code de carte cadeau",
        giftcard_amount: "Montant de la carte",
        giftcard_submit: "Envoyer la carte cadeau",

        withdraw_crypto_title: "Retrait crypto",
        withdraw_crypto_subtitle: "Envoyez vos fonds vers un portefeuille crypto.",
        withdraw_crypto_network: "Réseau",
        withdraw_crypto_address: "Adresse du portefeuille",
        withdraw_crypto_amount: "Montant",
        withdraw_crypto_submit: "Envoyer le retrait",

        withdraw_paypal_title: "Retrait PayPal",
        withdraw_paypal_subtitle: "Retirez vos fonds vers votre compte PayPal.",
        withdraw_paypal_email: "E-mail PayPal",
        withdraw_paypal_amount: "Montant",
        withdraw_paypal_submit: "Envoyer le retrait",

        withdraw_cashapp_title: "Retrait Cash App",
        withdraw_cashapp_subtitle: "Retirez vos fonds vers votre compte Cash App.",
        withdraw_cashapp_tag: "Cashtag Cash App",
        withdraw_cashapp_amount: "Montant",
        withdraw_cashapp_submit: "Envoyer le retrait"

    };


    /* =====================================================
       GERMAN
       ===================================================== */

    translations.de = {

        ...translations.en,

        nav_home: "Startseite",
        nav_platform: "Plattform",
        nav_about: "Über uns",
        nav_login: "Anmelden",
        nav_register: "Konto erstellen",

        hero_eyebrow: "Digitale Investmentplattform",
        hero_title: "Bringen Sie Ihre digitalen Vermögenswerte",
        hero_title_accent: "voran.",
        hero_create: "Konto erstellen",
        hero_explore: "Plattform entdecken",

        register_eyebrow: "Neues Mitglied",
        register_title: "Erstellen Sie Ihr Konto.",
        register_subtitle: "Richten Sie Ihr Space-X-Konto ein und greifen Sie auf Ihr persönliches Investment-Dashboard zu.",
        register_email_label: "E-MAIL-ADRESSE",
        register_email_placeholder: "E-Mail-Adresse eingeben",
        register_username_label: "BENUTZERNAME",
        register_username_placeholder: "Benutzernamen auswählen",
        register_password_label: "PASSWORT",
        register_password_placeholder: "Passwort erstellen",
        register_confirm_password_label: "PASSWORT BESTÄTIGEN",
        register_confirm_password_placeholder: "Passwort bestätigen",
        register_show: "Anzeigen",
        register_hide: "Ausblenden",
        register_button: "Konto erstellen",
        register_existing: "Sie haben bereits ein Konto?",
        register_signin: "Anmelden",

        login_eyebrow: "Mitgliederzugang",
        login_title: "Willkommen zurück.",
        login_subtitle: "Melden Sie sich an, um mit Ihrem Space-X-Konto fortzufahren.",
        login_email_label: "E-MAIL-ADRESSE",
        login_email_placeholder: "E-Mail-Adresse eingeben",
        login_password_label: "PASSWORT",
        login_password_placeholder: "Passwort eingeben",
        login_show: "Anzeigen",
        login_hide: "Ausblenden",
        login_button: "Anmelden",
        login_new_user: "Neu bei Space X?",
        login_create_account: "Konto erstellen",

        dashboard_title: "Dashboard",
        dashboard_welcome: "Willkommen zurück",
        dashboard_balance: "Verfügbares Guthaben",
        dashboard_total_referrals: "Gesamte Empfehlungen",
        dashboard_referral_bonus: "Empfehlungsbonus",
        dashboard_total_investment: "Gesamtinvestition",
        dashboard_active_plan: "Aktiver Plan",
        dashboard_activate: "Aktivieren",
        dashboard_activated: "Aktiviert",
        dashboard_withdraw: "Auszahlen",
        dashboard_deposit: "Einzahlen",
        dashboard_invest: "Investieren",
        dashboard_wallet: "Wallet",
        dashboard_history: "Verlauf",
        dashboard_support: "Support",

        deposit_title: "Einzahlung",
        deposit_subtitle: "Fügen Sie Ihrem Space-X-Konto Geld hinzu.",
        deposit_amount: "Einzahlungsbetrag",
        deposit_method: "Zahlungsmethode",
        deposit_bank: "Banküberweisung",
        deposit_crypto: "Krypto",
        deposit_gift_card: "Geschenkkarte",
        deposit_continue: "Weiter",
        deposit_submit: "Einzahlung senden",

        invest_title: "Investition",
        invest_subtitle: "Wählen Sie eine Investmentoption.",
        invest_amount: "Investitionsbetrag",
        invest_plan: "Investmentplan",
        invest_duration: "Laufzeit",
        invest_return: "Erwartete Rendite",
        invest_start: "Investition starten",

        withdraw_title: "Auszahlung",
        withdraw_subtitle: "Geld von Ihrem Space-X-Konto auszahlen.",
        withdraw_method: "Auszahlungsmethode",
        withdraw_bank: "Banküberweisung",
        withdraw_crypto: "Krypto",
        withdraw_paypal: "PayPal",
        withdraw_cashapp: "Cash App",
        withdraw_amount: "Auszahlungsbetrag",
        withdraw_available: "Verfügbares Guthaben",
        withdraw_submit: "Auszahlung senden",
        withdraw_confirm: "Auszahlung bestätigen",

        wallet_title: "Wallet",
        wallet_balance: "Wallet-Guthaben",
        wallet_available: "Verfügbares Guthaben",
        wallet_deposit: "Einzahlung",
        wallet_withdraw: "Auszahlung",
        wallet_transactions: "Transaktionen",

        history_title: "Verlauf",
        history_all: "Alle",
        history_deposits: "Einzahlungen",
        history_withdrawals: "Auszahlungen",
        history_investments: "Investitionen",
        history_referrals: "Empfehlungen",
        history_no_activity: "Keine Aktivitäten gefunden.",

        support_title: "Support",
        support_subtitle: "Wie können wir Ihnen helfen?",
        support_contact: "Support kontaktieren",
        support_message: "Nachricht",
        support_send: "Nachricht senden",
        support_faq: "Häufig gestellte Fragen",

        bank_transfer_title: "Banküberweisung",
        bank_transfer_account_name: "Kontoname",
        bank_transfer_account_number: "Kontonummer",
        bank_transfer_bank_name: "Bankname",
        bank_transfer_amount: "Betrag",
        bank_transfer_submit: "Überweisung senden",

        crypto_title: "Krypto",
        crypto_subtitle: "Mit Kryptowährung einzahlen.",
        crypto_network: "Netzwerk",
        crypto_address: "Wallet-Adresse",
        crypto_amount: "Betrag",
        crypto_copy_address: "Adresse kopieren",
        crypto_submit: "Transaktion senden",

        giftcard_title: "Geschenkkarte",
        giftcard_subtitle: "Mit einer Geschenkkarte einzahlen.",
        giftcard_type: "Geschenkkartentyp",
        giftcard_code: "Geschenkkartencode",
        giftcard_amount: "Geschenkkartenbetrag",
        giftcard_submit: "Geschenkkarte senden",

        withdraw_crypto_title: "Krypto-Auszahlung",
        withdraw_crypto_subtitle: "Senden Sie Ihr Geld an eine Krypto-Wallet.",
        withdraw_crypto_network: "Netzwerk",
        withdraw_crypto_address: "Wallet-Adresse",
        withdraw_crypto_amount: "Betrag",
        withdraw_crypto_submit: "Auszahlung senden",

        withdraw_paypal_title: "PayPal-Auszahlung",
        withdraw_paypal_subtitle: "Zahlen Sie Geld auf Ihr PayPal-Konto aus.",
        withdraw_paypal_email: "PayPal-E-Mail",
        withdraw_paypal_amount: "Betrag",
        withdraw_paypal_submit: "Auszahlung senden",

        withdraw_cashapp_title: "Cash-App-Auszahlung",
        withdraw_cashapp_subtitle: "Zahlen Sie Geld auf Ihr Cash-App-Konto aus.",
        withdraw_cashapp_tag: "Cash-App-$Cashtag",
        withdraw_cashapp_amount: "Betrag",
        withdraw_cashapp_submit: "Auszahlung senden"

    };


    /* =====================================================
       PORTUGUESE
       ===================================================== */

    translations.pt = {

        ...translations.en,

        nav_home: "Início",
        nav_platform: "Plataforma",
        nav_about: "Sobre",
        nav_login: "Entrar",
        nav_register: "Criar conta",

        hero_eyebrow: "Plataforma de investimento digital",
        hero_title: "Leve seus ativos digitais",
        hero_title_accent: "adiante.",
        hero_create: "Criar conta",
        hero_explore: "Explorar plataforma",

        register_eyebrow: "Novo membro",
        register_title: "Crie sua conta.",
        register_subtitle: "Configure sua conta Space X e acesse seu painel pessoal de investimentos.",
        register_email_label: "ENDEREÇO DE E-MAIL",
        register_email_placeholder: "Digite seu e-mail",
        register_username_label: "NOME DE USUÁRIO",
        register_username_placeholder: "Escolha um nome de usuário",
        register_password_label: "SENHA",
        register_password_placeholder: "Crie uma senha",
        register_confirm_password_label: "CONFIRMAR SENHA",
        register_confirm_password_placeholder: "Confirme sua senha",
        register_show: "Mostrar",
        register_hide: "Ocultar",
        register_button: "Criar conta",
        register_existing: "Já possui uma conta?",
        register_signin: "Entrar",

        login_eyebrow: "Acesso de membro",
        login_title: "Bem-vindo de volta.",
        login_subtitle: "Entre para continuar na sua conta Space X.",
        login_email_label: "ENDEREÇO DE E-MAIL",
        login_email_placeholder: "Digite seu e-mail",
        login_password_label: "SENHA",
        login_password_placeholder: "Digite sua senha",
        login_show: "Mostrar",
        login_hide: "Ocultar",
        login_button: "Entrar",
        login_new_user: "Novo na Space X?",
        login_create_account: "Criar uma conta",

        dashboard_title: "Painel",
        dashboard_welcome: "Bem-vindo de volta",
        dashboard_balance: "Saldo disponível",
        dashboard_total_referrals: "Total de indicações",
        dashboard_referral_bonus: "Bônus de indicação",
        dashboard_total_investment: "Investimento total",
        dashboard_active_plan: "Plano ativo",
        dashboard_activate: "Ativar",
        dashboard_activated: "Ativado",
        dashboard_withdraw: "Sacar",
        dashboard_deposit: "Depositar",
        dashboard_invest: "Investir",
        dashboard_wallet: "Carteira",
        dashboard_history: "Histórico",
        dashboard_support: "Suporte",

        deposit_title: "Depósito",
        deposit_subtitle: "Adicione fundos à sua conta Space X.",
        deposit_amount: "Valor do depósito",
        deposit_method: "Método de pagamento",
        deposit_bank: "Transferência bancária",
        deposit_crypto: "Cripto",
        deposit_gift_card: "Cartão-presente",
        deposit_continue: "Continuar",
        deposit_submit: "Enviar depósito",

        invest_title: "Investimento",
        invest_subtitle: "Escolha uma opção de investimento.",
        invest_amount: "Valor do investimento",
        invest_plan: "Plano de investimento",
        invest_duration: "Duração",
        invest_return: "Retorno esperado",
        invest_start: "Iniciar investimento",

        withdraw_title: "Saque",
        withdraw_subtitle: "Saque fundos da sua conta Space X.",
        withdraw_method: "Método de saque",
        withdraw_bank: "Transferência bancária",
        withdraw_crypto: "Cripto",
        withdraw_paypal: "PayPal",
        withdraw_cashapp: "Cash App",
        withdraw_amount: "Valor do saque",
        withdraw_available: "Saldo disponível",
        withdraw_submit: "Enviar saque",
        withdraw_confirm: "Confirmar saque",

        wallet_title: "Carteira",
        wallet_balance: "Saldo da carteira",
        wallet_available: "Saldo disponível",
        wallet_deposit: "Depósito",
        wallet_withdraw: "Saque",
        wallet_transactions: "Transações",

        history_title: "Histórico",
        history_all: "Todos",
        history_deposits: "Depósitos",
        history_withdrawals: "Saques",
        history_investments: "Investimentos",
        history_referrals: "Indicações",
        history_no_activity: "Nenhuma atividade encontrada.",

        support_title: "Suporte",
        support_subtitle: "Como podemos ajudar?",
        support_contact: "Contatar suporte",
        support_message: "Mensagem",
        support_send: "Enviar mensagem",
        support_faq: "Perguntas frequentes",

        bank_transfer_title: "Transferência bancária",
        bank_transfer_account_name: "Nome da conta",
        bank_transfer_account_number: "Número da conta",
        bank_transfer_bank_name: "Nome do banco",
        bank_transfer_amount: "Valor",
        bank_transfer_submit: "Enviar transferência",

        crypto_title: "Cripto",
        crypto_subtitle: "Deposite usando criptomoedas.",
        crypto_network: "Rede",
        crypto_address: "Endereço da carteira",
        crypto_amount: "Valor",
        crypto_copy_address: "Copiar endereço",
        crypto_submit: "Enviar transação",

        giftcard_title: "Cartão-presente",
        giftcard_subtitle: "Deposite usando um cartão-presente.",
        giftcard_type: "Tipo de cartão",
        giftcard_code: "Código do cartão",
        giftcard_amount: "Valor do cartão",
        giftcard_submit: "Enviar cartão",

        withdraw_crypto_title: "Saque de cripto",
        withdraw_crypto_subtitle: "Envie seus fundos para uma carteira de criptomoedas.",
        withdraw_crypto_network: "Rede",
        withdraw_crypto_address: "Endereço da carteira",
        withdraw_crypto_amount: "Valor",
        withdraw_crypto_submit: "Enviar saque",

        withdraw_paypal_title: "Saque via PayPal",
        withdraw_paypal_subtitle: "Saque seus fundos para sua conta PayPal.",
        withdraw_paypal_email: "E-mail do PayPal",
        withdraw_paypal_amount: "Valor",
        withdraw_paypal_submit: "Enviar saque",

        withdraw_cashapp_title: "Saque via Cash App",
        withdraw_cashapp_subtitle: "Saque seus fundos para sua conta Cash App.",
        withdraw_cashapp_tag: "Cashtag do Cash App",
        withdraw_cashapp_amount: "Valor",
        withdraw_cashapp_submit: "Enviar saque"

    };


    /* =====================================================
       ITALIAN
       ===================================================== */

    translations.it = {

        ...translations.en,

        nav_home: "Home",
        nav_platform: "Piattaforma",
        nav_about: "Chi siamo",
        nav_login: "Accedi",
        nav_register: "Crea account",

        hero_eyebrow: "Piattaforma di investimento digitale",
        hero_title: "Porta avanti i tuoi asset digitali",
        hero_title_accent: "verso il futuro.",
        hero_create: "Crea account",
        hero_explore: "Esplora la piattaforma",

        register_eyebrow: "Nuovo membro",
        register_title: "Crea il tuo account.",
        register_subtitle: "Configura il tuo account Space X e accedi alla tua dashboard personale.",
        register_email_label: "INDIRIZZO E-MAIL",
        register_email_placeholder: "Inserisci la tua e-mail",
        register_username_label: "NOME UTENTE",
        register_username_placeholder: "Scegli un nome utente",
        register_password_label: "PASSWORD",
        register_password_placeholder: "Crea una password",
        register_confirm_password_label: "CONFERMA PASSWORD",
        register_confirm_password_placeholder: "Conferma la password",
        register_show: "Mostra",
        register_hide: "Nascondi",
        register_button: "Crea account",
        register_existing: "Hai già un account?",
        register_signin: "Accedi",

        login_eyebrow: "Accesso membri",
        login_title: "Bentornato.",
        login_subtitle: "Accedi per continuare al tuo account Space X.",
        login_email_label: "INDIRIZZO E-MAIL",
        login_email_placeholder: "Inserisci la tua e-mail",
        login_password_label: "PASSWORD",
        login_password_placeholder: "Inserisci la password",
        login_show: "Mostra",
        login_hide: "Nascondi",
        login_button: "Accedi",
        login_new_user: "Nuovo su Space X?",
        login_create_account: "Crea un account",

        dashboard_title: "Dashboard",
        dashboard_welcome: "Bentornato",
        dashboard_balance: "Saldo disponibile",
        dashboard_total_referrals: "Referral totali",
        dashboard_referral_bonus: "Bonus referral",
        dashboard_total_investment: "Investimento totale",
        dashboard_active_plan: "Piano attivo",
        dashboard_activate: "Attiva",
        dashboard_activated: "Attivato",
        dashboard_withdraw: "Preleva",
        dashboard_deposit: "Deposita",
        dashboard_invest: "Investi",
        dashboard_wallet: "Portafoglio",
        dashboard_history: "Cronologia",
        dashboard_support: "Supporto",

        deposit_title: "Deposito",
        deposit_subtitle: "Aggiungi fondi al tuo account Space X.",
        deposit_amount: "Importo del deposito",
        deposit_method: "Metodo di pagamento",
        deposit_bank: "Bonifico bancario",
        deposit_crypto: "Crypto",
        deposit_gift_card: "Carta regalo",
        deposit_continue: "Continua",
        deposit_submit: "Invia deposito",

        invest_title: "Investimento",
        invest_subtitle: "Scegli un'opzione di investimento.",
        invest_amount: "Importo dell'investimento",
        invest_plan: "Piano di investimento",
        invest_duration: "Durata",
        invest_return: "Rendimento previsto",
        invest_start: "Avvia investimento",

        withdraw_title: "Prelievo",
        withdraw_subtitle: "Preleva fondi dal tuo account Space X.",
        withdraw_method: "Metodo di prelievo",
        withdraw_bank: "Bonifico bancario",
        withdraw_crypto: "Crypto",
        withdraw_paypal: "PayPal",
        withdraw_cashapp: "Cash App",
        withdraw_amount: "Importo del prelievo",
        withdraw_available: "Saldo disponibile",
        withdraw_submit: "Invia prelievo",
        withdraw_confirm: "Conferma prelievo",

        wallet_title: "Portafoglio",
        wallet_balance: "Saldo portafoglio",
        wallet_available: "Saldo disponibile",
        wallet_deposit: "Deposito",
        wallet_withdraw: "Prelievo",
        wallet_transactions: "Transazioni",

        history_title: "Cronologia",
        history_all: "Tutto",
        history_deposits: "Depositi",
        history_withdrawals: "Prelievi",
        history_investments: "Investimenti",
        history_referrals: "Referral",
        history_no_activity: "Nessuna attività trovata.",

        support_title: "Supporto",
        support_subtitle: "Come possiamo aiutarti?",
        support_contact: "Contatta il supporto",
        support_message: "Messaggio",
        support_send: "Invia messaggio",
        support_faq: "Domande frequenti",

        bank_transfer_title: "Bonifico bancario",
        bank_transfer_account_name: "Nome conto",
        bank_transfer_account_number: "Numero conto",
        bank_transfer_bank_name: "Nome banca",
        bank_transfer_amount: "Importo",
        bank_transfer_submit: "Invia bonifico",

        crypto_title: "Crypto",
        crypto_subtitle: "Deposita usando criptovalute.",
        crypto_network: "Rete",
        crypto_address: "Indirizzo wallet",
        crypto_amount: "Importo",
        crypto_copy_address: "Copia indirizzo",
        crypto_submit: "Invia transazione",

        giftcard_title: "Carta regalo",
        giftcard_subtitle: "Deposita usando una carta regalo.",
        giftcard_type: "Tipo di carta",
        giftcard_code: "Codice carta",
        giftcard_amount: "Importo carta",
        giftcard_submit: "Invia carta",

        withdraw_crypto_title: "Prelievo crypto",
        withdraw_crypto_subtitle: "Invia i fondi a un wallet di criptovalute.",
        withdraw_crypto_network: "Rete",
        withdraw_crypto_address: "Indirizzo wallet",
        withdraw_crypto_amount: "Importo",
        withdraw_crypto_submit: "Invia prelievo",

        withdraw_paypal_title: "Prelievo PayPal",
        withdraw_paypal_subtitle: "Preleva i fondi sul tuo account PayPal.",
        withdraw_paypal_email: "E-mail PayPal",
        withdraw_paypal_amount: "Importo",
        withdraw_paypal_submit: "Invia prelievo",

        withdraw_cashapp_title: "Prelievo Cash App",
        withdraw_cashapp_subtitle: "Preleva i fondi sul tuo account Cash App.",
        withdraw_cashapp_tag: "Cashtag Cash App",
        withdraw_cashapp_amount: "Importo",
        withdraw_cashapp_submit: "Invia prelievo"

    };


    /* =====================================================
       OTHER LANGUAGES
       =====================================================
       These inherit the complete English key set.
       Their common/page labels are translated below.
       ===================================================== */

    translations.nl = {
        ...translations.en,
        nav_home:"Home",
        nav_platform:"Platform",
        nav_about:"Over ons",
        nav_login:"Inloggen",
        nav_register:"Account aanmaken",
        register_title:"Maak uw account aan.",
        register_button:"Account aanmaken",
        register_signin:"Inloggen",
        login_title:"Welkom terug.",
        login_button:"Inloggen",
        login_create_account:"Een account aanmaken",
        dashboard_title:"Dashboard",
        dashboard_balance:"Beschikbaar saldo",
        dashboard_deposit:"Storten",
        dashboard_withdraw:"Opnemen",
        dashboard_invest:"Investeren",
        dashboard_wallet:"Wallet",
        dashboard_history:"Geschiedenis",
        dashboard_support:"Support",
        deposit_title:"Storten",
        invest_title:"Investering",
        withdraw_title:"Opnemen",
        wallet_title:"Wallet",
        history_title:"Geschiedenis",
        support_title:"Support",
        bank_transfer_title:"Bankoverschrijving",
        crypto_title:"Crypto",
        giftcard_title:"Cadeaukaart",
        withdraw_crypto_title:"Crypto opnemen",
        withdraw_paypal_title:"Opnemen via PayPal",
        withdraw_cashapp_title:"Opnemen via Cash App"
    };


    translations.tr = {
        ...translations.en,
        nav_home:"Ana Sayfa",
        nav_platform:"Platform",
        nav_about:"Hakkımızda",
        nav_login:"Giriş",
        nav_register:"Hesap Oluştur",
        register_title:"Hesabınızı oluşturun.",
        register_button:"Hesap Oluştur",
        register_signin:"Giriş yap",
        login_title:"Tekrar hoş geldiniz.",
        login_button:"Giriş Yap",
        login_create_account:"Hesap oluştur",
        dashboard_title:"Panel",
        dashboard_balance:"Kullanılabilir Bakiye",
        dashboard_deposit:"Para Yatır",
        dashboard_withdraw:"Para Çek",
        dashboard_invest:"Yatırım Yap",
        dashboard_wallet:"Cüzdan",
        dashboard_history:"Geçmiş",
        dashboard_support:"Destek",
        deposit_title:"Para Yatır",
        invest_title:"Yatırım",
        withdraw_title:"Para Çek",
        wallet_title:"Cüzdan",
        history_title:"Geçmiş",
        support_title:"Destek",
        bank_transfer_title:"Banka Transferi",
        crypto_title:"Kripto",
        giftcard_title:"Hediye Kartı",
        withdraw_crypto_title:"Kripto Çekimi",
        withdraw_paypal_title:"PayPal ile Para Çek",
        withdraw_cashapp_title:"Cash App ile Para Çek"
    };


    translations.ru = {
        ...translations.en,
        nav_home:"Главная",
        nav_platform:"Платформа",
        nav_about:"О нас",
        nav_login:"Войти",
        nav_register:"Создать аккаунт",
        register_title:"Создайте аккаунт.",
        register_button:"Создать аккаунт",
        register_signin:"Войти",
        login_title:"С возвращением.",
        login_button:"Войти",
        login_create_account:"Создать аккаунт",
        dashboard_title:"Панель управления",
        dashboard_balance:"Доступный баланс",
        dashboard_deposit:"Пополнить",
        dashboard_withdraw:"Вывести",
        dashboard_invest:"Инвестировать",
        dashboard_wallet:"Кошелёк",
        dashboard_history:"История",
        dashboard_support:"Поддержка",
        deposit_title:"Пополнение",
        invest_title:"Инвестиции",
        withdraw_title:"Вывод",
        wallet_title:"Кошелёк",
        history_title:"История",
        support_title:"Поддержка",
        bank_transfer_title:"Банковский перевод",
        crypto_title:"Крипто",
        giftcard_title:"Подарочная карта",
        withdraw_crypto_title:"Вывод крипто",
        withdraw_paypal_title:"Вывод через PayPal",
        withdraw_cashapp_title:"Вывод через Cash App"
    };


    translations.uk = {
        ...translations.en,
        nav_home:"Головна",
        nav_platform:"Платформа",
        nav_about:"Про нас",
        nav_login:"Увійти",
        nav_register:"Створити акаунт",
        register_title:"Створіть свій акаунт.",
        register_button:"Створити акаунт",
        register_signin:"Увійти",
        login_title:"З поверненням.",
        login_button:"Увійти",
        login_create_account:"Створити акаунт",
        dashboard_title:"Панель",
        dashboard_balance:"Доступний баланс",
        dashboard_deposit:"Поповнити",
        dashboard_withdraw:"Вивести",
        dashboard_invest:"Інвестувати",
        dashboard_wallet:"Гаманець",
        dashboard_history:"Історія",
        dashboard_support:"Підтримка",
        deposit_title:"Поповнення",
        invest_title:"Інвестиції",
        withdraw_title:"Виведення",
        wallet_title:"Гаманець",
        history_title:"Історія",
        support_title:"Підтримка",
        bank_transfer_title:"Банківський переказ",
        crypto_title:"Крипто",
        giftcard_title:"Подарункова картка",
        withdraw_crypto_title:"Виведення крипто",
        withdraw_paypal_title:"Виведення через PayPal",
        withdraw_cashapp_title:"Виведення через Cash App"
    };


    translations.pl = {
        ...translations.en,
        nav_home:"Strona główna",
        nav_platform:"Platforma",
        nav_about:"O nas",
        nav_login:"Zaloguj się",
        nav_register:"Utwórz konto",
        register_title:"Utwórz swoje konto.",
        register_button:"Utwórz konto",
        register_signin:"Zaloguj się",
        login_title:"Witaj ponownie.",
        login_button:"Zaloguj się",
        login_create_account:"Utwórz konto",
        dashboard_title:"Panel",
        dashboard_balance:"Dostępne saldo",
        dashboard_deposit:"Wpłać",
        dashboard_withdraw:"Wypłać",
        dashboard_invest:"Inwestuj",
        dashboard_wallet:"Portfel",
        dashboard_history:"Historia",
        dashboard_support:"Wsparcie",
        deposit_title:"Wpłata",
        invest_title:"Inwestycja",
        withdraw_title:"Wypłata",
        wallet_title:"Portfel",
        history_title:"Historia",
        support_title:"Wsparcie",
        bank_transfer_title:"Przelew bankowy",
        crypto_title:"Krypto",
        giftcard_title:"Karta podarunkowa",
        withdraw_crypto_title:"Wypłata kryptowalut",
        withdraw_paypal_title:"Wypłata przez PayPal",
        withdraw_cashapp_title:"Wypłata przez Cash App"
    };


    translations.ar = {
        ...translations.en,
        nav_home:"الرئيسية",
        nav_platform:"المنصة",
        nav_about:"من نحن",
        nav_login:"تسجيل الدخول",
        nav_register:"إنشاء حساب",
        register_eyebrow:"عضو جديد",
        register_title:"أنشئ حسابك.",
        register_subtitle:"أنشئ حساب Space X الخاص بك وادخل إلى لوحة الاستثمار الشخصية.",
        register_email_label:"البريد الإلكتروني",
        register_email_placeholder:"أدخل بريدك الإلكتروني",
        register_username_label:"اسم المستخدم",
        register_username_placeholder:"اختر اسم مستخدم",
        register_password_label:"كلمة المرور",
        register_password_placeholder:"أنشئ كلمة مرور",
        register_confirm_password_label:"تأكيد كلمة المرور",
        register_confirm_password_placeholder:"أكد كلمة المرور",
        register_show:"إظهار",
        register_hide:"إخفاء",
        register_button:"إنشاء حساب",
        register_existing:"لديك حساب بالفعل؟",
        register_signin:"تسجيل الدخول",
        login_eyebrow:"دخول الأعضاء",
        login_title:"مرحباً بعودتك.",
        login_subtitle:"سجل الدخول للمتابعة إلى حساب Space X الخاص بك.",
        login_email_label:"البريد الإلكتروني",
        login_email_placeholder:"أدخل بريدك الإلكتروني",
        login_password_label:"كلمة المرور",
        login_password_placeholder:"أدخل كلمة المرور",
        login_show:"إظهار",
        login_hide:"إخفاء",
        login_button:"تسجيل الدخول",
        login_new_user:"جديد في Space X؟",
        login_create_account:"إنشاء حساب",
        dashboard_title:"لوحة التحكم",
        dashboard_balance:"الرصيد المتاح",
        dashboard_deposit:"إيداع",
        dashboard_withdraw:"سحب",
        dashboard_invest:"استثمار",
        dashboard_wallet:"المحفظة",
        dashboard_history:"السجل",
        dashboard_support:"الدعم",
        deposit_title:"إيداع",
        invest_title:"استثمار",
        withdraw_title:"سحب",
        wallet_title:"المحفظة",
        history_title:"السجل",
        support_title:"الدعم",
        bank_transfer_title:"تحويل بنكي",
        crypto_title:"العملات الرقمية",
        giftcard_title:"بطاقة هدية",
        withdraw_crypto_title:"سحب العملات الرقمية",
        withdraw_paypal_title:"السحب عبر PayPal",
        withdraw_cashapp_title:"السحب عبر Cash App"
    };


    translations.hi = {
        ...translations.en,
        nav_home:"होम",
        nav_platform:"प्लेटफ़ॉर्म",
        nav_about:"हमारे बारे में",
        nav_login:"लॉगिन",
        nav_register:"खाता बनाएँ",
        register_title:"अपना खाता बनाएँ।",
        register_button:"खाता बनाएँ",
        register_signin:"लॉगिन",
        login_title:"वापसी पर स्वागत है।",
        login_button:"लॉगिन",
        login_create_account:"खाता बनाएँ",
        dashboard_title:"डैशबोर्ड",
        dashboard_balance:"उपलब्ध बैलेंस",
        dashboard_deposit:"जमा करें",
        dashboard_withdraw:"निकासी",
        dashboard_invest:"निवेश करें",
        dashboard_wallet:"वॉलेट",
        dashboard_history:"इतिहास",
        dashboard_support:"सहायता",
        deposit_title:"जमा",
        invest_title:"निवेश",
        withdraw_title:"निकासी",
        wallet_title:"वॉलेट",
        history_title:"इतिहास",
        support_title:"सहायता",
        bank_transfer_title:"बैंक ट्रांसफर",
        crypto_title:"क्रिप्टो",
        giftcard_title:"गिफ्ट कार्ड",
        withdraw_crypto_title:"क्रिप्टो निकासी",
        withdraw_paypal_title:"PayPal निकासी",
        withdraw_cashapp_title:"Cash App निकासी"
    };


    translations.bn = {
        ...translations.en,
        nav_home:"হোম",
        nav_platform:"প্ল্যাটফর্ম",
        nav_about:"আমাদের সম্পর্কে",
        nav_login:"লগইন",
        nav_register:"অ্যাকাউন্ট তৈরি করুন",
        register_title:"আপনার অ্যাকাউন্ট তৈরি করুন।",
        register_button:"অ্যাকাউন্ট তৈরি করুন",
        register_signin:"লগইন",
        login_title:"আবার স্বাগতম।",
        login_button:"লগইন",
        login_create_account:"অ্যাকাউন্ট তৈরি করুন",
        dashboard_title:"ড্যাশবোর্ড",
        dashboard_balance:"উপলব্ধ ব্যালেন্স",
        dashboard_deposit:"ডিপোজিট",
        dashboard_withdraw:"উত্তোলন",
        dashboard_invest:"বিনিয়োগ",
        dashboard_wallet:"ওয়ালেট",
        dashboard_history:"ইতিহাস",
        dashboard_support:"সাপোর্ট",
        deposit_title:"ডিপোজিট",
        invest_title:"বিনিয়োগ",
        withdraw_title:"উত্তোলন",
        wallet_title:"ওয়ালেট",
        history_title:"ইতিহাস",
        support_title:"সাপোর্ট",
        bank_transfer_title:"ব্যাংক ট্রান্সফার",
        crypto_title:"ক্রিপ্টো",
        giftcard_title:"গিফট কার্ড",
        withdraw_crypto_title:"ক্রিপ্টো উত্তোলন",
        withdraw_paypal_title:"PayPal উত্তোলন",
        withdraw_cashapp_title:"Cash App উত্তোলন"
    };


    translations["zh-CN"] = {
        ...translations.en,
        nav_home:"首页",
        nav_platform:"平台",
        nav_about:"关于我们",
        nav_login:"登录",
        nav_register:"创建账户",
        register_title:"创建您的账户。",
        register_button:"创建账户",
        register_signin:"登录",
        login_title:"欢迎回来。",
        login_button:"登录",
        login_create_account:"创建账户",
        dashboard_title:"仪表板",
        dashboard_balance:"可用余额",
        dashboard_deposit:"充值",
        dashboard_withdraw:"提现",
        dashboard_invest:"投资",
        dashboard_wallet:"钱包",
        dashboard_history:"历史记录",
        dashboard_support:"客服",
        deposit_title:"充值",
        invest_title:"投资",
        withdraw_title:"提现",
        wallet_title:"钱包",
        history_title:"历史记录",
        support_title:"客服",
        bank_transfer_title:"银行转账",
        crypto_title:"加密货币",
        giftcard_title:"礼品卡",
        withdraw_crypto_title:"加密货币提现",
        withdraw_paypal_title:"PayPal 提现",
        withdraw_cashapp_title:"Cash App 提现"
    };


    translations["zh-TW"] = {
        ...translations.en,
        nav_home:"首頁",
        nav_platform:"平台",
        nav_about:"關於我們",
        nav_login:"登入",
        nav_register:"建立帳戶",
        register_title:"建立您的帳戶。",
        register_button:"建立帳戶",
        register_signin:"登入",
        login_title:"歡迎回來。",
        login_button:"登入",
        login_create_account:"建立帳戶",
        dashboard_title:"儀表板",
        dashboard_balance:"可用餘額",
        dashboard_deposit:"存款",
        dashboard_withdraw:"提款",
        dashboard_invest:"投資",
        dashboard_wallet:"錢包",
        dashboard_history:"歷史記錄",
        dashboard_support:"支援",
        deposit_title:"存款",
        invest_title:"投資",
        withdraw_title:"提款",
        wallet_title:"錢包",
        history_title:"歷史記錄",
        support_title:"支援",
        bank_transfer_title:"銀行轉帳",
        crypto_title:"加密貨幣",
        giftcard_title:"禮品卡",
        withdraw_crypto_title:"加密貨幣提款",
        withdraw_paypal_title:"PayPal 提款",
        withdraw_cashapp_title:"Cash App 提款"
    };


    translations.ja = {
        ...translations.en,
        nav_home:"ホーム",
        nav_platform:"プラットフォーム",
        nav_about:"概要",
        nav_login:"ログイン",
        nav_register:"アカウント作成",
        register_title:"アカウントを作成してください。",
        register_button:"アカウントを作成",
        register_signin:"ログイン",
        login_title:"おかえりなさい。",
        login_button:"ログイン",
        login_create_account:"アカウントを作成",
        dashboard_title:"ダッシュボード",
        dashboard_balance:"利用可能残高",
        dashboard_deposit:"入金",
        dashboard_withdraw:"出金",
        dashboard_invest:"投資",
        dashboard_wallet:"ウォレット",
        dashboard_history:"履歴",
        dashboard_support:"サポート",
        deposit_title:"入金",
        invest_title:"投資",
        withdraw_title:"出金",
        wallet_title:"ウォレット",
        history_title:"履歴",
        support_title:"サポート",
        bank_transfer_title:"銀行振込",
        crypto_title:"暗号資産",
        giftcard_title:"ギフトカード",
        withdraw_crypto_title:"暗号資産の出金",
        withdraw_paypal_title:"PayPal出金",
        withdraw_cashapp_title:"Cash App出金"
    };


    translations.ko = {
        ...translations.en,
        nav_home:"홈",
        nav_platform:"플랫폼",
        nav_about:"소개",
        nav_login:"로그인",
        nav_register:"계정 만들기",
        register_title:"계정을 만들어 보세요.",
        register_button:"계정 만들기",
        register_signin:"로그인",
        login_title:"다시 오신 것을 환영합니다.",
        login_button:"로그인",
        login_create_account:"계정 만들기",
        dashboard_title:"대시보드",
        dashboard_balance:"사용 가능한 잔액",
        dashboard_deposit:"입금",
        dashboard_withdraw:"출금",
        dashboard_invest:"투자",
        dashboard_wallet:"지갑",
        dashboard_history:"기록",
        dashboard_support:"지원",
        deposit_title:"입금",
        invest_title:"투자",
        withdraw_title:"출금",
        wallet_title:"지갑",
        history_title:"기록",
        support_title:"지원",
        bank_transfer_title:"은행 송금",
        crypto_title:"암호화폐",
        giftcard_title:"기프트 카드",
        withdraw_crypto_title:"암호화폐 출금",
        withdraw_paypal_title:"PayPal 출금",
        withdraw_cashapp_title:"Cash App 출금"
    };


    translations.vi = {
        ...translations.en,
        nav_home:"Trang chủ",
        nav_platform:"Nền tảng",
        nav_about:"Giới thiệu",
        nav_login:"Đăng nhập",
        nav_register:"Tạo tài khoản",
        register_title:"Tạo tài khoản của bạn.",
        register_button:"Tạo tài khoản",
        register_signin:"Đăng nhập",
        login_title:"Chào mừng bạn trở lại.",
        login_button:"Đăng nhập",
        login_create_account:"Tạo tài khoản",
        dashboard_title:"Bảng điều khiển",
        dashboard_balance:"Số dư khả dụng",
        dashboard_deposit:"Nạp tiền",
        dashboard_withdraw:"Rút tiền",
        dashboard_invest:"Đầu tư",
        dashboard_wallet:"Ví",
        dashboard_history:"Lịch sử",
        dashboard_support:"Hỗ trợ",
        deposit_title:"Nạp tiền",
        invest_title:"Đầu tư",
        withdraw_title:"Rút tiền",
        wallet_title:"Ví",
        history_title:"Lịch sử",
        support_title:"Hỗ trợ",
        bank_transfer_title:"Chuyển khoản ngân hàng",
        crypto_title:"Tiền điện tử",
        giftcard_title:"Thẻ quà tặng",
        withdraw_crypto_title:"Rút tiền điện tử",
        withdraw_paypal_title:"Rút tiền PayPal",
        withdraw_cashapp_title:"Rút tiền Cash App"
    };


    translations.th = {
        ...translations.en,
        nav_home:"หน้าหลัก",
        nav_platform:"แพลตฟอร์ม",
        nav_about:"เกี่ยวกับเรา",
        nav_login:"เข้าสู่ระบบ",
        nav_register:"สร้างบัญชี",
        register_title:"สร้างบัญชีของคุณ",
        register_button:"สร้างบัญชี",
        register_signin:"เข้าสู่ระบบ",
        login_title:"ยินดีต้อนรับกลับ",
        login_button:"เข้าสู่ระบบ",
        login_create_account:"สร้างบัญชี",
        dashboard_title:"แดชบอร์ด",
        dashboard_balance:"ยอดคงเหลือที่ใช้ได้",
        dashboard_deposit:"ฝากเงิน",
        dashboard_withdraw:"ถอนเงิน",
        dashboard_invest:"ลงทุน",
        dashboard_wallet:"กระเป๋าเงิน",
        dashboard_history:"ประวัติ",
        dashboard_support:"ฝ่ายสนับสนุน",
        deposit_title:"ฝากเงิน",
        invest_title:"การลงทุน",
        withdraw_title:"ถอนเงิน",
        wallet_title:"กระเป๋าเงิน",
        history_title:"ประวัติ",
        support_title:"ฝ่ายสนับสนุน",
        bank_transfer_title:"โอนผ่านธนาคาร",
        crypto_title:"คริปโต",
        giftcard_title:"บัตรของขวัญ",
        withdraw_crypto_title:"ถอนคริปโต",
        withdraw_paypal_title:"ถอนผ่าน PayPal",
        withdraw_cashapp_title:"ถอนผ่าน Cash App"
    };


    translations.id = {
        ...translations.en,
        nav_home:"Beranda",
        nav_platform:"Platform",
        nav_about:"Tentang Kami",
        nav_login:"Masuk",
        nav_register:"Buat Akun",
        register_title:"Buat akun Anda.",
        register_button:"Buat Akun",
        register_signin:"Masuk",
        login_title:"Selamat datang kembali.",
        login_button:"Masuk",
        login_create_account:"Buat akun",
        dashboard_title:"Dasbor",
        dashboard_balance:"Saldo Tersedia",
        dashboard_deposit:"Deposit",
        dashboard_withdraw:"Tarik",
        dashboard_invest:"Investasi",
        dashboard_wallet:"Dompet",
        dashboard_history:"Riwayat",
        dashboard_support:"Dukungan",
        deposit_title:"Deposit",
        invest_title:"Investasi",
        withdraw_title:"Penarikan",
        wallet_title:"Dompet",
        history_title:"Riwayat",
        support_title:"Dukungan",
        bank_transfer_title:"Transfer Bank",
        crypto_title:"Kripto",
        giftcard_title:"Kartu Hadiah",
        withdraw_crypto_title:"Penarikan Kripto",
        withdraw_paypal_title:"Penarikan PayPal",
        withdraw_cashapp_title:"Penarikan Cash App"
    };


    translations.ms = {
        ...translations.en,
        nav_home:"Laman Utama",
        nav_platform:"Platform",
        nav_about:"Tentang Kami",
        nav_login:"Log Masuk",
        nav_register:"Cipta Akaun",
        register_title:"Cipta akaun anda.",
        register_button:"Cipta Akaun",
        register_signin:"Log Masuk",
        login_title:"Selamat kembali.",
        login_button:"Log Masuk",
        login_create_account:"Cipta akaun",
        dashboard_title:"Papan Pemuka",
        dashboard_balance:"Baki Tersedia",
        dashboard_deposit:"Deposit",
        dashboard_withdraw:"Pengeluaran",
        dashboard_invest:"Pelaburan",
        dashboard_wallet:"Dompet",
        dashboard_history:"Sejarah",
        dashboard_support:"Sokongan",
        deposit_title:"Deposit",
        invest_title:"Pelaburan",
        withdraw_title:"Pengeluaran",
        wallet_title:"Dompet",
        history_title:"Sejarah",
        support_title:"Sokongan",
        bank_transfer_title:"Pindahan Bank",
        crypto_title:"Kripto",
        giftcard_title:"Kad Hadiah",
        withdraw_crypto_title:"Pengeluaran Kripto",
        withdraw_paypal_title:"Pengeluaran PayPal",
        withdraw_cashapp_title:"Pengeluaran Cash App"
    };


    translations.fil = {
        ...translations.en,
        nav_home:"Home",
        nav_platform:"Platform",
        nav_about:"Tungkol sa Amin",
        nav_login:"Mag-login",
        nav_register:"Gumawa ng Account",
        register_title:"Gawin ang iyong account.",
        register_button:"Gumawa ng Account",
        register_signin:"Mag-login",
        login_title:"Maligayang pagbabalik.",
        login_button:"Mag-login",
        login_create_account:"Gumawa ng account",
        dashboard_title:"Dashboard",
        dashboard_balance:"Available na Balanse",
        dashboard_deposit:"Magdeposito",
        dashboard_withdraw:"Mag-withdraw",
        dashboard_invest:"Mamuhunan",
        dashboard_wallet:"Wallet",
        dashboard_history:"Kasaysayan",
        dashboard_support:"Suporta",
        deposit_title:"Deposit",
        invest_title:"Investment",
        withdraw_title:"Withdrawal",
        wallet_title:"Wallet",
        history_title:"Kasaysayan",
        support_title:"Suporta",
        bank_transfer_title:"Bank Transfer",
        crypto_title:"Crypto",
        giftcard_title:"Gift Card",
        withdraw_crypto_title:"Crypto Withdrawal",
        withdraw_paypal_title:"PayPal Withdrawal",
        withdraw_cashapp_title:"Cash App Withdrawal"
    };


    /* =====================================================
       MAKE SURE ALL 23 LANGUAGES EXIST
       ===================================================== */

    Object.keys(languageNames).forEach(language => {

        if (!translations[language]) {
            translations[language] = {
                ...translations.en
            };
        }

    });


    /* =====================================================
       GET SAVED LANGUAGE
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
       GET TRANSLATION
       ===================================================== */

    function getTranslation(language, key) {

        const selected =
            translations[language] ||
            translations.en;

        if (
            selected &&
            selected[key] !== undefined
        ) {
            return selected[key];
        }

        if (
            translations.en &&
            translations.en[key] !== undefined
        ) {
            return translations.en[key];
        }

        return null;
    }


    /* =====================================================
       TRANSLATE NORMAL TEXT
       ===================================================== */

    function translateTextElements(language) {

        document
            .querySelectorAll("[data-translate]")
            .forEach(element => {

                const key =
                    element.getAttribute(
                        "data-translate"
                    );

                if (!key) return;

                const value =
                    getTranslation(
                        language,
                        key
                    );

                if (value !== null) {

                    element.textContent =
                        value;

                }

            });

    }


    /* =====================================================
       TRANSLATE PLACEHOLDERS
       ===================================================== */

    function translatePlaceholders(language) {

        document
            .querySelectorAll(
                "[data-translate-placeholder]"
            )
            .forEach(element => {

                const key =
                    element.getAttribute(
                        "data-translate-placeholder"
                    );

                if (!key) return;

                const value =
                    getTranslation(
                        language,
                        key
                    );

                if (value !== null) {

                    element.placeholder =
                        value;

                }

            });

    }


    /* =====================================================
       TRANSLATE VALUE
       ===================================================== */

    function translateValues(language) {

        document
            .querySelectorAll(
                "[data-translate-value]"
            )
            .forEach(element => {

                const key =
                    element.getAttribute(
                        "data-translate-value"
                    );

                if (!key) return;

                const value =
                    getTranslation(
                        language,
                        key
                    );

                if (value !== null) {

                    element.value =
                        value;

                }

            });

    }


    /* =====================================================
       UPDATE LANGUAGE SELECTOR
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
            .querySelectorAll(
                ".language-option"
            )
            .forEach(option => {

                const optionLanguage =
                    option.dataset.value ||
                    option.getAttribute(
                        "data-language"
                    );

                option.classList.toggle(
                    "selected",
                    optionLanguage === language
                );

            });


        document
            .querySelectorAll(
                "[data-language]"
            )
            .forEach(option => {

                if (
                    option.classList.contains(
                        "language-option"
                    )
                ) return;

                option.classList.toggle(
                    "selected",
                    option.dataset.language === language
                );

            });

    }


    /* =====================================================
       RTL / LTR
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
       PAGE TITLE
       ===================================================== */

    function updateDocumentTitle(language) {

        const page =
            (
                document.body?.dataset.page ||
                ""
            ).toLowerCase();

        const selected =
            translations[language] ||
            translations.en;

        let title = "Space X";

        if (page === "register") {

            title =
                "Space X | " +
                (
                    selected.register_title ||
                    translations.en.register_title
                );

        } else if (page === "login") {

            title =
                "Space X | " +
                (
                    selected.login_title ||
                    translations.en.login_title
                );

        } else if (page === "dashboard") {

            title =
                "Space X | " +
                (
                    selected.dashboard_title ||
                    translations.en.dashboard_title
                );

        } else if (page === "deposit") {

            title =
                "Space X | " +
                (
                    selected.deposit_title ||
                    translations.en.deposit_title
                );

        } else if (page === "invest") {

            title =
                "Space X | " +
                (
                    selected.invest_title ||
                    translations.en.invest_title
                );

        } else if (page === "withdraw") {

            title =
                "Space X | " +
                (
                    selected.withdraw_title ||
                    translations.en.withdraw_title
                );

        } else if (page === "wallet") {

            title =
                "Space X | " +
                (
                    selected.wallet_title ||
                    translations.en.wallet_title
                );

        } else if (page === "history") {

            title =
                "Space X | " +
                (
                    selected.history_title ||
                    translations.en.history_title
                );

        } else if (page === "support") {

            title =
                "Space X | " +
                (
                    selected.support_title ||
                    translations.en.support_title
                );

        } else if (page === "bank-transfer") {

            title =
                "Space X | " +
                (
                    selected.bank_transfer_title ||
                    translations.en.bank_transfer_title
                );

        } else if (page === "crypto") {

            title =
                "Space X | " +
                (
                    selected.crypto_title ||
                    translations.en.crypto_title
                );

        } else if (page === "gift-card") {

            title =
                "Space X | " +
                (
                    selected.giftcard_title ||
                    translations.en.giftcard_title
                );

        } else if (page === "withdraw-crypto") {

            title =
                "Space X | " +
                (
                    selected.withdraw_crypto_title ||
                    translations.en.withdraw_crypto_title
                );

        } else if (page === "withdraw-paypal") {

            title =
                "Space X | " +
                (
                    selected.withdraw_paypal_title ||
                    translations.en.withdraw_paypal_title
                );

        } else if (page === "withdraw-cash-app") {

            title =
                "Space X | " +
                (
                    selected.withdraw_cashapp_title ||
                    translations.en.withdraw_cashapp_title
                );

        }

        document.title = title;

    }


    /* =====================================================
       TRANSLATE EVERYTHING
       ===================================================== */

    function translatePage(language) {

        if (
            !language ||
            !languageNames[language]
        ) {

            language = "en";

        }

        translateTextElements(language);

        translatePlaceholders(language);

        translateValues(language);

        updateDirection(language);

        updateLanguageSelector(language);

        updateDocumentTitle(language);

        saveLanguage(language);


        /* Notify other scripts */

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
       LANGUAGE CHANGE EVENT
       ===================================================== */

    document.addEventListener(
        "spaceXLanguageChanged",
        event => {

            const language =
                event.detail &&
                event.detail.language;

            if (!language) return;

            setLanguage(language);

        }
    );


    /* =====================================================
       ALSO SUPPORT:
       window.dispatchEvent(
           new CustomEvent(...)
       )
       ===================================================== */

    window.addEventListener(
        "spaceXLanguageChanged",
        event => {

            const language =
                event.detail &&
                event.detail.language;

            if (!language) return;

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
       MUTATION OBSERVER
       =====================================================
       This catches elements added later by JavaScript.
       ===================================================== */

    let observerStarted = false;

    function startObserver() {

        if (observerStarted) return;

        if (!document.body) return;

        observerStarted = true;

        const observer =
            new MutationObserver(
                mutations => {

                    let shouldTranslate = false;

                    for (
                        const mutation
                        of mutations
                    ) {

                        if (
                            mutation.type ===
                            "childList"
                        ) {

                            if (
                                mutation.addedNodes &&
                                mutation.addedNodes.length
                            ) {

                                shouldTranslate = true;

                                break;

                            }

                        }

                    }

                    if (shouldTranslate) {

                        translatePage(
                            getCurrentLanguage()
                        );

                    }

                }
            );

        observer.observe(
            document.body,
            {
                childList: true,
                subtree: true
            }
        );

    }


    /* =====================================================
       INITIALIZE
       ===================================================== */

    function initializeLanguageSystem() {

        const language =
            getCurrentLanguage();

        translatePage(language);

        startObserver();

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

        getText(key) {

            return getTranslation(
                getCurrentLanguage(),
                key
            );

        },

        languages:
            languageNames,

        translations:
            translations

    };


    /* =====================================================
       GLOBAL HELPER
       ===================================================== */

    window.setSpaceXLanguage = function(language) {

        setLanguage(language);

    };


})();