<template>
    <div class="slds-form" role="list">
        <!-- <h1>Router query title:{{ $route.query.title }}</h1> -->
        <h1>Router query title:{{ title }}</h1>
        <!-- <h1>Router query id:{{ $route.query.id }}</h1> -->
        <h1>Router query id:{{ id }}</h1>
        <div>
            <Count />
            <hr />
            <Person />
        </div>
        <div>
            <Account />
        </div>
    </div>
</template>

<script>
import Count from "../components/Count";
import Person from "../components/Person";
import Account from "../components/Account";

export default {
    name: "VueX",
    props: ["id", "title"],
    components: {
        Count,
        Person,
        Account,
    },
    data() {
        return {};
    },
    methods: {},
    watch: {},
    created() {
        console.log(`VueX is created`);
    },
    unmounted() {
        console.log(`VueX is unmounted`);
    },
};
</script>

<style></style>
