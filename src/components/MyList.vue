<template>
    <ul>
        <MyItem
            v-for="todoObj in todos"
            :key="todoObj.id"
            :todo="todoObj"
        />
    </ul>
</template>

<script>
import MyItem from "./MyItem";
import { inject } from 'vue';
export default {
    name: "List",
    components: {
        MyItem,
    },
    setup() {
        let todos = inject('todos');
        
        return{
            todos,
        }
    }
};
</script>

<style scoped>
ul {
    border: 1px black solid;
}
</style>
