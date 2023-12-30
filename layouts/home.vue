<template>
  <v-layout class="overflow-hidden">
    <UtilsLoader v-if="loader"></UtilsLoader>
    <div v-else class="h-screen w-full bg-gray-50 relative home_wrap">
      <UtilsNavigator :Signout="Signout" class="sticky top-0 left-0"></UtilsNavigator>
      <slot />
      <UtilsFooter v-if="!activeUser"></UtilsFooter>
    </div>
    <v-bottom-navigation v-model="value" color="purple" >
      <v-btn>
        <q-icon size="20px" name="home"></q-icon>

        <span>Home</span>
      </v-btn>
      <v-btn>
          <q-icon size="20px" name="search"></q-icon>

          <span>Search</span>
        </v-btn>
      <v-btn>
         <q-icon size="20px" name="dynamic_feed"></q-icon>

        <span>Feeds</span>
      </v-btn>

      <v-btn>
         <q-icon size="20px" name="message"></q-icon>

        <span>Message</span>
      </v-btn>

      
    </v-bottom-navigation>
  </v-layout>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
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
    onAuthStateChanged(auth.UserState(), async (user) => {
      this.loader = true
      if (user) {
        const res = await AuthHandler(user.uid, user.accessToken)
        if (res.success && res.account != 'none') {
          this.loader = false
        } else {
          // show user error msg
          if (res.erType == 100) {
            ShowSnack('Profile Incomplete', 'negative')
            this.$router.push({ path: '/signup', query: { continueReg: true } })
            this.loader = false
          }
          if (res.erType == 101) {
            ShowSnack('Unknown Error Occured', 'negative')
          }
        }
      } else {
        store.SetUserData({})
        store.SetActiveUser('', false)
        store.SetAccessToken('')
        this.loader = false
      }
    });

  }
};
</script>

<style scoped>
.home_wrap {
  overflow-y: scroll !important;
}
</style>
