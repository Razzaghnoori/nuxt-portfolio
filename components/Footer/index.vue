<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Social Icons -->
      <div class="social-icons">
        <a
          v-for="(link, name) in socials"
          :href="link"
          target="_blank"
          :aria-label="name"
        >
          <font-awesome :icon="['fab', name]" />
        </a>
      </div>

      <!-- Contact Info -->
      <div class="contact-info">
        <span>
          Email: <a :href="`mailto:${email}`">{{ email }}</a>
        </span>
        <span>
          Phone: <a :href="`tel:${phone}`">{{ phone }}</a>
        </span>
        <span>
          Address:
          <span v-for="addressLine in address">{{ addressLine }}</span>
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { data, error } = await useFetch("/api/general", {
  lazy: true,
});
const { socials, email, phone, address } = data?.value || {};
</script>

<style scoped lang="scss">
.footer {
  @apply flex items-center justify-center bg-neutral-100 text-neutral-950 md:p-8 text-xl;
  width: 94vw;
  min-height: 20vh;
  border-radius: 3rem 3rem 0 0;

  @media (max-width: 640px) {
    border-radius: 0;
  }
}

.footer-container {
  @apply container flex justify-center md:justify-between flex-wrap gap-8 p-4;
}

.social-icons {
  @apply flex gap-2 min-w-min;
}

.social-icons {
  a {
    @apply text-neutral-950;
    margin: 0 10px;
    font-size: 2rem;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      @apply text-blue-700 scale-105 -translate-y-1;
    }
  }
}

.contact-info {
  min-width: 300px;
  span {
    @apply font-bold block;

    span {
      @apply font-normal block;
      &:first-child {
        display: inline;
      }
    }
  }
  a {
    @apply text-blue-700;
    text-decoration: none;
    transition: color 0.3s;
    font-weight: normal;

    &:hover {
      @apply text-blue-700;
    }
  }
}
</style>
