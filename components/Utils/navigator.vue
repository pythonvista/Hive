<template>
  <div
    class="border-b-2 px-3 navigator_wrap z-10 border-solid flex justify-between items-center border-gray-200 shadow h-[7vh]"
  >
    <img
      @click="$router.push({ path: '/' })"
      class="h-full"
      src="@/assets/img/logo.png"
      alt=""
    />
    <q-btn flat color="black" class="text-[#7065f0]" round icon="info"></q-btn>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navigator_wrap {
  background: rgba(255, 255, 255, 0.488);
  backdrop-filter: blur(5px);
}
</style>
