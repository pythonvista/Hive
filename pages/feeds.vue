<template>
    <div class="pb-20 min-h-screen relative" v-if="isAuthenticated">
        <div class="q-pa-md h-full">
            <q-infinite-scroll @load="onLoad" class="h-full">
                <template v-slot:loading>
                    <div class="row justify-center q-my-md">
                        <q-spinner color="primary" name="dots" size="40px" />
                    </div>
                </template>
                <div class="grid grid-cols-1 gap-4">
                    <div v-for="(item, index) in items" :key="index" class="caption w-full h-full  mb-5">
                        <FeedUtilsVideoCard v-if="index % 2 == 0"></FeedUtilsVideoCard>
                        <FeedUtilsAgentPost v-if="index % 2 > 0"></FeedUtilsAgentPost>
                        <FeedUtilsUsersPost v-if="index % 10 == 0" :index="index"></FeedUtilsUsersPost>
                    </div>
                </div>

            </q-infinite-scroll>
        </div>
        <div class="w-full fixed bottom-20 flex justify-center items-center ">
            <q-fab v-model="fabCenter" vertical-actions-align="center" color="primary" glossy icon="maps_ugc"
                direction="up">
                
                <q-fab-action color="secondary" @click="onClick" icon="chat" label="Tweet" />
                <q-fab-action color="orange" @click="onClick" icon="forum" label="Requests" />
                <q-fab-action color="accent" @click="onClick" icon="movie" label="Video" />
            </q-fab>
        </div>

    </div>
    <UtilsLoader v-else></UtilsLoader>
    <q-dialog v-model="sheet" persistent :maximized="true" transition-show="slide-up" transition-hide="slide-down">
        <q-card class="bg-white text-black">
            <q-bar class="bg-black">
                <q-space />
                <q-btn dense flat icon="close" v-close-popup>
                    <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
            </q-bar>
            <q-card-section class="q-pt-none">

            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
let store;
let auth
export default {
    methods: {
        async Signout() {
            await auth.signout()
        },
        onLoad(index, done) {
            setTimeout(() => {
                this.items.splice(0, 0, {}, {}, {}, {}, {}, {}, {})
                done()
            }, 10000)
        },
        onClick() {

        }
    },
    data: () => ({
        fabCenter: false,
        sheet: false,
        items: [{}, {}, {}, {}, {}, {}, {}]
    }),
    setup() {
        definePageMeta({
            layout: 'home',
        });
    },
    computed: {
        activeUser() {
            return store.activeUser
        },
        userData() {
            return store.userData
        },
        isAuthenticated() {
            if (store.activeUser && store.userData.account) {
                return true
            }
            return false
        },
        Lang() {
            return store.systemLanguage;
        },
    },
    created() {
        store = useHiveStore();
        let nuxt = useNuxtApp()
        auth = nuxt.$authfunc
    },

    mounted() {
        let lang = localStorage.getItem('systemLang') || '';
        store.SetSystemLang(lang);
    },

};
</script>

<style scoped>
.searchbox {
    width: 100%;
    border: 1px solid rgba(79, 79, 227, 0.433);
    background: rgba(222, 233, 244, 0.167);
    backdrop-filter: blur(5px);
}
</style>
