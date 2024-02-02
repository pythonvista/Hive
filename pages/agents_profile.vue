<template>
  <section class="px-6 bg-white h-full pt-3 pb-5">
    <agent-view-agent-profile></agent-view-agent-profile>
  </section>
</template>

<script>
export default {
  data: () => ({
    sheet: true,
  }),
  setup() {
    definePageMeta({
      layout: "home",
    });
  },
};
</script>

<style scoped></style>
