<template>
    <!-- vue3中组件中的模板结构可以没有根标签 -->
    <div class="app">
        <h1>{{ msg }}</h1>
        <h1>{{ msgInfo.title }}</h1>
        <!-- <span class="slds-icon_container slds-icon-utility-announcement" title="Description of icon when needed">
            <svg class="slds-icon slds-icon-text-default" aria-hidden="true">
                <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#announcement"></use>
            </svg>
            <span class="slds-assistive-text">Description of icon when needed</span>
        </span> -->

        <svg-icon iconClass="clear" />
        <svg-icon iconClass="clear" />
        <svg-icon iconClass="clear" />
        <svg-icon iconClass="clear" />
        <div>
            <button @click="pushVueX(666666666)" class="slds-button slds-button_neutral">
                Push VueX
            </button>
            <button @click="pushForward" class="slds-button slds-button_neutral">
                Push forword
            </button>
            <button @click="pushBack" class="slds-button slds-button_neutral">
                Push back
            </button>
        </div>

        <div class="slds-vertical-tabs">
            <ul class="slds-vertical-tabs__nav" role="tablist" aria-orientation="vertical">
                <li class="slds-vertical-tabs__nav-item" title="Tab 1" role="presentation">
                    <router-link replace class="slds-vertical-tabs__link" active-class="activeTab" :to="{
                            name: 'VueBasic',
                            params: {
                                id: 888,
                                title: 'VueBasic',
                            },
                        }">VueBasic</router-link>
                </li>
                <li class="slds-vertical-tabs__nav-item" title="Tab 2" role="presentation">
                    <router-link replace class="slds-vertical-tabs__link" active-class="activeTab" :to="{
                            name: 'VueX',
                            query: {
                                id: 666,
                                title: 'VueX',
                            },
                        }">VueX</router-link>
                </li>
                <li class="slds-vertical-tabs__nav-item" title="Tab 3" role="presentation">
                    <router-link replace class="slds-vertical-tabs__link" active-class="activeTab" :to="{
                            name: 'BDD',
                        }">BDD</router-link>
                </li>
            </ul>
            <div class="slds-vertical-tabs__content" role="tabpanel">
                <!-- <keep-alive> -->
                <router-view v-slot="{ Component }">
                    <keep-alive>
                        <component :is="Component"></component>
                    </keep-alive>
                </router-view>
                <!-- </keep-alive> -->
            </div>
        </div>
    </div>
</template>

<script>
    import {
        onMounted,
        ref,
        reactive
    } from "@vue/runtime-core";
    import {
        useRouter
    } from "vue-router";
    import {
        getCurrentInstance
    } from "vue";
    import SvgIcon from "./components/SvgIcon";

    export default {
        name: "App",
        components: {
            SvgIcon
        },
        props: [],
        // Vue2中可以访问Vue3中属性和方法，但是Vue3不能访问Vue2中的属性和方法，如果有重名，setup优先。
        // 本方法在beoferCreate前执行
        setup(props, context) {
            console.log(`props`, props);
            // attrs, emit, slots
            console.log(`context`, context);

            const router = useRouter();
            // 基本类型使用ref函数，使用.value来更新赋值，尽量使用对象方式。
            let msg = ref("");
            // 对象类型使用reactive函数(基本类似不要用它)，runhg个对象（或者数组），返回一个代理对象Proxy的实现对象。
            // Reactive响应是“深层次的”，内部是基于ES6的proxy实现，通过代理对象操作源对象内部数据。
            // Vue2中要使用Vue.set或者this.$set来增加属性(defineproperty)，修改的对象也会渲染到页面中。
            let msgInfo = reactive({
                title: "Edward",
            });

            function pushVueX(m) {
                router.push({
                    name: "VueX",
                    query: {
                        id: m,
                        title: "VueX",
                    },
                });
            }

            function pushForward() {
                router.forward();
            }

            function pushBack() {
                router.back();
            }

            onMounted(() => {
                msg.value =
                    "Veeva's core values — do the right thing, customer success, employee success, and speed";
                msgInfo.title = "With great power comes great responsibility";
                const instance = getCurrentInstance();
                const _this = instance.appContext.config.globalProperties;
                console.log("App", _this);
            });

            return {
                msg,
                pushVueX,
                msgInfo,
                pushForward,
                pushBack,
            };
        },
    };
</script>

<style scoped>
    .app {
        background-color: rgb(197, 196, 196);
    }

    .activeTab {
        background-color: white;
    }
</style>