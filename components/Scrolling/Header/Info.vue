<template>
  <div class="header-info">
    <h1>Hi, I'm <strong>Mohammad</strong></h1>
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
  width: min(80vw, 100%);
  position: sticky;
  top: 0;
  right: 0;
  padding: 3rem 0 5rem 0;

  animation: header-info-animation linear forwards;
  animation-timeline: view(20% 60%);

  h1 {
    @apply text-orange-500 uppercase text-2xl sm:text-7xl leading-normal sm:leading-tight;
    font-weight: bolder;

    strong {
      @apply p-2 bg-orange-500 text-white;
    }
  }
}

@keyframes header-info-animation {
  80% {
    scale: 1.1;
    opacity: 1;
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    scale: 1;
    filter: blur(20px);
  }
}
</style>
