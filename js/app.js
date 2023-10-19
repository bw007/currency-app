const { createApp, ref } = Vue;

const app = createApp({
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getCurrencyAll() {
      axios.get("https://cbu.uz/uz/arkhiv-kursov-valyut/json/")
        .then((res) => {
          this.data = [...res.data];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getCurrencyAll();
  },
});

app.mount("#app");
