const countOptions = {
    namespaced: true,
    actions: {
        plus: function (context, value) {
            context.commit('PLUS', value);
        },
        minus(context, value) {
            context.commit('MINUS', value);
        },
        plusOdd: function (context, value) {
            if (context.state.sum % 2) {
                context.commit('PLUS', value);
            }
        },
        plusWait: function (context, value) {
            setTimeout(() => {
                context.commit('PLUS', value);
            }, 3000);
        },
    },
    mutations: {
        PLUS(state, value) {
            state.sum += value;
        },
        MINUS(state, value) {
            state.sum -= value;
        },
    },
    getters: {
        multiplyTen(state) {
            return state.sum * 10;
        }
    },
    state: {
        sum: 0,
        companyName: 'Veeva',
        teamName: 'TS',
    }
};

export default countOptions;