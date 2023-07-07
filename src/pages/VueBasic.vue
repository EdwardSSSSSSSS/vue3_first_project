<template>
    <div>
        <h1>Router params title:{{ $route.params.title }}</h1>
        <h1>Router params id:{{ $route.params.id }}</h1>

        <div class="slds-form">
            <MyHeader />

            <MyList />

            <MyFooter />
        </div>
    </div>
</template>

<script>
import MyHeader from "../components/MyHeader";
import MyList from "../components/MyList";
import MyFooter from "../components/MyFooter";

// import pubsub from "pubsub-js";
import { reactive, onMounted, onBeforeUnmount, watchEffect, provide } from "vue";

export default {
    name: "VueBasic",
    components: {
        MyHeader,
        MyList,
        MyFooter,
    },
    setup() {
        let msg = "Basic Vue@@@@@@@@@@@@@@@";
        let todos = reactive({
            list: JSON.parse(localStorage.getItem("todos")) || [],
        });

        // watch(
        //     //强制开启深度监视，deep 配置无效
        //     todos,
        //     (newValue, oldvalue) => {
        //         console.log(`newValue`, newValue);
        //         //目前无法正常获取旧值
        //         console.log(`oldvalue`, oldvalue);
        //         localStorage.setItem("todos", JSON.stringify(newValue.list));
        //     },
        //     { immediate: true }
        // );

        watchEffect(()=>{
            localStorage.setItem("todos", JSON.stringify(todos.list));
        })

        // watch(
        //     [() => todos.list[0].title, () => todos.list[0].id],
        //     (newValue, oldvalue) => {
        //         console.log(`newValue`, newValue);
        //         console.log(`oldvalue`, oldvalue);
        //     },
        //     { immediate: true }
        // );

        onMounted(() => {
            console.log(`VueBasic is mounted`);

        });

        onBeforeUnmount(() => {
            console.log(`VueBasic is unmount`);

        });

        provide('todos', todos.list);

        return {
            msg,

        };
    },
};
</script>

<style></style>
