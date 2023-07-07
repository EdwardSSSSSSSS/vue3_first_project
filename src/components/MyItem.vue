<template>
    <li>
        <div class="slds-form-element slds-form-element_stacked">
            <div class="slds-form-element__control">
                <div class="slds-checkbox">
                    <input type="checkbox" name="options" :id="todo.id" :checked="todo.done"
                        @click="handlerCheck(todo)" />
                    <label class="slds-checkbox__label" :for="todo.id" v-show="!todo.isEdit">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label">{{
                            todo.title
                        }}</span>
                    </label>
                    <input type="text" :value="todo.title" v-show="todo.isEdit" ref="editInput"
                        @keyup.enter="saveEdit(todo)" @blur="blurEdit(todo)" />
                    <button class="slds-button slds-button_destructive" @click="handleDelete(todo.id)">
                        Delete
                    </button>
                    <button class="slds-button slds-button_neutral" @click="startEdit(todo)">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
    import {
        nextTick,
        getCurrentInstance,
        inject
    } from "vue";
    export default {
        name: "MyItem",
        props: ["todo"],
        setup() {
            const internalInstance = getCurrentInstance();
            let todos = inject("todos");

            function handlerCheck(todo) {
                todo.done = !todo.done;
            }

            function handleDelete(id) {

                for (let index = 0; index < todos.length; index++) {
                    if (todos[index].id === id) {
                        todos.splice(index, 1);
                    }
                }
            }

            function startEdit(todo) {
                todo.isEdit = true;
                nextTick(() => {
                    internalInstance.ctx.$refs.editInput.focus();
                });
            }

            function blurEdit(todo) {
                todo.isEdit = false;
            }

            function saveEdit(todo) {
                todo.isEdit = false;
                todo.title = internalInstance.ctx.$refs.editInput.value;
            }

            return {
                handlerCheck,
                handleDelete,
                startEdit,
                blurEdit,
                saveEdit,
            };
        },
    };
</script>

<style>
    li button {
        display: none !important;
    }

    li:hover button {
        display: block !important;
        float: right;
    }
</style>