<template>
  <section class="container">
    <h2>Active Modes</h2>
    <ul>
      <admin-mode
        v-for="mode in activeModes"
        :key="mode.id"
        :mode-name="mode.name"
        @deactivate="deactivateMode(mode.id)"
      ></admin-mode>
    </ul>
  </section>
</template>

<script>
import AdminMode from "./AdminMode.vue";

export default {
  components: {
    AdminMode,
  },
  data() {
    return {
      modes: [
        { id: "m1", name: "Read Only", isActive: true },
        { id: "m2", name: "Read Write", isActive: true },
      ],
    };
  },
  computed: {
    activeModes() {
      return this.modes.filter((m) => m.isActive);
    },
  },
  methods: {
    deactivateMode(modeId) {
      const mode = this.modes.find((m) => m.id === modeId);
      mode.isActive = false;
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
</style>