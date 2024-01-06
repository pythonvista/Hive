<template>
  <div v-if="!activeUser"
    class="border-b-2 px-3 navigator_wrap sticky top-0 left-0 w-full z-10 border-solid flex justify-between items-center border-gray-200 shadow h-[7vh]">
    <img @click="$router.push({ path: '/' })" class="h-full" src="@/assets/img/logo.png" alt="" />
    <q-btn @click="Signout()" flat color="black" class="text-[#7065f0]" round icon="info"></q-btn>
  </div>
  <div v-else
    class=" px-3 py-1 navigator_wrap sticky top-0 left-0 w-full z-10 border-solid flex justify-between items-center ">
    <img @click="$router.push({ path: '/' })" class="w-10" src="@/assets/img/logo.png" alt="" />
    <div>
      <q-btn @click="Signout()" flat color="black" class="text-[#7065f0]" round icon="logout"></q-btn>
      <q-btn size="20px"  flat color="black" class="text-[#7065f0]" round icon="account_circle"></q-btn>
    </div>
    
  </div>
</template>

<script>
let store

export default {
  props: ['Signout'],
  created() {
    store = useHiveStore()
  },
  computed: {
    activeUser() {
      return store.activeUser
    }
  }
};
</script>

<style scoped>
.navigator_wrap {
  background: rgba(255, 255, 255, 0.488);
  backdrop-filter: blur(5px);
}
</style>
