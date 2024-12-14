<template>
  <div class="avatar">
    <img src="assets/images/profile.png" alt="User Avatar" />
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
  width: auto;
  font-size: 3em;
  color: #fff;
  z-index: 100;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: avatar-shrink linear forwards;
  transform-origin: bottom;
  animation-timeline: view();

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
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
  100% {
    opacity: 0;
    scale: 0.6;
  }
}
</style>
