export default defineNuxtRouteMiddleware((to, from) => {
  // Ensure we're not redirecting unnecessarily
  if (to.path === '/index.html') {
    return navigateTo('/', { redirectCode: 301 })
  }
  
  // Handle any trailing slash issues
  if (to.path !== '/' && to.path.endsWith('/')) {
    return navigateTo(to.path.slice(0, -1), { redirectCode: 301 })
  }
}) 