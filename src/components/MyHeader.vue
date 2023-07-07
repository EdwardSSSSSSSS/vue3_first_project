<template>
    <div class="slds-form-element slds-form-element_stacked">
        <label class="slds-form-element__label" for="text-input-id-47">
            <abbr class="slds-required" title="required">*</abbr>{{ $t('BasicVue.HOBBY_LABEL') }}</label
        >
        <div class="slds-form-element__control">
            <input
                type="text"
                id="text-input-id-47"
                placeholder="Placeholder text…"
                required="t"
                class="slds-input"
                @keyup.enter="add"
                v-model="title"
            />
        </div>
    </div>
</template>

<script>
import { ref, inject } from 'vue';
// import { useI18n } from 'vue-i18n';

export default {
    name: "MyHeader",
    setup() {

        // const { locale } = useI18n();
        // locale.value = 'zh';

        let todos = inject('todos');
        let title = ref("");
        function add() {
            if (!this.title.trim()) return;
            const todoObj = {
                id: Date.now(),
                title: this.title,
                done: false,
                // isEdit: false,
            };
            todos.unshift(todoObj);
            this.title = "";
        }

        return {
            title,
            add,
        };
    },
    // data() {
    //     return {
    //         title: "",
    //     };
    // },
    // methods: {
    //     add() {
    //         if (!this.title.trim()) return;
    //         const todoObj = {
    //             id: Date.now(),
    //             title: this.title,
    //             done: false,
    //             // isEdit: false,
    //         };
    //         pubsub.publish("addTodo", todoObj);
    //         this.title = "";
    //     },
    // },
};
</script>

<style></style>
