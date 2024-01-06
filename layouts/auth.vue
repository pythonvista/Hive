<template>
    <v-layout>
        <!-- <UtilsLoader v-if="loader"></UtilsLoader> -->
        <div class="h-screen w-full bg-gray-50 relative home_wrap">
            <UtilsNavigator :Signout="Signout" class=""></UtilsNavigator>
            <slot />
            <UtilsFooter v-if="!activeUser"></UtilsFooter>
        </div>
    </v-layout>
</template>

<script>
// import { onAuthStateChanged } from "firebase/auth";
let nuxt
let auth
let store
export default {
    data: () => ({
        loader: true,
        value: 0
    }),
    methods: {
        async Signout() {
            try {
                await auth.signout()
                ShowSnack('Signed Out', 'positive')
            } catch (err) {
                console.log(err)
            }

        }
    },
    computed: {
        activeUser() {
            return store.activeUser
        },
        color() {
            switch (this.value) {
                case 0: return 'blue-grey'
                case 1: return 'teal'
                case 2: return 'brown'
                case 3: return 'indigo'
                default: return 'blue-grey'
            }
        }
    },
    created() {
        store = useHiveStore()
        nuxt = useNuxtApp()
        auth = nuxt.$authfunc
        console.log(this.$route)
    }
};
</script>

<style >
.home_wrap {
    overflow-y: scroll !important;
}
</style>