<template>
  <section class="py-12 overflow-y-scroll bg-white sm:py-16 lg:py-20">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-sm mx-auto">
        <div class="flex flex-col text-center justify-center items-center gap-2">
          <h1 v-if="$route.query.continueReg" class="mt-12 text-2xl font-bold text-gray-900">
            Lets Finish Setting Your Profile
          </h1>
          <h1 v-else class="mt-12 text-2xl font-bold text-gray-900">
            Create Account
          </h1>
          <p class="mt-4 text-sm font-medium text-gray-500">
            Select an account type below
          </p>
          <q-btn-toggle v-model="type" color="[#6f64f0]" text-color="white" toggle-color="orange"
            toggle-text-color="black" rounded unelevated glossy :options="[
              { label: 'User', value: 'USER' },
              { label: 'Agent', value: 'AGENTS' },
              { label: 'Agency', value: 'AGENCY' },
              { label: 'Landlord', value: 'Landlord' }
            ]" />
        </div>


        

        <form action="#" method="POST" class="mt-12">
          <div class="space-y-4">
            <div>
              <label for="" class="text-sm font-bold text-gray-900">
                <span v-if="type == 'AGENCY'">Agency</span> Email
              </label>
              <div class="mt-2">
                <input :readonly="$route.query.continueReg" type="email" name="" v-model="dform.email" id=""
                  placeholder="Email address"
                  class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
              </div>
            </div>
            <div>
              <label for="" class="text-sm font-bold text-gray-900">
                <span v-if="type == 'AGENCY'">Agency Name</span>
                <span v-else>Fullname</span>
              </label>
              <div class="mt-2">
                <input type="text" v-model="dform.fullname" name="" id="" placeholder="Full Name"
                  class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
              </div>
            </div>
            <div>
              <label for="" class="text-sm font-bold text-gray-900">
                Username
              </label>
              <div class="mt-2">
                <input type="text" v-model="dform.username" name="" id="" placeholder="Username"
                  class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
              </div>
            </div>
            <div>
              <label for="" class="text-sm font-bold text-gray-900">
                <span v-if="type == 'AGENCY'">Agency</span> Phone
              </label>
              <div class="mt-2">
                <input type="phone" v-model="dform.phone" name="" id="" placeholder="Phone"
                  class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
              </div>
            </div>
            <div v-if="!$route.query.continueReg">
              <label for="" class="text-sm font-bold text-gray-900">
                Password
              </label>
              <div class="mt-2">
                <input type="password" name="" id="" v-model="dform.password" placeholder="Password (min. 8 character)"
                  class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
              </div>
            </div>

            <div class="relative flex items-center">
              <div class="flex items-center h-5">
                <input type="checkbox" v-model="dform.agree" name="remember-password" id="remember-password"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600" />
              </div>

              <div class="ml-3">
                <label for="remember-password" class="text-sm font-medium text-gray-900">
                  I agree to the
                  <a href="#" title="" class="text-indigo-600 hover:underline">Terms & Conditions</a>
                </label>
              </div>
            </div>

            <div>
              <q-btn v-if="!$route.query.continueReg" @click="Register()" :loading="loading" :disable="!isValid"
                class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500">
                Sign up
              </q-btn>
              <q-btn v-else @click="Continue()" :loading="loading" :disable="!isValid"
                class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500">
                Continue
              </q-btn>
            </div>
          </div>
        </form>

        <div v-if="!$route.query.continueReg" class="mt-6 text-center">
          <p class="text-sm font-medium text-gray-900">
            Already have an account?
            <a @click="
              $router.push({
                path: '/login',
                query: { type: type, avatar: avatar },
              })
              " title="" class="font-bold hover:underline">
              Login now
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
let nuxt;
let auth;
let store
export default {
  components: {

  },
  data: () => ({
    avatar: '',
    loading: false,
    type: '',
    dform: {
      email: '',
      fullname: '',
      username: '',
      password: '',
      phone: '',
      agree: '',
    },
  }),
  setup() {
    definePageMeta({
      layout: 'auth',
      middleware: ["auth"]
    });
  },
  computed: {
    isValid() {
      let continueReg = this.$route.query.continueReg
      console.log(continueReg)
      if (this.type == 'USER' && !continueReg) {
        if (
          this.dform.email &&
          this.dform.fullname &&
          this.dform.username &&
          this.dform.phone &&
          this.dform.password &&
          this.dform.agree
        ) {
          return true;
        }

        return false;
      }
      if (this.type == 'USER' && continueReg) {
        if (
          this.dform.email &&
          this.dform.fullname &&
          this.dform.username &&
          this.dform.phone &&
          this.dform.agree
        ) {
          return true;
        }

        return false;
      }
      if (this.type == 'AGENTS' && !this.$route.query.continueReg) {
        if (
          this.dform.email &&
          this.dform.fullname &&
          this.dform.username &&
          this.dform.phone &&
          this.dform.password &&
          this.dform.agree
        ) {
          return true;
        }

        return false;
      }
      if (this.type == 'AGENTS' && this.$route.query.continueReg) {
        if (
          this.dform.email &&
          this.dform.fullname &&
          this.dform.username &&
          this.dform.phone &&
          this.dform.agree
        ) {
          return true;
        }

        return false;
      }
      if (this.type == 'AGENCY' && !this.$route.query.continueReg) {
        if (
          this.dform.email &&
          this.dform.fullname &&
          this.dform.phone &&
          this.dform.username &&
          this.dform.password &&
          this.dform.agree
        ) {
          return true;
        }

        return false;
      }
      if (this.type == 'AGENCY' && this.$route.query.continueReg) {
        if (
          this.dform.email &&
          this.dform.fullname &&
          this.dform.phone &&
          this.dform.username &&
          this.dform.agree

        ) {
          return true;
        }

        return false;
      }
      if (this.type == 'LANDLORD' && !this.$route.query.continueReg) {
        if (
          this.dform.email &&
          this.dform.fullname &&
          this.dform.username &&
          this.dform.phone &&
          this.dform.password &&
          this.dform.agree
        ) {
          return true;
        }

        return false;
      }
      if (this.type == 'LANDLORD' && this.$route.query.continueReg) {
        if (
          this.dform.email &&
          this.dform.fullname &&
          this.dform.username &&
          this.dform.phone &&
          this.dform.agree
        ) {
          return true;
        }

        return false;
      }

      return false;
    },

  },
  mounted() {
    let session = auth.UserState()
    this.CheckUser(session)
  },
  created() {
    nuxt = useNuxtApp();
    store = useHiveStore()
    auth = nuxt.$authfunc;
    let session = auth.UserState()
    
    if (this.$route.query.type && this.$route.query.avatar) {
      this.avatar = this.$route.query.avatar;
      this.type = this.$route.query.type;
    } else if (this.$route.query.continueReg && session?.currentUser?.uid) {
      this.dform.email = session?.currentUser?.email
      this.type = ''
      this.avatar = ''
    }
  },
  methods: {
    async Register() {
      try {
        this.loading = true;
        const res = await auth.signup(this.dform.email, this.dform.password);
        if (res.user.uid) {
          delete this.dform['agree']
          delete this.dform['password']
          this.dform.id = res.user.uid
          this.dform.account = this.type
          const res2 = await UseFetch.post(`/client`, this.dform, { "Authorization": res.user.accessToken })
          if (res2.ok) {
            ShowSnack('Registration Complete', 'positive');
            this.$router.push({ path: '/' })
          }
        }
        this.loading = false;
      } catch (err) {
        console.log(err);
        this.loading = false;
      }
    },
    async Continue() {
      try {

        let session = auth.UserState()
        let uid = session.currentUser.uid
        this.loading = true
        delete this.dform['agree']
        delete this.dform['password']
        this.dform.id = uid
        this.dform.account = this.type
        const res = await UseFetch.post(`/client`, this.dform, { "Authorization": session.currentUser.accessToken })
        if (res.ok) {
          ShowSnack('Profile Updated', 'positive')
          this.$router.push({ path: '/' })
        }
      } catch (err) {
        console.log(err)
        this.loading = false
        ShowSnack('Error Occured', 'negative')
      }
    },
    async CheckUser(session) {
      try {
        const res = await AuthHandler(session?.currentUser?.uid, session?.currentUser?.accessToken )
        console.log(res)
        if (res.success == true) {
          this.$router.push({path: '/'})
        }

      } catch (err) {
        console.log(err)
      }

    }
  },
};
</script>

<style></style>
