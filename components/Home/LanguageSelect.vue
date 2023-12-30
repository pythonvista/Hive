<template>
  <div class="w-full px-5">
    <UtilsHeading :title="'Select Language'"></UtilsHeading>
    <div
      @click="lang = lan.value"
      :class="{
        'border-2 border-solid border-[#6f64f0]': lan.value == lang,
        'border-2 border-gray-100': lan.value != lang,
      }"
      class="mb-2 py-3 px-3 mt-3 gap-4 flex rounded-lg bg-white text-sm font-medium shadow-sm"
      v-for="(lan, index) in langs"
      :key="index"
    >
      <q-radio
        v-model="lang"
        color="#6f64f0"
        :val="lan.value"
        :label="lan.label"
      />
    </div>
    <div class="flex mt-3 justify-center items-center">
      <q-btn
        :loading="loading"
        @click="SetLang"
        color="#6f64f0"
        class="bg-[#6f64f0]"
        >Continue</q-btn
      >
    </div>
  </div>
</template>

<script>
let store;
export default {
  data: () => ({
    lang: 'eng',
    loading: false,
    langs: [
      { label: 'English', value: 'eng' },
      { label: 'Yoruba', value: 'yor' },
      { label: 'Hausa', value: 'hau' },
      { label: 'Igbo', value: 'igb' },
    ],
  }),
  methods: {
    SetLang() {
      this.loading = true;
      setTimeout(() => {
        store.SetSystemLang(this.lang);
        this.loading = false;
        ShowSnack('Language Set Successsfully!', 'positive');
      }, 3000);
    },
  },
  created() {
    store = useHiveStore();
  },
};
</script>

<style></style>
