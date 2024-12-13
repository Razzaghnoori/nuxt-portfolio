<template>
  <div class="header-taimer">
    <div class="header-container">
      <div class="avatar">
        <img src="assets/images/profile.png" alt="User Avatar" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.header-container {
  width: 90vw;
  height: 200vh;
  width: 100vw;
  position: sticky;
  bottom: 0;
}
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
  80% {
    scale: 1.1;
    opacity: 1;
  }
  90% {
    scale: 0.5;
    opacity: 1;
  }
  100% {
    opacity: 0;
    scale: 0.5;
  }
}
</style>
