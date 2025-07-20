// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: [
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxtjs/google-fonts",
    "@vesp/nuxt-fontawesome",
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

  robots: {
    sitemap: "https://razzaghnoori.com/sitemap.xml",
  },
  css: ["~/assets/css/main.css"],
  router: {
    options: {
      strict: false
    }
  },
  googleFonts: {
    families: {
      Schoolbell: ["400"],
    },
    display: "swap",
    preload: true,
    text: "(if you want, no pressure)",
  },
  fontawesome: {
    icons: {
      brands: ["linkedin", "github", "instagram", "twitter", "stack-overflow"],
      solid: ["faChevronLeft", "faChevronRight", "faGaugeHigh", "faXmark"],
    },
  },
});
