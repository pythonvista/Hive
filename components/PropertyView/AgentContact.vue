<template>
  <section class="py-3">
    <div class="border border-gray-300 border-solid p-6">
      <h2 class="text-2xl my-5 font-bold">Contact to Agent</h2>
      <div class="flex items-center mb-5 gap-10">
        <img
          src=""
          alt=""
          class="border border-solid border-gray-600 rounded-full h-16 w-16"
        />
        <div class="flex flex-col gap-1">
          <span class="text-xl font-bold">Leslie Alexander</span>
          <span class="text-sm font-medium">Rich Capital Properties LLC</span>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-2 gap-4 mb-4 items-center">
          <button
            class="bg-gray-300 w-full py-2 rounded-md flex items-center gap-2 justify-center"
          >
            <q-btn round size="9px" outline color="red" icon="chat"></q-btn>
            Message
          </button>
          <button
            class="bg-gray-300 w-full py-2 rounded-md flex items-center gap-2 justify-center"
          >
            <q-btn round size="9px" outline color="red" icon="call"></q-btn>
            Phone
          </button>
        </div>
        <button
          class="bg-gray-300 w-full py-2 rounded-md flex items-center gap-2 justify-center"
        >
          <q-btn round size="9px" outline color="red" icon="message"></q-btn>
          Ask a question
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
