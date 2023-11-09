<template>
  <div
    class="h-[88vh] overflow-hidden overflow-y-scroll flex flex-col items-center gap-4 justify-center"
  >
    <img class="w-[70%]" src="@/assets/img/logo_full.png" alt="" />
    <HomeLanguageSelect v-if="!Lang"></HomeLanguageSelect>
    <HomeGetStarted v-else></HomeGetStarted>
  </div>
</template>

<script>
let store;
export default {
  data: () => ({}),
  setup() {
    definePageMeta({
      layout: 'home',
    });
  },
  computed: {
    Lang() {
      return store.systemLanguage;
    },
  },
  created() {
    store = useLoungeStore();
    console.log(store.systemLanguage);
    let lang = localStorage.getItem('systemLang') || '';
    store.SetSystemLang(lang);
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
