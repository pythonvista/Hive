<template>
  <div>

  </div>
</template>

<script>
export default {
     created() {
        store = useHiveStore()
        nuxt = useNuxtApp()
        auth = nuxt.$authfunc
        onAuthStateChanged(auth.UserState(), async (user) => {
            if (user) {
                const res = await AuthHandler(user.uid, user.accessToken)
                if (res.status && res.account != 'none') {
                    // ShowSnack('Signed In Successful', 'positive')
                    // route user based on account type
                    //
                } else {
                    // show user error msg
                    // Network error if 
                    // Move User to onboarding erType is 100
                    // Show Snack if ErType is 101
                }
            } else {
                ShowSnack('Session Expired', 'negative')
               this.$router.push({path: '/login'})
            }
        });

    }
}
</script>

<style>

</style>