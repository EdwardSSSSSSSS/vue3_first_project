<template>
    <div
        class="slds-form-element slds-form-element_stacked"
        v-show="total >= doneTotal && total > 0"
    >
        <div class="slds-form-element__control">
            <div class="slds-checkbox">
                <input
                    type="checkbox"
                    id="checkAll"
                    name="checkAll"
                    v-model="isAll"
                />
                <label class="slds-checkbox__label" for="checkAll">
                    <span class="slds-checkbox_faux"></span>
                    <span class="slds-form-element__label">
                        Done: {{ doneTotal }}, Total: {{ total }}
                    </span>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
import { watchEffect, reactive, computed, toRefs, inject } from "vue";
export default {
    name: "MyFooter",
    setup() {
        let todos = inject('todos');
        const state = reactive({
            doneTotal: 0,
            total: 0,
            isAll: computed({
                get() {
                    return state.total === state.doneTotal && state.total > 0;
                },
                set(value) {
                    todos.forEach(element => {
                        element.done = value;
                    });
                },
            }),
        });

        watchEffect(() => {
            state.total = todos.length;
            let a = todos.filter((todo) => {
                return todo.done;
            });
            state.doneTotal = a.length;
        });

        return {
            ...toRefs(state),
        };
    },
};
</script>

<style></style>
