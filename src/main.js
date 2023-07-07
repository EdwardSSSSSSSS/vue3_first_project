// 引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import {
    createApp
} from 'vue'
import App from './App.vue'
import '/node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css'
import plugin from "./plugin"
// import router from './router/index'
import router from './router'

// import store from './store/index'
import store from './store'

// import './assets/q'
// import './assets/MyInsightsLibrary'

import i18n from './assets/lang/index';
// i18n.global.locale = 'en';
// console.log(`i18n`,i18n);

// 创建实例对象，挂载
const app = createApp(App);


import SvgIcon from '@/components/SvgIcon/index.vue' 
const req = require.context('@/assets/icons', false, /\.svg$/)  
req.keys().map(req)
app.component('svg-icon', SvgIcon)


app.use(router).use(store).use(plugin).use(i18n).mount('#root');

console.log("main", app);
