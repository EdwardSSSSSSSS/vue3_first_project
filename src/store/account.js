const accountOptions = {
    namespaced: true,
    actions: {
        queryCurrentAccountId(context) {
        //     window.ds.getDataForCurrentObject('Account', 'Id').then(
        //         response => {
        //             context.commit('NEW_ACCOUNT', response);
        //         },
        //         error => {
        //             console.log(error);
        //         }
        //     );
            context.commit('NEW_ACCOUNT', JSON.parse(`{"Account": {"Id": "0010K0000227faTQAQ"}, "success": true}`));
        },
    },
    mutations: {
        NEW_ACCOUNT(state, value) {
            state.accountObj.Id = value.Account.Id;
        },
    },
    getters: {

    },
    state: {
        accountObj: { Id: '' },
    },
};

export default accountOptions;