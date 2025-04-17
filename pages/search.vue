<template>
    <div>
        <div class="px-2 pt-4 pb-20" >
            <div class="searchbox flex flex-col  justify-start gap-2 items-start rounded-md px-2 py-4 shadow-md">
                <div class="w-full ">
                    <label for="" class="sr-only"> Search </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>

                        <input v-model="dform.search" type="search" name="" id=""
                            class="border block w-full py-4 pl-10 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                            placeholder="Search here" />
                    </div>
                </div>
                <q-select readonly @click="OpenSheet('region')" class="w-full" outlined v-model="dform.region"
                    :options="options" label="Select a Region">
                    <template v-slot:prepend>
                        <q-icon name="language" />
                    </template>
                </q-select>
                <q-select readonly @click="OpenSheet('location')" class="w-full" outlined v-model="dform.locaion"
                    :options="options" label="Select a Location">
                    <template v-slot:prepend>
                        <q-icon name="location_on" />
                    </template>
                </q-select>
                <q-select readonly @click="OpenSheet('category')" class="w-full" outlined v-model="dform.category"
                    :options="options" label="Select Category">
                    <template v-slot:prepend>
                        <q-icon name="home" />
                    </template>
                </q-select>
                <q-select readonly @click="OpenSheet('sub')" class="w-full" outlined v-model="dform.sub" :options="options"
                    label="Select Sub Category">
                    <template v-slot:prepend>
                        <q-icon name="apartment" />
                    </template>
                </q-select>

                <q-btn color="blue" class="w-full">Search</q-btn>
            </div>
            <UtilsAgentsSlider></UtilsAgentsSlider>
            <UtilsFeaturedGrid></UtilsFeaturedGrid>

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
                <q-card-section>
                    <div class="text-h6">{{ sheetTitle }}</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <div class="grid grid-cols-2 gap-6  sm:grid-cols-2 lg:grid-cols-4">
                        <div @click="SelectOption(i.title)" v-for="(i, index) in options" :key="index"
                            class="relative flex h-[250px] p-1 flex-col w-full overflow-hidden bg-gray-100 shadow group rounded-2xl">
                            <div class=" rounded-2xl relative  h-[75%]  overflow-hidden ">
                                <div class="absolute top-2 z-[1] right-2">
                                    <input type="radio">
                                </div>
                                <img class="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
                                    :src="i.img" alt="" />
                            </div>
                            <div class="h-[25%] flex flex-col px-2 justify-center text-black text-left">
                                <p class="font-bold text-xl">{{ i.title }}</p>

                            </div>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
let store;
let auth
export default {
    methods: {
        async Signout() {
            await auth.signout()
        },
        OpenSheet(type) {
            this.Optype = type
            if (type == 'region') {
                this.sheetTitle = 'Select Region'
                this.options = this.regions
                this.sheet = true
            }
            if (type == 'location') {
                this.sheetTitle = 'Select Location'
                this.options = this.locations
                this.sheet = true
            }
            if (type == 'category') {
                this.sheetTitle = 'Select Category'
                this.options = this.categories
                this.sheet = true
            }
            if (type == 'sub') {
                this.sheetTitle = 'Select Sub Category'
                this.options = this.sub
                this.sheet = true
            }
        },
        SelectOption(title) {
            this.sheetTitle = ''
            if (this.Optype == 'region') {
                this.dform.region = title
                this.sheet = false
            }
            if (this.Optype == 'location') {
                this.dform.locaion = title
                this.sheet = false
            }
            if (this.Optype == 'category') {
                this.dform.category = title
                this.sheet = false
            }
            if (this.Optype == 'sub') {
                this.dform.sub = title
                this.sheet = false
            }
        }
    },
    data: () => ({
        sheet: false,
        sheetTitle: '',
        Optype: '',
        dform: {
            search: '',
            region: '',
            locaion: '',
            category: '',
            sub: ''
        },
        options: [],
        regions: [
            { title: 'Ekiti', img: 'https://i.imgur.com/Ulhs02P.jpg' },
            { title: 'Lagos', img: 'https://i.imgur.com/6rh53ZG.jpg' },
            { title: 'Abuja', img: 'https://i.imgur.com/gWABZGd.jpg' }
        ],
        locations: [
            { title: 'Iworoko', img: 'https://i.imgur.com/v0A01uI.jpg', region: 'ekiti' },
            { title: 'School Area', img: 'https://i.imgur.com/TYdfZeL.jpg', region: 'ekiti' },
            { title: 'Town', img: 'https://i.imgur.com/Ulhs02P.jpg', region: 'ekiti' },
            { title: 'Adebayo', img: 'https://i.imgur.com/Ulhs02P.jpg', region: 'ekiti' }
        ],
        categories: [
            { title: 'Hostels', img: 'https://i.imgur.com/mzdKGDm.jpg' },
            { title: 'Apartments', img: 'https://i.imgur.com/BA15PPk.jpg' },
            { title: 'Real Estate', img: 'https://i.imgur.com/jhNE3qw.jpg' },
            { title: 'Shop', img: 'https://i.imgur.com/w6eh7zI.jpg' }
        ],
        sub: [
            { title: 'Self Contain', img: 'https://i.imgur.com/BA15PPk.jpg' },
            { title: '1 bed Room Apartment', img: 'https://i.imgur.com/jhNE3qw.jpg' },
            { title: '2 bed Room Apartment', img: 'https://i.imgur.com/jhNE3qw.jpg' },
            { title: '3 bed Room Apartment', img: 'https://i.imgur.com/jhNE3qw.jpg' },
            { title: 'Duplex Apartment', img: 'https://i.imgur.com/FCiL9QO.jpg' }
        ],
        model: ''
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
