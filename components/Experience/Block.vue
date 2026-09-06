<template>
  <article class="experience-card" :class="{ reversed }">
    <div class="experience-visual">
      <Image
        v-if="experience.image"
        :src="experience.image"
        :alt="`Mohammad Razzaghnoori at ${experience.company.name}`"
        width="600"
        height="400"
      />
      <div v-else class="experience-monogram" aria-label="HolzLand Becker">
        <span>HB</span>
        <small>HolzLand<br />Becker</small>
      </div>
    </div>
    <ExperienceTextBlock
      :title="experience.company.name"
      :description="experience.description"
      :duration="experience.duration"
      :position="experience.position"
      :link="experience.company.link ?? '#'"
      :tags="experience.tags"
    />
  </article>
</template>

<script setup>
defineProps({
  experience: {
    type: Object,
    required: true,
  },
  reversed: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.experience-card {
  @apply relative grid w-full max-w-6xl gap-8 border-t border-white/10 py-12 lg:grid-cols-2 lg:gap-16;
  margin-left: auto;
  margin-right: auto;

  &.reversed {
    direction: rtl;

    > * {
      direction: ltr;
    }
  }
}

.experience-visual {
  @apply flex min-h-[16rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900;
  background-image: radial-gradient(circle at 30% 20%, rgba(45, 212, 191, 0.18), transparent 35%), linear-gradient(135deg, #111827, #020617);

  img {
    @apply h-full w-full object-cover opacity-90 transition duration-500;
    &:hover {
      @apply scale-105 opacity-100;
    }
  }
}

.experience-monogram {
  @apply flex h-full min-h-[16rem] w-full flex-col items-center justify-center text-center text-white;

  span {
    @apply text-8xl font-black tracking-[-0.1em] text-transparent bg-clip-text bg-gradient-to-br from-teal-200 to-violet-300;
  }

  small {
    @apply mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400;
  }
}
</style>
