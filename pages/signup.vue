<template>
  <section class="py-12 overflow-y-scroll bg-white sm:py-16 lg:py-20">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-sm mx-auto">
        <div class="text-center">
          <lord-icon
            :src="'https://cdn.lordicon.com/' + avatar"
            trigger="loop"
            colors="primary:#121331,secondary:#6f64f0"
            style="width: 100px; height: 100px"
          >
          </lord-icon>
          <h1 class="mt-12 text-3xl font-bold text-gray-900">
            Create <span v-if="type == 'USER' || type == 'LANDLORD'">a </span>
            <span v-else>an </span>
            <span class="lowercase">{{ type }}</span> account
          </h1>
          <p class="mt-4 text-sm font-medium text-gray-500">
            Say goodbye to the stress of finding the perfect place to stay.
          </p>
        </div>

        <div v-if="type == 'USER'" class="mt-12">
          <button
            type="button"
            class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
          >
            <img
              class="w-5 h-5 mr-2"
              src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/sign-in/1/google-logo.svg"
              alt=""
            />
            Sign up with Google
          </button>
        </div>

        <div v-if="type == 'USER'" class="relative mt-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200"></div>
          </div>

          <div class="relative flex justify-center">
            <span class="px-2 text-sm text-gray-400 bg-white"> or </span>
          </div>
        </div>

        <form action="#" method="POST" class="mt-4">
          <div class="space-y-4">
            <div>
              <label for="" class="text-sm font-bold text-gray-900">
                <span v-if="type == 'AGENCY'">Agency</span> Email
              </label>
              <div class="mt-2">
                <input
                  type="email"
                  name=""
                  v-model="dform.email"
                  id=""
                  placeholder="Email address"
                  class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                />
              </div>
            </div>
            <div>
              <label for="" class="text-sm font-bold text-gray-900">
                <span v-if="type == 'AGENCY'">Agency Name</span>
                <span v-else>Fullname</span>
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  v-model="dform.fullname"
                  name=""
                  id=""
                  placeholder="Full Name"
                  class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                />
              </div>
            </div>
            <div
              v-if="type == 'USER' || type == 'AGENTS' || type == 'LANDLORD'"
            >
              <label for="" class="text-sm font-bold text-gray-900">
                Username
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  v-model="dform.username"
                  name=""
                  id=""
                  placeholder="Username"
                  class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                />
              </div>
            </div>
            <div>
              <label for="" class="text-sm font-bold text-gray-900">
                <span v-if="type == 'AGENCY'">Agency</span> Phone
              </label>
              <div class="mt-2">
                <input
                  type="phone"
                  v-model="dform.phone"
                  name=""
                  id=""
                  placeholder="Phone"
                  class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                />
              </div>
            </div>
            <div v-if="type == 'AGENTS' || type == 'AGENCY'">
              <label for="" class="text-sm font-bold text-gray-900">
                Country of specialization
              </label>
              <div class="relative mt-2">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-globe"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"
                    />
                  </svg>
                </div>

                <select
                  v-model="dform.country"
                  class="block w-full py-3 pl-12 pr-10 border-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                >
                  <option value="">Select a country</option>
                  <option value="nigeria">Nigeria</option>
                </select>
              </div>
            </div>
            <div v-if="type == 'AGENTS' || type == 'AGENCY'">
              <label for="" class="text-sm font-bold text-gray-900">
                State of specialization
              </label>
              <div class="relative mt-2">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <select
                  v-model="dform.state"
                  class="block w-full py-3 pl-12 pr-10 border-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                >
                  <option value="">Select a state</option>
                  <option value="ekiti">Ekiti State</option>
                </select>
              </div>
            </div>

            <div>
              <label for="" class="text-sm font-bold text-gray-900">
                Password
              </label>
              <div class="mt-2">
                <input
                  type="password"
                  name=""
                  id=""
                  v-model="dform.password"
                  placeholder="Password (min. 8 character)"
                  class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                />
              </div>
            </div>

            <div class="relative flex items-center">
              <div class="flex items-center h-5">
                <input
                  type="checkbox"
                  v-model="dform.agree"
                  name="remember-password"
                  id="remember-password"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                />
              </div>

              <div class="ml-3">
                <label
                  for="remember-password"
                  class="text-sm font-medium text-gray-900"
                >
                  I agree to the
                  <a href="#" title="" class="text-indigo-600 hover:underline"
                    >Terms & Conditions</a
                  >
                </label>
              </div>
            </div>

            <div>
              <q-btn
                :disable="!isValid"
                class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
              >
                Sign up
              </q-btn>
            </div>
          </div>
        </form>

        <div class="mt-6 text-center">
          <p class="text-sm font-medium text-gray-900">
            Already have an account?
            <a
              @click="
                $router.push({
                  path: '/login',
                  query: { type: type, avatar: avatar },
                })
              "
              title=""
              class="font-bold hover:underline"
            >
              Login now
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    avatar: '',
    type: '',
    dform: {
      email: '',
      fullname: '',
      username: '',
      password: '',
      phone: '',
      agree: '',
      country: '',
      state: '',
    },
  }),
  setup() {
    definePageMeta({
      layout: 'home',
    });
  },
  computed: {
    isValid() {
      if (this.$route.query.type == 'USER') {
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
      if (this.$route.query.type == 'AGENTS') {
        if (
          this.dform.email &&
          this.dform.fullname &&
          this.dform.username &&
          this.dform.phone &&
          this.dform.password &&
          this.dform.agree &&
          this.dform.country &&
          this.dform.state
        ) {
          return true;
        }

        return false;
      }
      if (this.$route.query.type == 'AGENCY') {
        if (
          this.dform.email &&
          this.dform.fullname &&
          this.dform.phone &&
          this.dform.password &&
          this.dform.agree &&
          this.dform.country &&
          this.dform.state
        ) {
          return true;
        }

        return false;
      }
      if (this.$route.query.type == 'LANDLORD') {
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

      return false;
    },
  },
  created() {
    if (this.$route.query.type && this.$route.query.avatar) {
      this.avatar = this.$route.query.avatar;
      this.type = this.$route.query.type;
    } else {
      ShowSnack('Missing Registration Role!', 'negative');
      this.$router.push({ path: '/' });
    }
  },
};
</script>

<style></style>
