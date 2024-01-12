<template>
    <div>
        <div class=" py-1 my-2 overflow-hidden">
            <h2 class="text-2xl my-2 font-bold">Location</h2>
            <div v-if="!sheet" class="h-48 relative bg-white rounded-md shadow w-full" id="map">
                <div class="absolute top-2 right-3 z-[1000]">
                    <q-btn @click="openMap" icon="open_in_full" round></q-btn>
                </div>
            </div>

        </div>
        <q-dialog v-model="sheet" persistent :maximized="true" transition-show="slide-up" transition-hide="slide-down">
            <q-card class="bg-white text-black">

                <q-card-section class="p-0 m-0">
                    <PropertyViewMap :Close="Close" :coords="coords" :location="location"></PropertyViewMap>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    props: ['coords', 'location'],
    data: () => ({
        map: null,
        map2: null,
        sheet: false,
        adMarker: null,
        adIcon:
            'https://firebasestorage.googleapis.com/v0/b/secretroom-98166.appspot.com/o/map-marker-blue.svg?alt=media&token=bda4878c-a42a-48f5-8baa-400644fa0263',
        tooltip: null,
        markers: null,
    }),

    methods: {
        InitMap() {
            let layurl = 'http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}';
            this.map = L.map('map').setView(this.coords, 17);
            L.tileLayer(layurl, {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            }).addTo(this.map);
            this.PlotLocation()
        },
        PlotLocation() {
            const customMarker = L.icon({
                iconUrl: this.adIcon,
                iconSize: [35, 35],

                // size of the icon
            });
            this.clientMarker = L.marker(this.coords, {
                icon: customMarker,
                draggable: false,
            }).addTo(this.map);
            let circle = L.circle(this.coords, { radius: 40 }).addTo(this.map);

            this.tooltip = L.tooltip()
                .setLatLng(this.coords)
                .setContent(`😍 ${this.location} `)
                .addTo(this.map);
        },
        parseHTML(html) {
            var t = document.createElement('template');
            t.innerHTML = html;
            return t.content;
        },
        openMap() {
            this.sheet = true
            this.map.off();
            this.map.remove();
        },
        Close() {
            this.sheet = false
            setTimeout(() => {
                this.InitMap()
            }, 2000)

        }
    },

    mounted() {
        this.InitMap()
    }
}
</script>

<style></style>