<template>
  <DevBanner />
  <div class="md:container flex flex-col justify-center items-center mb-20">
    <ScrollingHeader />
    <div class="w-full overflow-hidden sm:overflow-visible">
      <ScrollingTags />
      <ScrollingTags data-direction="right"/>
    </div>
    <Experience />
    <Review />
    <Education />
  </div>
  <Footer/>
  <Analytics />
</template>
<script setup>
import { Analytics } from '@vercel/analytics/nuxt';

useHead({
  title: "Mohammad Razzaghnoori",
  htmlAttrs: {
    lang: "en",
  },
    link: [
    {
      rel: "canonical",
      href: "https://razzaghnoori.com/",
    },
    {
      rel: "preload",
      as: "image/webp",
      href: "/images/profile.webp",
    },
    {
      rel: "icon",
      href: "/images/favicon.webp",
      type: "image/webp",
    },
  ],
  script: [
    {
      src: "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js",
      type: "text/javascript",
      defer: true, // Ensures the script loads after the HTML is parsed
    },
  ],
  meta: [
    { charset: "utf-8" },
    {
      name: "description",
      content: "Mohammad Razzaghnoori's Portfolio created in Nuxt.js",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "keywords",
      content:
        "mohammad razzaghnoori, portfolio, nuxt.js, vue.js, fontend developer, full-stack developer, web developer",
    },
    {
      name: "og:title",
      content: "Mohammad Razzaghnoori",
    },
    {
      name: "og:description",
      content: "Mohammad Razzaghnoori's Portfolio created in Nuxt.js",
    },
    {
      name: "og:image",
      content: "/images/profile.webp",
    },
    {
      name: "og:url",
      content: "https://razzaghnoori.com/",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "googlebot",
      content: "index, follow",
    },
  ],
});
</script>
