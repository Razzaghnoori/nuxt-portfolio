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
      rel: "image",
      href: "/images/profile.avif",
      sizes: "(max-width: 1000px)",
      type: "image/avif",
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
  ],
});
</script>
