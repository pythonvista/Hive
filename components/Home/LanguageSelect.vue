<template>
  <div class="w-full px-5">
    <UtilsHeading :title="'Select Language'"></UtilsHeading>
    <div class="mb-2 py-3 px-3 mt-3 gap-4 flex rounded-lg border border-gray-100 bg-white text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500" v-for="(lan, index) in langs" :key="index">
      <input
        type="radio"
        name="language"
        class="peer "
      />

     
       

        <p class="text-gray-900">
        {{lan}}
        </p>
  
    </div>
    <div class="flex justify-center items-center">
        <q-btn >Continue</q-btn>
    </div>
   
  </div>
</template>

<script>
export default {
  data: () => ({
    lang: 'English',
    langs: ['English', 'Yoruba', 'Hausa', 'Igbo'],
  }),
};
</script>

<style></style>
