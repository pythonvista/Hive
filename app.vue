<template>
    <VitePwaManifest /> 
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
      
</template>

<script>
export default {};
</script>

<style>
html {
  scroll-behavior: smooth !important;
}

.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 120ms linear;
}

.page-left-enter-from, .page-right-leave-to {
  transform: translateX(100%);
}

.page-left-leave-to, .page-right-enter-from {
  transform: translateX(-100%);
}

.page-left-enter-to, .page-right-enter-to {
  transform: translateX(0);
}

</style>
