import { createI18n } from 'vue-i18n';

export default new createI18n({
    locale: 'zh',
    messages: {
        'zh': require('@/assets/lang/zh.js'),
        'en': require('@/assets/lang/en.js')
    }
});