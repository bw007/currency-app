const { createApp, ref } = Vue;

const app = createApp({
  data() {
    return {
      data: [],
      fullData: [],
      // flag: ""
    };
  },
  methods: {
    getCurrencyAll() {
      axios.get("https://cbu.uz/uz/arkhiv-kursov-valyut/json/")
        .then((res) => {
          this.data = res.data.map(item => item)
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
