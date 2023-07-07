import axios from "axios";

const personOption = {
    namespaced: true,
    actions: {
        addPerson(context, value) {
            context.commit("ADD_PERSON", value);
        },
        addOtherPerson(context) {
            axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
                (response) => {
                    console.log(response.data);
                    context.commit("ADD_PERSON", {
                        id: Date.now(),
                        name: response.data,
                    });
                },
                (error) => {
                    console.log(error);
                }
            );

            axios.get(`https://dlservice-pro-promomats.veevavault.com/api/v18.3/objects/documents/1162/renditions/viewable_rendition__v`, {
                headers: {
                    Authorization: `23B882ACB487800AC95A218B21171D4912ACBB1EB7ED386F11EBA61D28E9CA118971ED29E5B1CD0EE375EF1A1B1D17847EA0BFE330D72BBA2015A2ACBBC931A1`,
                    'Content-Type': 'application/pdf',
                    'Content-Disposition':'attachment',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin':'*',
                },
            }).then(res => {
                console.log(res);
                console.log(res.data.errors);
            }).catch(err => {
                console.log(err);
            })
        },
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value);
        },
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name;
        },
    },
    state: {
        personList: [{ id: "001", name: "张三" }],
    },
};

export default personOption;
