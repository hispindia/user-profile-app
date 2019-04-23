const settingsKeyMapping = {
    /* ================================================================= */
    /* Category: Profile Settings                                        */
    /* ================================================================= */
    username: {
        label: 'user_name',
        type: 'textfield',
        validators: ['codeString'],
    },
    firstName: {
        label: 'first_name',
        type: 'textfield',
        validators: ['nameString'],
    },
    surname: {
        label: 'surname',
        type: 'textfield',
        validators: ['nameString'],
    },
    email: {
        label: 'user_email_address',
        type: 'textfield',
        validators: ['email'],
    },
    phoneNumber: {
        label: 'phone_number',
        type: 'textfield',
        validators: ['phoneNumber'],
    },
    /* ================================================================= */
    /* Category: Account Settings                                        */
    /* ================================================================= */
    accountEditor: {
        label: 'account_editor',
        type: 'accountEditor',
    },
    /* ================================================================= */
    /* Category: System Settings                                         */
    /* ================================================================= */
    keyUiLocale: {
        label: 'language',
        type: 'dropdown',
        source: 'uiLocales',
        showSystemDefault: true,
    },
    keyDbLocale: {
        label: 'db_language',
        type: 'dropdown',
        source: 'dbLocales',
        showSystemDefault: true,
    },
    keyStyle: {
        label: 'style',
        type: 'dropdown',
        source: 'styles',
        showSystemDefault: true,
    },
    keyAnalysisDisplayProperty: {
        label: 'analysis_module',
        type: 'dropdown',
        options: {
            name: 'name',
            shortName: 'short_name',
        },
        showSystemDefault: true,
    },
    keyMessageEmailNotification: {
        label: 'enable_message_email_notifications',
        type: 'dropdown',
        options: {
            true: 'true_notifications',
            false: 'false_notifications',
        },
        showSystemDefault: true,
    },
    keyMessageSmsNotification: {
        label: 'enable_message_sms_notifications',
        type: 'dropdown',
        options: {
            true: 'true_notifications',
            false: 'false_notifications',
        },
        showSystemDefault: true,
    },
};

export default settingsKeyMapping;
