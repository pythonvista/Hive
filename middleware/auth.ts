

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('middleware/auth')
  console.log('to', to)
  console.log('from', from)
    const nuxt = useNuxtApp()
    let auth = nuxt.$authfunc
    let user = auth.UserState()
//      if (process.server) return
//   // skip middleware on client side entirely
//     if (process.client) {
      
//   }
  // or only skip middleware on initial client load
 
    if (process.client && nuxt.isHydrating && nuxt.payload.serverRendered) { 
        if (to.path == '/signup' && user.currentUser && !to.query.continueReg) {
            return abortNavigation()
        }

        if (to.path == '/login' && !user.currentUser) {
            return navigateTo('/')
        }
    } 
    
//      if (to.params.id === '1') {
//     
//   }
//   return navigateTo('/')
})