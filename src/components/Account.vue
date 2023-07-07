<template>
    <div>Current Account Id: {{ accountObj.Id }}</div>
</template>

<script>
// import { mapState } from "vuex";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
    name: "Account",
    setup() {
        let store = useStore();

        onMounted(() => {
            store.dispatch("accountOptions/queryCurrentAccountId");
        });

        let accountObj = computed(() => {
            return store.state.accountOptions.accountObj;
        });

        return {
            accountObj,
        };
    },
    //     computed: {
    //         ...mapState("accountOptions", ["accountObj"]),
    //     },
    //     mounted() {
    //         this.$store.dispatch("accountOptions/queryCurrentAccountId");
    //     },
};
</script>

<style></style>
