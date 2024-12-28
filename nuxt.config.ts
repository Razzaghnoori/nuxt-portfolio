// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: [
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxtjs/google-fonts",
  ],
  devtools: { enabled: true },
  dev: process.env.NODE_ENV !== "production",
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: {
    url: "https://razzaghnoori.com",
    name: "Mohammad Razzaghnoori",
  },
  sitemap: {
    minify: true,
    routes: async () => {
      const staticRoutes = ["/"];
      return staticRoutes; // Add dynamic routes in case they exist in the future
    },
  },
  robots: {
    sitemap: "/sitemap.xml",
  },
  css: ["~/assets/css/main.css"],
  router: {
    trailingSlash: false,
  },
  googleFonts: {
    families: {
      Schoolbell: ["400"],
    },
    display: "swap",
    preload: true,
    text: "(if you want, no pressure)",
  },
});
