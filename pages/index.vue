<template>
 
 <div class="h-[88vh] overflow-hidden overflow-y-scroll flex flex-col items-center gap-4  justify-center ">
  <img class="w-[70%]" src="@/assets/img/logo_full.png" alt="">
  <HomeLanguageSelect></HomeLanguageSelect>
 </div>
</template>

<script>
export default {
  data: () => ({
   
  }),
  setup(){
    definePageMeta({
        layout: 'home'
    })
  },

  methods: {
   
  },
};
</script>

<style scoped>
</style>
