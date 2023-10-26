const { createApp, ref } = Vue;

const app = createApp({
  data() {
    return {
      data: [],
      fullData: [],
    };
  },
  methods: {
    getCurrencyAll(flag) {
      axios.get("https://cbu.uz/uz/arkhiv-kursov-valyut/json/")
        .then((res) => {
          
          this.data = res.data.map(item => {
            item.flag = this.getCountryFlag()
            return item;
          })

          console.log(this.data[0].flag);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCountryFlag(code = 170) {
      return axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
        .then((res) => res.data[0].flags.svg)
    }
  },
  mounted() {
    this.getCurrencyAll()
  },
});

app.mount("#app");
