<template>
  <div class="header-info">
    <h1>Hi, I'm <strong>James</strong></h1>
    <p>
      I’m a Full Stack Engineer with over 5 years of professional experience,
      proficient in a wide range of tech stacks. Take a moment to explore my
      expertise below!
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header-info {
  @apply flex flex-col gap-2 text-white font-bold max-w-lg m-4;
  position: sticky;
  top: 0;
  right: 0;

  animation: header-info-animation linear forwards;
  animation-timeline: view(20% 60%);

  h1 {
    @apply text-orange-500 uppercase;
    font-size: 4rem;
    font-weight: bolder;

    strong {
      @apply p-2 bg-orange-500 text-white;
    }
  }
}

@keyframes header-info-animation {
  0% {
    scale: 0.8;
    opacity: 0;
  }
  5% {
    scale: 1;
    opacity: 1;
  }
  80% {
    scale: 1.1;
    opacity: 1;
  }
  100% {
    opacity: 0;
    scale: 1;
  }
}
</style>
