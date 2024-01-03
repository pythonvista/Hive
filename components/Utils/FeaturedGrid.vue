<template>
    <section class="">
        <p class="text-2xl my-2 font-bold">Top Apartments</p>
        <div class="grid grid-cols-2 gap-6  sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="i in 8" :key="i" class="relative flex h-[250px] p-1 flex-col w-full overflow-hidden bg-gray-100 shadow group rounded-2xl">
                <div class=" rounded-2xl relative  h-[75%]  overflow-hidden ">
                    <div class="absolute top-2 z-[1] right-2">
                        <q-btn round size="9px" outline color="red" icon="favorite"></q-btn>
                    </div>
                    <img class="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
                        src="https://i.imgur.com/BA15PPk.jpg" alt="" />
                </div>
                <div class="h-[25%] flex flex-col px-2 justify-center text-black text-left">
                    <p class="font-bold text-md">Joy Heritage Hostel</p>
                    <p>120k</p>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style></style>