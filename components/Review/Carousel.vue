<template>
  <div class="carousel-container">
    <div class="carousel-track">
      <div class="carousel-wrapper" ref="scrollContainer">
        <div class="carousel">
          <slot></slot>
        </div>
      </div>
    </div>

    <div class="controls">
      <NavigationButton
        direction="prev"
        :disabled="isAtStart"
        @click="scrollPrev"
      />
      <div class="progress-dots">
        <button
          v-for="(_, index) in itemCount"
          :key="index"
          class="dot"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        />
      </div>
      <NavigationButton
        direction="next"
        :disabled="isAtEnd"
        @click="scrollNext"
        class="hidden sm:block"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import NavigationButton from './NavigationButton.vue'

const props = defineProps({
  itemCount: {
    type: Number,
    required: true
  }
})

const scrollContainer = ref(null)
const currentSlide = ref(0)

// Simplified computed properties
const isAtStart = computed(() => currentSlide.value === 0)
const isAtEnd = computed(() => currentSlide.value === props.itemCount - 1)

const goToSlide = (index) => {
  if (!scrollContainer.value) return

  const slideWidth = scrollContainer.value.offsetWidth
  scrollContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  })
  currentSlide.value = index
}

const scrollNext = () => {
  if (!isAtEnd.value) {
    goToSlide(currentSlide.value + 1)
  }
}

const scrollPrev = () => {
  if (!isAtStart.value) {
    goToSlide(currentSlide.value - 1)
  }
}

const checkScrollPosition = () => {
  if (!scrollContainer.value) return
  
  const { scrollLeft, clientWidth } = scrollContainer.value
  // Update current slide
  currentSlide.value = Math.round(scrollLeft / clientWidth)
}

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', checkScrollPosition)
    checkScrollPosition()
  }
})

watch(() => props.itemCount, () => {
  checkScrollPosition()
})
</script>

<style lang="scss" scoped>
.carousel-container {
  @apply flex flex-col items-center;
}

.carousel-track {
  @apply w-full overflow-hidden;
  
  @screen sm {
    @apply max-w-3xl; // Add max width for larger screens
  }
}

.carousel-wrapper {
  @apply overflow-x-scroll overflow-y-hidden relative w-full rounded-lg;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  touch-action: pan-x;

  &::-webkit-scrollbar {
    display: none;
  }
}

.carousel {
  @apply flex;
}

.controls {
  @apply flex items-center justify-center gap-4 mt-8;
  
  @screen sm {
    @apply gap-8; // Increase gap on larger screens
  }
}

.progress-dots {
  @apply flex justify-center gap-2;
}

.dot {
  @apply w-3 h-3 rounded-full bg-gray-400 transition-all duration-200;

  &.active {
    @apply bg-gray-800 scale-125;
  }

  &:hover {
    @apply bg-gray-600;
  }
}
</style> 