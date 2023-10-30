const { createApp, ref } = Vue;



const app = createApp({
  data() {
    return {
      data: [],
      item: {},
      active: false,
    };
  },
  methods: {
    getCurrencyAll() {
      axios.get("https://cbu.uz/uz/arkhiv-kursov-valyut/json/")
        .then((res) => {
          this.data = res.data.map((item) => (item));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getModal(item) {
      this.item = {...item};
      this.active = !this.active;
    }
  },
  mounted() {
    this.getCurrencyAll();
  },
});

app.mount("#app");
