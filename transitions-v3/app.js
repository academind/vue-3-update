new Vue({
  el: '#app',
  data: {
    isVisible: true
  },
  methods: {
    toggleBox() {
      this.isVisible = !this.isVisible;
    }
  },
});
