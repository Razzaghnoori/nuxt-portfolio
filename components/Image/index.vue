<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    class="fancy-image"
    :loading="lazy ? 'lazy' : 'eager'"
  />
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "An image showing Mohammad Razzaghnoori",
  },
  lazy: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
@keyframes fade-in-out {
  from {
    opacity: 0;
    scale: 0.8;
  }
  30% {
    opacity: 1;
    scale: 1;
  }
  70% {
    opacity: 1;
    scale: 1;
  }
  to {
    opacity: 0;
    scale: 0.8;
  }
}

.fade-in-out {
  animation: fade-in-out ease-in-out;
  animation-timeline: view();
}

.fancy-image {
  @apply aspect-auto rounded-xl shadow-md fade-in-out;
  max-height: 75vh;
  object-fit: contain;
  max-width: 95%;
  max-height: 70vh;
}
</style>
