<template>
  <section class="py-12 bg-white sm:py-16 lg:py-20">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-sm mx-auto">
        <div  class="text-center">
          <lord-icon v-if="$route.query.avatar" :src="'https://cdn.lordicon.com/' + avatar" trigger="loop" colors="primary:#121331,secondary:#6f64f0"
            style="width: 100px; height: 100px">
          </lord-icon>
          <h1 v-if="$route.query.type" class="mt-12 uppercase text-3xl font-bold text-gray-900">
            <span class="capitalize">{{ type }}</span> Login
          </h1>
          <p class="mt-4 text-sm font-medium text-gray-500">
            Login to your account and beign your journey.
          </p>
        </div>

        

        <form action="#" method="POST" class="mt-4">
          <div class="space-y-4">
            <div>
              <label for="" class="text-sm font-bold text-gray-900">
                Email
              </label>
              <div class="mt-2">
                <input type="email" name="" id="" placeholder="Email address" v-model="dform.email"
                  class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="" class="text-sm font-bold text-gray-900">
                  Password
                </label>

                <a href="#" title="" class="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                  Forgot Password?
                </a>
              </div>
              <div class="mt-2">
                <input type="password" name="" id="" placeholder="Password (min. 8 character)" v-model="dform.password"
                  class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
              </div>
            </div>

            <div class="relative flex items-center">
              <div class="flex items-center h-5">
                <input type="checkbox" name="remember-password" id="remember-password"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600" />
              </div>

              <div class="ml-3">
                <label for="remember-password" class="text-sm font-medium text-gray-900">
                  Remember Me
                </label>
              </div>
            </div>

            <div>
              <q-btn :loading="loading" :disable="!isValid" @click="Login"
                class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500">
                Sign in
              </q-btn>
            </div>
          </div>
        </form>

        <div class="mt-6 text-center">
          <p class="text-sm font-medium text-gray-900">
            Don't have an account?
            <a @click="
              $router.push({
                path: '/signup',
                query: { type: type, avatar: avatar },
              })
              " title="" class="font-bold hover:underline">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
let nuxt
let auth
export default {
  data: () => ({
    loading: false,
    avatar: '',
    type: '',
    dform: {
      email: '',
      password: '',
    },
    setup() {
      definePageMeta({
        layout: 'auth',
        middleware: ["auth"]
      });
    },
  }),
  computed: {
    isValid() {
      if (this.dform.email && this.dform.password) {
        return true;
      }

      return false;
    },
  },
  methods: {
    async Login() {
      this.loading = true
      try {
        await auth.login(this.dform.email, this.dform.password)
        this.$router.push({path: '/'})
        this.loading = false
      } catch (err) {
        this.loading = false
        ShowSnack('Error Logging In', 'negative')
        console.log(err)
      }
    }
  },
  created() {
    nuxt = useNuxtApp()
    auth = nuxt.$authfunc
    let store = useHiveStore()
    if (store.userData?.id) {
      this.$router.push({ path: '/' });
    }
    if (this.$route.query.type && this.$route.query.avatar) {
      this.avatar = this.$route.query.avatar;
      this.type = this.$route.query.type;
    }
  },
};
</script>

<style></style>
