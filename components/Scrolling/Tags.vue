<script setup>
let {
  data: tags,
  pending,
  error,
} = await useFetch("/api/skills", { lazy: true });
</script>

<template>
  <div v-if="!pending && !error" class="tags">
    <div class="tags__inner">
      <Tag v-for="tag in tags">{{ tag.name }}</Tag>
      <Tag v-for="tag in tags">{{ tag.name }}</Tag>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tags {
  @apply bg-neutral-950 p-3;

  width: 100%;
  overflow-x: clip;
  mask: linear-gradient(90deg, transparent, white 35%, white 65%, transparent);

  &__inner {
    @apply flex gap-2 justify-center flex-nowrap;

    animation: scrolling linear;
    animation-timeline: view();
  }

  &[data-direction="right"] .tags__inner {
    animation-direction: reverse;
    flex-direction: row-reverse;
  }
}

@media (max-width: 768px) {
  .tags {
    width: 100vw;

    &__inner {
      animation: scrolling 20s linear infinite;
    }
  }
}

@keyframes scrolling {
  to {
    transform: translateX(calc(-50% - 0.25rem));
  }
}
</style>
