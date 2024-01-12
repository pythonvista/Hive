<template>
  <section class="px-3 bg-slate-100 pt-3 pb-5">
    <property-view-hero></property-view-hero>
    <property-view-about-property></property-view-about-property>
    <property-view-gallery></property-view-gallery>
    <property-view-property-location :coords="[7.7152008, 5.2575367]" :location="'Comfort Hostel Osekita'"></property-view-property-location>
    <property-view-agent-contact></property-view-agent-contact>
    <property-view-property-details></property-view-property-details>
    <property-view-review></property-view-review>
    <property-view-popular-places></property-view-popular-places>
    <div class="mt-4">
      <div class="flex items-center justify-between mb-2">
        <p class="text-base font-medium text-slate-700 my-2">Price:</p>
        <h3 class="text-xl font-semibold text-red-400 my-2">N200,000</h3>
      </div>
      <div class="flex items-center justify-between">
        <q-btn round size="12px" outline color="red" icon="favorite"></q-btn>
        <button
          class="border w-4/5 py-2 rounded-lg bg-red-400 text-white text-base"
        >
          Schedule Tour
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({}),
  setup() {
    definePageMeta({
      layout: "home",
    });
  },
};
</script>
<style scoped></style>
