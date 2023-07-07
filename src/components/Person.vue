<template>
    <div>
        <div class="slds-form__row">
            <div class="slds-form__item" role="listitem">
                <div class="slds-form-element slds-form-element_horizontal">
                    <label class="slds-form-element__label" for="text-input-id-48">
                        <abbr class="slds-required" title="required">*</abbr>人员列表</label>
                    <div class="slds-form-element__control">
                        <input type="text" id="text-input-id-48" placeholder="请输入名字" class="slds-input"
                            v-model="name" />
                    </div>
                </div>
            </div>
            <div class="slds-form__item" role="listitem">
                <div class="slds-form-element slds-form-element_horizontal">
                    <button class="slds-button slds-button_neutral" style="width: 40%" @click="add">
                        添加
                    </button>
                    <button class="slds-button slds-button_neutral" style="width: 40%" @click="addOther">
                        添加其他人
                    </button>
                </div>
            </div>
        </div>
        <div class="slds-form__row">
            <div class="slds-form__item" role="listitem">
                <ul class="slds-list_dotted">
                    <li v-for="p in personList" :key="p.id">
                        {{ p.name }}
                    </li>
                </ul>
            </div>
            <div class="slds-form__item" role="listitem">
                <span>第一个人的名字：{{ firstPersonName }}, </span>
                <span style="color: red">上方组件的和为{{ sum }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    // import { mapState, mapActions } from "vuex";

    export default {
        name: "Person",
        data() {
            return {
                name: "",
            };
        },
        computed: {
            // ...mapState("countOptions", ["sum"]),
            sum() {
                return this.$store.state.countOptions.sum;
            },
            // ...mapState("personOption", ["personList"]),
            personList() {
                return this.$store.state.personOptions.personList;
            },
            firstPersonName() {
                return this.$store.getters["personOptions/firstPersonName"];
            },
        },
        methods: {
            add() {
                if (!this.name.trim()) return;
                const personObj = {
                    id: Date.now(),
                    name: this.name
                };
                this.$store.dispatch("personOptions/addPerson", personObj);
                this.name = "";
            },
            addOther() {
                this.$store.dispatch("personOptions/addOtherPerson");
            },
        },
        mounted() {},
    };
</script>

<style></style>