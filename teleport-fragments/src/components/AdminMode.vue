<template>
  <li>
    <confirm-dialog v-if="forceConfirm" @cancel="cancelChange" @confirm="confirmChange"></confirm-dialog>
    <h2>{{ modeName }}</h2>
    <button @click="deactivate">Deactivate</button>
  </li>
</template>

<script>
import ConfirmDialog from "./ConfirmDialog.vue";

export default {
  props: ["modeName"],
  emits: ["deactivate"],
  components: {
    ConfirmDialog,
  },
  data() {
    return {
      forceConfirm: false,
    };
  },
  methods: {
    deactivate() {
      this.forceConfirm = true;
    },
    cancelChange() {
      this.forceConfirm = false;
    },
    confirmChange() {
      this.$emit("deactivate");
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #1f001f;
  padding: 1rem;
}

h2 {
  margin: 0;
}
</style>