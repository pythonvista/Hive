<template>
  <div class="h-[88vh]" v-if="isAuthenticated">
    <HomePage></HomePage>
  </div>
  <div v-else class="h-[88vh] flex flex-col items-center gap-4 justify-center">
    <img class="w-[70%]" src="@/assets/img/logo_full.png" alt="" />
    <UtilsHeading  v-if="Lang" :title="'Choose Preference'"></UtilsHeading>
    <HomeLanguageSelect v-if="!Lang"></HomeLanguageSelect>
    <HomeGetStarted v-else></HomeGetStarted>
  </div>
</template>

<script>
let store;
let auth
export default {
  data: () => ({}),
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
  methods: {
   async Signout() {
      await auth.signout()
    }
  },
};
</script>

<style scoped></style>
