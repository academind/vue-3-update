<template>
  <admin-center></admin-center>
</template>

<script>
import AdminCenter from "./components/AdminCenter.vue";

export default {
  components: {
    AdminCenter,
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
  max-width: 25rem;
  margin: 3rem auto;
  padding: 1rem;
  border-radius: 12px;
}

button {
  background-color: #1f001f;
  border: 1px solid #1f001f;
  color: white;
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  margin-right: 1rem;
}

button:hover,
button:active {
  background-color: #750a75;
  border-color: #750a75;
}
</style>
