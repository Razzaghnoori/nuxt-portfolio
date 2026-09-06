<template>
  <div class="header-info">
    <div class="eyebrow"><span class="status-dot" /> Senior Frontend Engineer · Germany</div>
    <h1>
      I build products<br />
      <strong>people want to use.</strong>
    </h1>
    <p class="intro">
      I'm Mohammad Razzaghnoori, a senior frontend engineer focused on Vue, Nuxt,
      TypeScript, performance, and turning complicated product ideas into clear,
      reliable experiences.
    </p>
    <div class="hero-links">
      <a href="#experience">View my work <span>↓</span></a>
      <a href="mailto:razzaghnoori@gmail.com">Let's talk <span>↗</span></a>
    </div>
    <div class="hero-note">Currently building e-commerce experiences at HolzLand Becker.</div>
  </div>
</template>

<style lang="scss" scoped>
.header-info {
  @apply flex flex-col max-w-3xl mx-auto px-6 sm:px-10;
  width: min(100%, 72rem);
  padding-top: 7rem;
  padding-bottom: 8rem;
  z-index: 2;
  position: relative;
  animation: header-info-animation linear forwards;
  animation-timeline: view(20% 60%);

  .eyebrow {
    @apply flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-teal-300;
  }

  .status-dot {
    @apply h-2 w-2 rounded-full bg-teal-300;
    box-shadow: 0 0 0 5px rgba(94, 234, 212, 0.12), 0 0 18px rgba(94, 234, 212, 0.8);
  }

  h1 {
    @apply mt-8 text-5xl sm:text-7xl lg:text-8xl font-semibold leading-[0.98] tracking-[-0.055em] text-white;

    strong {
      @apply text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-violet-300;
    }
  }

  .intro {
    @apply mt-8 max-w-2xl text-lg sm:text-xl leading-8 text-slate-300;
  }

  .hero-links {
    @apply mt-9 flex flex-wrap gap-3;

    a {
      @apply rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-all;

      &:first-child {
        @apply border-teal-300 bg-teal-300 text-slate-950;
      }

      &:hover {
        @apply -translate-y-0.5 border-teal-200;
      }

      span {
        @apply ml-2;
      }
    }
  }

  .hero-note {
    @apply mt-10 border-l-2 border-white/15 pl-4 text-sm text-slate-400;
  }
}

@keyframes header-info-animation {
  80% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    filter: blur(18px);
    transform: translateY(-24px);
  }
}

@media (max-width: 768px) {
  .header-info {
    padding-top: 3rem;
    padding-bottom: 5rem;
  }
}
</style>
