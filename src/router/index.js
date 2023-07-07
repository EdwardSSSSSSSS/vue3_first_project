import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import VueBasic from '../pages/VueBasic'
import VueX from '../pages/VueX'
import BDD from '../pages/BDD'

export default new createRouter({
    history: createWebHashHistory(),
    routes: [{
            name: 'VueBasic',
            path: '/VueBasic/:id/:title',
            component: VueBasic
        },
        {
            name: 'VueX',
            path: '/VueX',
            component: VueX,
            props($route) {
                return {
                    id: $route.query.id,
                    title: $route.query.title
                }
            }

        },
        {
            name: 'BDD',
            path: '/BDD',
            component: BDD
        },
    ]

})