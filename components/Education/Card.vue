<template>
  <a
    :href="education.university.link"
    :alt="education.university.name"
    target="_blank"
  >
    <div class="card">
      <div class="wrapper">
        <LazyNuxtImg
          :src="education.image"
          class="cover-image rounded-xl"
          :alt="`Mohammad Razzaghnoori Studying ${education.degree} at ${education.university.name}`"
        />
      </div>
      <div
        class="text-block bg-neutral-950 opacity-80 p-4 text-center text-nowrap"
      >
        <div class="flex justify-between w-full">
          <small class="text-xs sm:text-lg lg:text-2xl font-bold">{{
            education.university.name
          }}</small>
          <small class="text-xs sm:text-lg lg:text-2xl font-bold">{{ education.duration }}</small>
        </div>
        <h3 class="text-lg sm:text-2xl lg:text-4xl font-extrabold text-orange-500 p-0">
          {{ education.degree }}
        </h3>
      </div>
      <LazyNuxtImg
        :src="education.university.image"
        class="character"
        :alt="`Mohammad Razzaghnoori Studying ${education.degree} at ${education.university.name}`"
      />
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  education: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.card {
  --card-width: clamp(300px, 45vw, 650px);
  --card-height: var(--card-width);

  width: var(--card-width);
  height: var(--card-height);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 36px;
  perspective: 2500px;
  margin: 0 50px;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wrapper {
  transition: all 0.5s;
  position: absolute;
  width: 100%;
  z-index: -1;
}

.card:hover .wrapper {
  transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
  box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  filter: blur(6px);
}

.wrapper::before,
.wrapper::after {
  content: "";
  opacity: 0;
  width: 100%;
  height: 80px;
  transition: all 0.5s;
  position: absolute;
  left: 0;
}
.wrapper::before {
  top: 0;
  height: 100%;
  background-image: linear-gradient(
    to top,
    transparent 46%,
    rgba(12, 13, 19, 0.5) 68%,
    rgba(12, 13, 19) 97%
  );
}
.wrapper::after {
  bottom: 0;
  opacity: 1;
  background-image: linear-gradient(
    to bottom,
    transparent 46%,
    rgba(12, 13, 19, 0.5) 68%,
    rgba(12, 13, 19) 97%
  );
}

.card:hover .wrapper::before,
.wrapper::after {
  opacity: 1;
}

.card:hover .wrapper::after {
  height: 120px;
}
.text-block {
  transition: transform 0.5s;
  margin: -2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
}
.card:hover .text-block {
  transform: translate3d(0%, -100px, 100px);
}

.character {
  width: 100%;
  max-height: var(--card-height);
  object-fit: contain;
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  z-index: -1;
  mask: linear-gradient(black 60%, transparent);
}

.card:hover .character {
  opacity: 1;
  transform: translate3d(0%, -30%, 100px);
}
</style>
