const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    reset() {
      this.name = '';
    }
  },
  computed: {
    fullName() {
      if (this.name === '') {
        return '';
      }
      return `${this.name} Sayed`;
    }
  }
});

app.mount('#events');
