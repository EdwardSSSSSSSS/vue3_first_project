<template>
    <div>
        <div class="slds-form__row">
            <div class="slds-form__item" role="listitem">
                <div class="slds-form-element slds-form-element_horizontal">
                    当前求和为{{ sum }}
                </div>
                <div class="slds-form-element slds-form-element_horizontal">
                    当前求和这么10倍为{{ multiplyTen }}
                </div>
            </div>
            <div class="slds-form__item" role="listitem">
                <div class="slds-form-element slds-form-element_horizontal">
                    {{ companyName }}, {{ teamName }} ,
                    <span style="color: red"
                        >下方组件的总人数是{{ personList.length }}</span
                    >
                </div>
            </div>
        </div>
        <div class="slds-form__row">
            <div class="slds-form__item" role="listitem">
                <div class="slds-form-element slds-form-element_horizontal">
                    <label class="slds-form-element__label" for="select-01"
                        >Select Label</label
                    >
                    <div class="slds-form-element__control">
                        <div class="slds-select_container">
                            <select
                                v-model.number="n"
                                class="slds-select"
                                id="select-01"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slds-form__item" role="listitem">
                <div class="slds-form-element slds-form-element_horizontal">
                    <button
                        class="slds-button slds-button_neutral"
                        @click="increment(n)"
                    >
                        +
                    </button>
                    <button
                        class="slds-button slds-button_neutral"
                        @click="decrement(n)"
                    >
                        -
                    </button>
                    <button
                        class="slds-button slds-button_neutral"
                        @click="incrementOdd(n)"
                    >
                        当前求和为奇数再加
                    </button>
                    <button
                        class="slds-button slds-button_neutral"
                        @click="incrementWait(n)"
                    >
                        等一等再加
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: "Count",
    data() {
        return {
            n: 1,
        };
    },
    methods: {
        // increment() {
        //     this.$store.commit("PLUS", this.n);
        //     // console.log(this.$store.state.sum);
        // },
        // decrement() {
        //     this.$store.commit("MINUS", this.n);
        // },
        // incremenn -> increment(n)
        // ...mapMutations({ increment: "PLUS", decrement: "MINUS" }),
        ...mapMutations("countOptions", {
            increment: "PLUS",
            decrement: "MINUS",
        }),
        // incrementOdd() {
        //     this.$store.dispatch("plusOdd", this.n);
        // },
        // incrementWait() {
        //     this.$store.dispatch("plusWait", this.n);
        // },
        ...mapActions("countOptions", {
            incrementOdd: "plusOdd",
            incrementWait: "plusWait",
        }),
    },
    computed: {
        // ...mapState({ sum: "sum", CN: "companyName", TN: "teamName" }), 对象写法
        // ...mapState(["sum", "companyName", "teamName", "personList"]), // 数组写法
        ...mapState("countOptions", ["sum", "companyName", "teamName"]),
        ...mapState("personOptions", { personList: "personList" }),
        // ...mapGetters(["multiplyTen"]),
        ...mapGetters("countOptions", ["multiplyTen"]),
    },
};
</script>

<style scoped>
button {
    min-width: 50px;
}
</style>
