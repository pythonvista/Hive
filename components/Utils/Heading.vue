<template>
  <div class="w-full text-center text-xl font-serif font-light text-black">
    <p>{{title ? title : '*********'}}</p>

  </div>
</template>

<script>
export default {
    props:['title']
}
</script>

<style>

</style>