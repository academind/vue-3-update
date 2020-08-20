<template>
  <div class="container">
    <form @submit.prevent="createUser">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" v-model="enteredName" />
      </div>
      <button>Add User</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
    };
  },
  methods: {
    createUser() {
      this.$store.dispatch("addUser", { name: this.enteredName });
      this.enteredName = '';
    },
  },
};
</script>

<style scoped>
form {
  text-align: center;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  font: inherit;
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
}

button {
  font: inherit;
  background-color: #3a003a;
  border: 1px solid #3a003a;
  color: white;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #700a70;
  border-color: #700a70;
}
</style>