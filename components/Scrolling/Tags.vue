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
  mask: linear-gradient(90deg, transparent, white 35%, white 65%, transparent);

  &__inner {
    @apply flex gap-3 justify-center flex-nowrap;

    @media (prefers-reduced-motion: no-preference) {
      animation: scrolling linear;
      animation-timeline: view();
      animation-range: normal;
    }
  }

  &[data-direction="right"] .tags__inner {
    animation-direction: reverse;
    flex-direction: row-reverse;
  }
}
@keyframes scrolling {
  to {
    transform: translateX(calc(-20% - 0.5rem));
  }
}
</style>
