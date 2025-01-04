<template>
  <div class="avatar">
    <NuxtImg
      src="/images/profile.webp"
      alt="Mohammad Razzaghnoori"
      width="800"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.avatar {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: end;
  height: 90%;
  max-height: 100%;
  font-size: 3em;
  color: #fff;
  z-index: 100;

  animation: avatar-shrink linear forwards;
  transform-origin: bottom;
  animation-timeline: view();

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}

@media (max-width: 768px) {
  .avatar {
    position: static;

    img {
      border-radius: 100%;
      border: 2px dashed #fff;
    }
  }
}

@keyframes avatar-shrink {
  0% {
    scale: 1;
    opacity: 1;
  }
  30% {
    scale: 1.1;
    opacity: 1;
  }
  90% {
    scale: 0.5;
    opacity: 1;
  }
  99% {
    opacity: 0;
    scale: 0.6;
  }
  100% {
    opacity: 0;
    scale: 0;
  }
}
</style>
