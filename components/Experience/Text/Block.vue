<template>
  <div class="text-block-container">
    <div class="experience-meta">
      <span class="position">{{ position }}</span>
      <span class="duration">{{ duration }}</span>
    </div>
    <a :href="link" target="_blank" rel="noopener noreferrer">
      <h3>{{ title }} <span aria-hidden="true">↗</span></h3>
    </a>
    <p>{{ description }}</p>
    <div v-if="tags?.length" class="tags" aria-label="Technologies">
      <span v-for="tag in tags" :key="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: "Experience" },
  description: { type: String, default: "" },
  duration: { type: String, default: "" },
  position: { type: String, default: "" },
  link: { type: String, default: "#" },
  tags: { type: Array, default: () => [] },
});
</script>

<style lang="scss" scoped>
.text-block-container {
  @apply flex flex-col justify-center px-2 py-4 lg:px-0;

  .experience-meta {
    @apply flex flex-wrap gap-x-4 gap-y-2 text-sm;
  }

  .position {
    @apply font-semibold text-teal-300;
  }

  .duration {
    @apply text-slate-500;
  }

  h3 {
    @apply mt-5 text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-white transition-colors;

    &:hover {
      @apply text-teal-200;
    }

    span {
      @apply ml-2 text-lg text-teal-300;
    }
  }

  p {
    @apply mt-5 text-base sm:text-lg leading-8 text-slate-400;
  }

  .tags {
    @apply mt-7 flex flex-wrap gap-2;

    span {
      @apply rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300;
    }
  }
}
</style>
