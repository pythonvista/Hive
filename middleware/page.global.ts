export default defineNuxtRouteMiddleware((to, from) => {
  const getDepth = (path: string) => {
    return path.split('/').filter(seg => seg.length > 0).length;
  }

  const toDepth = getDepth(to.path);
  const fromDepth = getDepth(from.path);

  if (toDepth > fromDepth) {
    to.meta.pageTransition = { name: 'page-left' };
    from.meta.pageTransition = { name: 'page-left' };
  } else {
    to.meta.pageTransition = { name: 'page-right' };
    from.meta.pageTransition = { name: 'page-right' };
    }
    

    if (to.path !== from.path && process.client) {
         console.log(to.fullPath)
    window.scrollTo(0, 0)
  }
})