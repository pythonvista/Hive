<template>
    <section class="py-10 bg-gray-100 shadow-md sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="lg:max-w-3xl">
                <h2 class="text-2xl font-bold leading-tight text-gray-900 ">Customers Requets
                </h2>

                <div class="mt-2">
                    <blockquote>

                        <p v-if="index != 0 && index % 2 == 0"
                            class="text-2xl leading-relaxed text-black md:leading-relaxed md:text-xl">“I need of a Room Self
                            Contain Apartment at Adebayo My Budget is 200k and am student”</p>
                        <p v-else class="text-2xl leading-relaxed text-black md:leading-relaxed md:text-xl">“I am in need of of a
                            room mate, its a 2bedroom flat in Basiri”</p>
                    </blockquote>

                </div>
                <div class="flex flex-row my-5 justify-start items-center gap-3">
                    <img class=" w-20 h-20 rounded-full"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-1.jpg" alt="" />
                    <div class="">
                        <p class="text-lg font-semibold text-black">Precious Kunu</p>
                        <p class="ml-3 text-lg text-gray-600">Student</p>
                    </div>
                </div>

            </div>
        </div>

    </section>
</template>

<script>
export default {
    props: ['index']
}
</script>

<style></style>