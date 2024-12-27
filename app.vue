<template>
  <div class="md:container flex flex-col justify-center items-center m-10">
    <ScrollingHeader />
    <div class="w-full">
      <ScrollingTags />
      <ScrollingTags data-direction="right" />
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
