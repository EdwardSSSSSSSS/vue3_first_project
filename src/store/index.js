import {createStore} from 'vuex'


import countOptions from './count';
import personOptions from './person';
import accountOptions from './account';

export default createStore({
    modules: {
        countOptions,
        personOptions,
        accountOptions,
    }
})