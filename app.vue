<template>
  <div class="md:container flex flex-col justify-center items-center">
    <ScrollingHeader />
    <div class="w-full overflow-hidden">
      <ScrollingTags />
      <ScrollingTags data-direction="right"/>
    </div>
    <Experience />
  </div>
</template>
<script setup>
useHead({
  title: "Mohammad Razzaghnoori",
  htmlAttrs: {
    lang: "en",
  },
  link: [
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
      content: "https://razzaghnoori.com",
    },
    {
      name: "og:type",
      content: "website",
    },
  ],
});
</script>
