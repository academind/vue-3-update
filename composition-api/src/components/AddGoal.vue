<template>
  <section class="container">
    <form @submit.prevent="addGoal">
      <div>
        <label for="goaltext">Goal</label>
        <input type="text" id="goaltext" v-model="enteredText" />
      </div>
      <p v-if="invalidInput">Please enter a valid goal text (non-empty).</p>
      <button>Add Goal</button>
    </form>
  </section>
</template>

<script>
import { ref, watch } from "vue";

export default {
  emits: ["add-goal"],
  setup(_, context) {
    const enteredText = ref("");
    const invalidInput = ref(false);

    watch(invalidInput, function (val) {
      if (val) {
        console.log("Analytics: Invalid Input");
      }
    });

    function addGoal() {
      invalidInput.value = false;
      if (enteredText.value === "") {
        invalidInput.value = true;
        return;
      }
      context.emit("add-goal", enteredText.value);
      enteredText.value = "";
    }

    return {
      enteredText,
      invalidInput,
      addGoal,
    };
  },
  // data() {
  //   return {
  //     enteredText: "",
  //     invalidInput: false,
  //   };
  // },
  // methods: {
  //   addGoal() {
  //     this.invalidInput = false;
  //     if (this.enteredText === "") {
  //       this.invalidInput = true;
  //       return;
  //     }
  //     this.$emit("add-goal", this.enteredText);
  //     this.enteredText = '';
  //   },
  // },
  // watch: {
  //   invalidInput(val) {
  //     if (val) {
  //       console.log("Analytics: Invalid Input");
  //     }
  //   },
  // },
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
</style>