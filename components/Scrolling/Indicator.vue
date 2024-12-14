<template>
  <div class="container_mouse">
    <span class="mouse-btn">
      <span class="mouse-scroll"></span>
    </span>
    <span>Scroll Down</span>
    <small class="no-pressure-text">(if you want, no pressure)</small>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container_mouse {
  --color: rgba(122, 122, 124, 0.918);
  position: relative;
  bottom: 0%;
  text-align: center;
  color: var(--color);
  font-weight: bold;
  text-transform: uppercase;
  padding-top: 2rem;
  cursor: pointer;

  .mouse-btn {
    margin: 10px auto;
    width: 40px;
    height: 80px;
    border: 4px solid var(--color);
    border-radius: 30px;
    display: flex;

    .mouse-scroll {
      display: block;
      width: 20px;
      height: 20px;
      background: linear-gradient(
        170deg,
        rgba(122, 122, 124, 0.918),
        rgb(123, 124, 124)
      );
      border-radius: 50%;
      margin: auto;
      animation: scrolling 1s linear infinite;
    }
  }
}
.no-pressure-text {
  @apply font-handwritten font-extralight text-sm lowercase block;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  animation: appear 3s forwards;
  animation-delay: 2s;
}

@keyframes scrolling {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(20px);
  }
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
}
</style>
