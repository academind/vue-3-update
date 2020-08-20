<template>
  <div>
    <the-header></the-header>
    <transition name="route" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 40rem;
  margin: 3rem auto;
  padding: 1rem;
  border-radius: 12px;
}

.route-enter,
.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-active,
.route-leave-active {
  transition: all 0.3s ease;
}

.route-enter-to,
.route-leave {
  opacity: 1;
  transform: translateY(0);
}
</style>
