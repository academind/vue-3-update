Vue.component('the-button', {
  template: '<button @click="updateMessage">Click me</button>',
  methods: {
    updateMessage() {
      this.$emit('update');
    },
  },
});

new Vue({
  el: '#app',
  data: {
    message: 'This works in Vue 2!',
  },
  methods: {
    changeMessage() {
      this.message = 'Will it work in Vue 3?';
    },
  },
});
