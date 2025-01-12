<template>
  <Transition name="slide">
    <div v-if="isVisible" class="dev-banner" role="alert">
      <div class="banner-content">
        <div class="message">
          <span class="tech">Built with Nuxt 3</span>
          <span class="divider">•</span>
          <span
            >Check out the
            <a
              href="https://github.com/Razzaghnoori/nuxt-portfolio"
              target="_blank"
              rel="noopener"
              class="source-link"
              aria-label="Source code"
              >source code</a
            >
          </span>
          <span class="divider hidden sm:block">•</span>
          <span class="lighthouse">
            Open DevTools (F12) to see Lighthouse scores
          </span>
        </div>
        <button
          @click="dismiss"
          class="dismiss-button"
          aria-label="Dismiss message"
        >
          <font-awesome :icon="['fas', 'xmark']" />
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";

const isVisible = ref(true);

const dismiss = () => {
  isVisible.value = false;
};
</script>

<style lang="scss" scoped>
.dev-banner {
  @apply flex w-screen text-white z-50 bg-gradient-to-r from-indigo-600 via-indigo-900 
  to-indigo-600 items-center justify-between border-b-4 border-indigo-500 text-base shadow-lg
  relative;
}

.banner-content {
  @apply max-w-7xl mx-auto px-6 py-3 flex flex-col items-center justify-center text-center;
}

.message {
  @apply flex items-center gap-4 flex-wrap justify-center;
}

.tech {
  @apply font-bold text-white bg-indigo-700 px-4 py-1.5 rounded-md
         shadow-sm hover:bg-indigo-600 transition-colors;
}

.divider {
  @apply text-indigo-400 font-bold;
}

.source-link {
  @apply text-white decoration-wavy underline ml-1
         underline-offset-4 transition-colors font-medium;
}

.lighthouse {
  @apply hidden sm:flex items-center bg-neutral-800 px-4 py-1.5 rounded-md
         text-neutral-50 font-medium;
}

.dismiss-button {
  @apply absolute right-4 top-1/2 -translate-y-1/2 p-4 
         text-indigo-300 hover:text-white transition-colors text-2xl;
}

// Transition animations
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
}

.slide-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
