<template>
  <v-layout>
    <UtilsLoader v-if="loader"></UtilsLoader>
    <div v-else class="h-screen w-full bg-gray-50 relative home_wrap">
      <UtilsNavigator
        v-if="!viewMini"
        :Signout="Signout"
        class=""
      ></UtilsNavigator>
      <UtilsMinNavigator v-else></UtilsMinNavigator>
      <slot />
      <UtilsFooter v-if="!activeUser"></UtilsFooter>
      <v-bottom-navigation
       
        v-model="value"
        color="purple"
      >
        <v-btn @click="$router.push({ path: '/' })" :to="{ path: '/' }">
          <q-icon size="20px" name="home"></q-icon>

          <span>Home</span>
        </v-btn>
        <v-btn @click="$router.push({ path: '/search' })">
          <q-icon size="20px" name="search"></q-icon>

          <span>Search</span>
        </v-btn>
        <v-btn @click="$router.push({ path: '/feeds' })">
          <q-icon size="20px" name="dynamic_feed"></q-icon>

          <span>Feeds</span>
        </v-btn>

        <v-btn to="/chats">
          <q-icon size="20px" name="message"></q-icon>

          <span>Message</span>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </v-layout>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
let nuxt;
let auth;
let store;
export default {
  data: () => ({
    loader: false,
    value: 0,
  }),
  methods: {
    async Signout() {
      try {
        await auth.signout();
        ShowSnack("Signed Out", "positive");
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    viewMini() {
      if (
        this.$route.path == "/" ||
        this.$route.path == "/feeds" ||
        this.$route.path == "/search" ||
        this.$route.path == "/chats"
      ) {
        return false;
      }
      return true;
    },
    activeUser() {
      return store.activeUser;
    },
    color() {
      switch (this.value) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        default:
          return "blue-grey";
      }
    },
  },
  created() {
    store = useHiveStore();
    nuxt = useNuxtApp();
    auth = nuxt.$authfunc;
 
  },
};
</script>

<style>
.home_wrap {
  overflow-y: scroll !important;
}
</style>
