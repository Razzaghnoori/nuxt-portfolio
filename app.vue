<template>
  <div class="site-shell">
    <DevBanner />
    <div class="site-content">
      <ScrollingHeader />
      <div class="skill-band" aria-label="Core skills">
        <ScrollingTags />
        <ScrollingTags data-direction="right" />
      </div>
      <Experience />
      <Review />
      <Education />
    </div>
    <Footer />
  </div>
  <Analytics />
</template>

<script setup>
import { Analytics } from "@vercel/analytics/nuxt";

useHead({
  title: "Mohammad Razzaghnoori · Senior Frontend Engineer",
  htmlAttrs: { lang: "en" },
  link: [
    { rel: "canonical", href: "https://razzaghnoori.com/" },
    { rel: "preload", as: "image", href: "/images/profile.webp" },
    { rel: "icon", href: "/images/favicon.webp", type: "image/webp" },
  ],
  script: [{ src: "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js", type: "text/javascript", defer: true }],
  meta: [
    { name: "description", content: "Mohammad Razzaghnoori is a senior frontend engineer specialising in Vue, Nuxt, TypeScript, e-commerce performance, and reliable product experiences." },
    { name: "keywords", content: "Mohammad Razzaghnoori, senior frontend engineer, Nuxt, Vue, TypeScript, e-commerce, performance" },
    { property: "og:title", content: "Mohammad Razzaghnoori · Senior Frontend Engineer" },
    { property: "og:description", content: "Frontend architecture, product thinking, and measurable outcomes." },
    { property: "og:image", content: "https://razzaghnoori.com/images/profile.webp" },
    { property: "og:url", content: "https://razzaghnoori.com/" },
    { property: "og:type", content: "website" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
  ],
});
</script>

<style scoped>
.site-shell { width: 100%; min-height: 100vh; background: radial-gradient(circle at 78% 8%, rgba(109, 40, 217, 0.2), transparent 28rem), #020617; }
.site-content { display: flex; flex-direction: column; align-items: center; }
.skill-band { width: 100%; overflow: hidden; }
</style>
