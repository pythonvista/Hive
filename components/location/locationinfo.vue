<template>
  <section class="px-3 pb-20">
    <UtilsLocationHero></UtilsLocationHero>
    <UtilsLocationAgent></UtilsLocationAgent>
    <UtilsLocationGrid></UtilsLocationGrid>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.price {
  background: rgba(34, 34, 34, 0.5);
  padding: 5px 10px;
  border-radius: 10px;
}
@media (max-width: 350px) {
  .houseGrid {
    grid-template-columns: 1fr !important;
  }
}
</style>
