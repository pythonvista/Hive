<template>
  <section class="px-6 bg-white h-full py-3">
    <agent-view-agent></agent-view-agent>
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
