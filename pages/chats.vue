<template>
    <div class="min-h-screen">
        <TabGroup :selectedIndex="selectedTab" @change="changeTab">
            <TabList class="w-full mb-4 flex gap-1 px-2  border-solid ">
                <Tab class="flex-1" as="template" v-slot="{ selected }"> <button class="rounded-md "
                        :class="{ 'bg-[#6f64f0] shadow-md text-white': selected, 'bg-gray-200 text-black': !selected }">
                        Chats
                    </button></Tab>
                <Tab class="flex-1" as="template" v-slot="{ selected }"> <button class="rounded-md "
                        :class="{ 'bg-[#6f64f0] shadow-md text-white': selected, 'bg-gray-200 text-black': !selected }">
                        Requests
                    </button></Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <q-list>
                        <q-item @click="sheet = true" :class="{ 'border-t-2': i == 0 }" class="border-b-2  " bordered
                            v-for="i in 10" :key="i" clickable v-ripple>
                            <q-item-section avatar>
                                <q-avatar>
                                    <img
                                        src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/team/8/member-5.png">
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>
                                <div class="flex flex-col gap-1 justify-center items-start">
                                    <p class="font-bold"> Dayo Abayomi</p>
                                    <p class="text-xs font-mono">Hello You Dere</p>
                                </div>

                            </q-item-section>
                        </q-item>
                    </q-list>
                </TabPanel>
                <TabPanel>
                    <div>
                        <div
                            class="max-w-xs mx-auto overflow-hidden bg-white border border-gray-100 rounded-lg shadow-xl shadow-gray-500/10">
                            <div class="p-4">
                                <span
                                    class="block w-full px-4 py-1.5 text-sm font-medium text-center text-white rounded-md bg-rose-500">
                                    Recject </span>

                                <div class="mt-4 overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                                    <img class="object-cover w-full h-full"
                                        src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/team/8/member-2.png"
                                        alt="" />
                                </div>

                                <div class="flex items-center justify-between mt-4 space-x-6">
                                    <p class="flex-1 text-base font-bold text-gray-900">David Jones - Need Room Mate
                                    </p>

                                    <div class="text-right shrink-0">
                                        <p class="text-sm font-medium text-gray-500">Current Bid</p>
                                        <p class="mt-0.5 text-lg font-bold text-rose-500">150,301 N</p>
                                    </div>
                                </div>

                                <div class="flex gap-2 items-center justify-between mt-4 ">
                                    <button type="button"
                                        class="inline-flex items-center justify-center w-full px-4 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white">
                                        Accept
                                    </button>

                                    <button @click="isOpen = !isOpen" type="button"
                                        class="inline-flex items-center justify-center w-full px-4 py-3 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-gray-900 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>

            </TabPanels>
        </TabGroup>
        <q-dialog v-model="isOpen">
            <q-card class="my-card">
                <q-img src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/team/8/member-2.png" />



                <q-card-section>
                    <q-btn color="primary" icon="account_circle" size="10px" class="absolute"
                        style="top: 0; right: 12px; transform: translateY(-50%);" />

                    <div class="row no-wrap items-center">
                        <div class="col text-h6 ellipsis">
                            Need Room Mate
                        </div>

                    </div>

                    <q-rating v-model="stars" :max="5" size="32px" />
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <div class="text-subtitle1">
                        Emeter Bayo
                    </div>
                    <div class="text-caption text-grey">
                        I need a room mate i have an apartment and my budget is 500k .
                    </div>
                </q-card-section>

                <q-separator />

                <q-card-actions align="right">
                    <q-btn v-close-popup flat color="primary" label="Accept" />
                    <q-btn v-close-popup flat color="primary" round icon="chat" />
                </q-card-actions>
            </q-card>
        </q-dialog>
        <q-dialog v-model="sheet" persistent :maximized="true" transition-show="slide-up" transition-hide="slide-down">
            <q-card class="bg-white relative text-black">
                <q-card-section class="sticky top-0 left-0 w-full namecard z-[10] ">
                    <q-list>
                        <q-item clickable v-ripple>
                            <div class="w-full flex justify-between">
                                <q-item-section avatar>
                                    <q-avatar>
                                        <img
                                            src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/team/8/member-5.png">
                                    </q-avatar>
                                </q-item-section>
                                <q-item-section>
                                    <div class="flex flex-col gap-1 justify-center items-start">
                                        <p class="font-bold"> Dayo Abayomi</p>

                                    </div>

                                </q-item-section>
                            </div>

                            <q-btn round dense flat icon="close" v-close-popup>
                                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                            </q-btn>
                        </q-item>
                    </q-list>
                </q-card-section>
                <q-card-section class="q-pt-none pb-20">
                    <div class="q-pa-md row  justify-center">
                        <div style="width: 100%; max-width: 400px">
                            <div v-for="(i, index) in messages" :key="index">
                                <q-chat-message  :name="i.type"
                                    :avatar="i.img" :sent="i.type == 'me' ? true : false"
                                    :text="[i.message]" stamp="7 minutes ago" bg-color="amber-7" />
                             
                            </div>

                        </div>
                    </div>
                </q-card-section>

                <div class="w-full fixed bottom-0 left-0 z-[1] bg-white">
                    <label for="" class="sr-only"> Search </label>
                    <div class="relative">
                        <div class="absolute z-10 inset-y-0 right-0 flex items-center pr-4 ">

                            <q-btn :disable="!message" @click="SendMessage" dense flat color="blue" round icon="send"></q-btn>
                        </div>

                        <input v-model="message" type="search" name="" id=""
                            class="border block w-full py-4 pl-10 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                            placeholder="Message" />
                    </div>
                </div>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import {
    TabGroup, TabList, Tab, TabPanels, TabPanel, Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
} from '@headlessui/vue'
export default {
    components: {
        TabGroup,
        TabList,
        Tab,
        TabPanels,
        TabPanel,
        Dialog,
        DialogPanel,
        DialogTitle,
        DialogDescription,
    },
    data: () => ({
        selectedTab: 0,
        isOpen: false,
        stars: 4,
        sheet: false,
        message: '',
        messages: [
            { message: 'Hi wetin dey nah', img: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/team/8/member-3.png', type: 'me' },
            { message: 'I just dey o', img: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/team/8/member-5.png', type: 'Dayo Abayomi' }
        ]
    }),
    methods: {
        changeTab(e) {
            this.selectedTab = e
            console.log(e)
        },
        setIsOpen(value) {
            console.log(value)
            this.isOpen = value
        },
        SendMessage() {
            this.messages.push({ message: this.message, img: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/team/8/member-3.png', type: 'me', })
            this.message = ''
            ShowSnack('Sent!', 'positive')
            setTimeout(() => {
                this.messages.push({ message: 'lorem ipisum anddndd', img: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/team/8/member-5.png', type: 'Dayo Abayomi', })
                 ShowSnack('New Message!', 'positive')
            },3000)
        }
    },
    setup() {
        definePageMeta({
            layout: 'home',
        });
    },
}
</script>

<style scoped>
.namecard {
    background: rgba(255, 255, 255, 0.077);
    backdrop-filter: blur(5px);
}

button {
    padding: .7em 3em;
    transition: .3s;
}
</style>