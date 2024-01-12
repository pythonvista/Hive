<template>
    <div class="min-h-screen relative" id="map">
        <div class="absolute top-2 right-3 z-[1000]">
            <q-btn @click="CloseMap" icon="close" round></q-btn>
        </div>
    </div>
</template>

<script>
export default {
    props: ['coords', 'location', 'Close'],
    data: () => ({
        sheet: false,
        adMarker: null,
        map: null,
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
        CloseMap() {
            console.log('hello')
            this.map.off();
            this.map.remove();
            this.Close()
        }
    },

    mounted() {
        this.InitMap()
    }

}
</script>

<style></style>