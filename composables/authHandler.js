
let store;
export const AuthHandler = async (id, token) => {
  let nuxt = useNuxtApp();
  store = useHiveStore();
  try {
    
    const res = await UseFetch.get(`/client/${id}`, { 'Authorization': token })
    const data = await res.json()
    console.log(data)
    if (res.ok) {
      store.SetActiveUser(id, true);
      let userData = data.data
      store.SetUserData(userData);
      store.SetAccessToken(token)
      return { success: true, msg: 'User  Authenticated', account: userData.account};
    } else {
      throw {success: false, res}
    }    
  } catch (err) {
    console.log(err)
    if (err?.res?.status == 404) {
      return {success: false, msg: 'No Profile For User', account: 'none', erType: 100}
    }
    return { success: false, msg: 'Error Occured Try Again', account: 'none', erType: 101 };
  }
};

export const AuthHandlerMini = async (id) => {
  let nuxt = useNuxtApp();
  store = useHiveStore();
  let crud = nuxt.$crud;
  try {
    store.SetActiveUser(id, true);
    const res = await crud.getSingleDoc('USERS', id);
    store.SetUserData(res.data());
    return { success: true };
  } catch (err) {
    console.log(err);
  }
};

function RouteUser(usertype, router) {
  switch (usertype) {
    case 'client':
      router.push({ path: '/client' });
      break;

    case 'advertiser':
      router.push({ path: '/advertiser' });
      break;

    case 'agency':
      router.push({ path: '/agency' });
      break;
    case 'admin':
      router.push({ path: '/admin' });
      break;
    default:
      ShowSnack('Cannot Route User. Registration Type Missing', 'negative');
        router.push({ path: '/' });
      break;
  }
}
