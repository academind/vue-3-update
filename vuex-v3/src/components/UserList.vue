<template>
  <div class="container">
    <ul>
      <li v-for="user in loadedUsers" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    loadedUsers() {
      return this.$store.getters.users;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>