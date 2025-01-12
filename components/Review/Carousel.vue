<template>
  <div 
    class="carousel-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    tabindex="0"
    @keydown="handleKeydown"
  >
    <div class="carousel-track">
      <div class="carousel-wrapper" ref="scrollContainer">
        <div class="carousel">
          <slot :transformStyle="transformStyle"></slot>
        </div>
      </div>
    </div>

    <div class="controls">
      <NavigationButton
        direction="prev"
        :disabled="isAtStart"
        @click="scrollPrev"
        aria-label="Previous review"
      />
      <div class="progress-dots">
        <button
          v-for="(_, index) in itemCount"
          :key="index"
          class="dot"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
          aria-label="Go to review"
        ></button>
      </div>
      <NavigationButton
        direction="next"
        :disabled="isAtEnd"
        @click="scrollNext"
        aria-label="Next review"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import NavigationButton from './NavigationButton.vue'

const props = defineProps({
  itemCount: {
    type: Number,
    required: true
  }
})

const container = ref(null)
const scrollContainer = ref(null)
const currentSlide = ref(0)
const mousePosition = ref({ x: 0.5, y: 0.5 })
const isHovering = ref(false)

const transformStyle = computed(() => {
  if (!isHovering.value) {
    return {
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease'
    }
  }

  const { x, y } = mousePosition.value
  const rotateX = (y - 0.5) * -6  // 3 degrees of rotation max
  const rotateY = (x - 0.5) * 6  // 3 degrees of rotation max

  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transition: 'transform 0.1s ease'
  }
})

const handleMouseMove = (e) => {
  if (!container.value) return

  const rect = container.value.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width
  const y = (e.clientY - rect.top) / rect.height
  
  mousePosition.value = { x, y }
  isHovering.value = true
}

const handleMouseLeave = () => {
  isHovering.value = false
}

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

const handleKeydown = (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      scrollPrev()
      break
    case 'ArrowRight':
      scrollNext()
      break
  }
}

// Add global keyboard listener
const handleGlobalKeydown = (e) => {
  // Only handle keyboard events if the carousel is visible in viewport
  if (!container.value) return
  const rect = container.value.getBoundingClientRect()
  const isVisible = rect.top < window.innerHeight && rect.bottom >= 0
  
  if (isVisible) {
    handleKeydown(e)
  }
}

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', checkScrollPosition)
    checkScrollPosition()
  }
  // Add global keyboard listener
  window.addEventListener('keydown', handleGlobalKeydown)
})

onUnmounted(() => {
  // Remove global keyboard listener
  window.removeEventListener('keydown', handleGlobalKeydown)
})

watch(() => props.itemCount, () => {
  checkScrollPosition()
})
</script>

<style lang="scss" scoped>
.carousel-container {
  @apply flex flex-col items-center outline-none; // Add outline-none for focus state
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
  @apply flex items-center;
}

.controls {
  @apply flex items-center justify-center gap-4 mt-8;
  
  @screen sm {
    @apply gap-8; // Increase gap on larger screens
  }
}

.progress-dots {
  @apply flex justify-center gap-3;
}

.dot {
  @apply w-4 h-4 rounded-full bg-gray-400 transition-all duration-500;

  &.active {
    @apply bg-gray-800 scale-125 w-8;
  }

  &:hover {
    @apply bg-gray-600;
  }
}
</style> 