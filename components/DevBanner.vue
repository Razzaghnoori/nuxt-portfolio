<template>
  <Transition name="slide">
    <div v-if="isVisible" class="dev-banner" role="alert">
      <div class="banner-content">
        <div class="message">
          <span class="tech">Built with Nuxt 3</span>
          <span class="divider">•</span>
          <span>Check out the
            <a
              href="https://github.com/Razzaghnoori/nuxt-portfolio"
              target="_blank"
              rel="noopener"
              class="source-link"
              aria-label="Source code"
            >source code</a>
          </span>
          <span class="divider hidden sm:block">•</span>
          <button 
            @click="showLighthouseInstructions" 
            class="lighthouse"
            aria-label="Show Lighthouse instructions"
          >
            Check Lighthouse Scores
            <font-awesome :icon="['fas', 'gauge-high']" class="ml-2" />
          </button>
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

  <!-- Lighthouse Instructions Modal -->
  <Transition name="fade">
    <div v-if="showInstructions" class="instructions-modal" @click="showInstructions = false">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">How to Check Lighthouse Scores</h3>
        <ol class="steps-list">
          <li>Press <kbd>F12</kbd> or right-click and select "Inspect"</li>
          <li>Click on the "Lighthouse" tab in DevTools</li>
          <li>Select categories you want to analyze</li>
          <li>Click "Analyze page load"</li>
        </ol>
        <button 
          @click="showInstructions = false"
          class="close-modal"
          aria-label="Close instructions"
        >
          Got it!
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";

const isVisible = ref(true);
const showInstructions = ref(false);

const dismiss = () => {
  isVisible.value = false;
};

const showLighthouseInstructions = () => {
  showInstructions.value = true;
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
         text-neutral-50 font-medium hover:bg-neutral-700 transition-colors;
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

// Modal styles
.instructions-modal {
  @apply fixed inset-0 bg-black/50 flex items-center justify-center z-50
         backdrop-blur-sm p-4;
}

.modal-content {
  @apply bg-white rounded-lg p-6 max-w-md w-full shadow-xl
         transform transition-all;
}

.modal-title {
  @apply text-xl font-bold text-gray-900 mb-4;
}

.steps-list {
  @apply space-y-3 text-gray-700 list-decimal list-inside mb-6;
  
  li {
    @apply pl-2;
  }
  
  kbd {
    @apply px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-100 
           border border-gray-200 rounded-lg shadow-sm;
  }
}

.close-modal {
  @apply w-full py-2 px-4 bg-indigo-600 text-white rounded-md
         hover:bg-indigo-700 transition-colors font-medium;
}

// Modal transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
