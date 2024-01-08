<template>
   
    <div
        class=" px-4 py-3 navigator_wrap fixed top-0 left-0 w-full z-10 border-solid flex justify-between items-center ">
        <q-btn :to="{path: '/'}" size="15px" class="nav_back" flat  color="black"  round icon="arrow_back"></q-btn>
        <div>
            <q-btn size="15px" class="nav_back" flat  color="black"  round icon="tune"></q-btn>
        </div>

    </div>
</template>

<script>
let store

export default {
    props: ['Signout'],
    created() {
        store = useHiveStore()
    },
    computed: {
        activeUser() {
            return store.activeUser
        }
    }
};
</script>

<style scoped>
.navigator_wrap {
    background: transparent;
    /* backdrop-filter: blur(5px); */
}

.nav_back{
    background: rgba(255, 255, 255, 0.66);
    backdrop-filter: blur(5px);
}
</style>
