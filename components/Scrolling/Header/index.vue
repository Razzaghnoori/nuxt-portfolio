<template>
  <div class="header-taimer">
    <ScrollingIndicator />
    <div class="header-container">
      <ScrollingAvatar />
      <ScrollingHeaderInfo />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .header-container {
    height: 140vh;
    width: 90vw;
  }
}
</style>
