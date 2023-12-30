// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: 'HIVE',
      meta: [
        {
          name: 'description',
          content: 'HIVE',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
          integrity: 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=',
          crossorigin: '',
        },
      ],
      script: [
        {
          src: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
          type: 'text/javascript',
          integrity: 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=',
          crossorigin: '',
          async: true,
        },
        {
          type: 'text/javascript',
          crossorigin: '',
          async: true,
          src: 'https://cdn.lordicon.com/bhenfmcm.js',
        },
        {
          src: 'https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js',
          type: 'text/javascript',
          crossorigin: '',
          async: true,
        },
      ],
    },
  },
  runtimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-quasar-ui',
    // '@vite-pwa/nuxt',
  ],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  quasar: {
    plugins: ['Notify', 'Dialog'],
  },
  plugins: [
    { src: '~/plugins/useVuetify.js', mode: 'client' },
    { src: '~/plugins/useBus.js', mode: 'client' },
  ],

  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  // pwa: {
  //   meta: {
  //     name: "abc",
  //     author: "abc Inc",
  //     description: "abc desc",
  //   },
  //   manifest: {
  //     name: 'PropertyHive',
  //     short_name: 'HIVE',
  //     description: 'property hive',
  //     icons: [
  //       {
  //         src: 'icons/64x64.png',
  //         sizes: '64x64',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'icons/144x144.png',
  //         sizes: '144x144',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'icons/192x192.png',
  //         sizes: '192x192',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'icons/512x512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //       },
  //     ],
  //     // lang: "en",
  //     // useWebmanifestExtension: false,
  //     start_url: '/',
  //     display: 'standalone',
  //     // background_color: "#fff3e0",
  //     // theme_color: "#fff3e0",
  //   },
  //   workbox: {
  //     navigateFallback: '/',
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: 'module',
  //   },
  // },
});
