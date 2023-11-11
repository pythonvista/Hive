<template>
  <div class="h-screen relative home_wrap">
    <UtilsNavigator class="sticky top-0 left-0"></UtilsNavigator>
    <slot />
    <UtilsFooter></UtilsFooter>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home_wrap {
  overflow-y: scroll !important;
}
</style>
