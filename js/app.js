const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: '',
      lastName: ''
    };
  },
  watch: {
    // name(value) {
    //   this.fullName = `${value}`;
    // }
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
      this.fullName = this.firstName + this.lastName;
    }
  }
});

app.mount('#events');
