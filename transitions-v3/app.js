Vue.createApp({
  data() {
    return { isVisible: true };
  },
  methods: {
    toggleBox() {
      this.isVisible = !this.isVisible;
    },
  },
}).mount('#app');
